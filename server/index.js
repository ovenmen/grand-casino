const fs = require('fs')
const http = require('http')
const https = require('https')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3000 : 443
const app = next({ dev })
const handle = app.getRequestHandler()

const options = {
    key: fs.readFileSync('private/rootCA.key'),
    cert: fs.readFileSync('private/rootCA.pem')
}

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // import pages
    const index = require('./routes/index.js')(router)
    const events = require('./routes/events.js')(router, app)
    const prices = require('./routes/prices.js')(router)
    const franchise = require('./routes/franchise.js')(router)
    const reviews = require('./routes/reviews.js')(router)
    const contacts = require('./routes/contacts.js')(router)
    const error = require('./routes/error.js')(router)

    // middleware
    server.use(logger())
    server.use(json())
    server.use(bodyParser())

    // use pages
    server.use(index.routes())
    server.use(events.routes())
    server.use(prices.routes())
    server.use(franchise.routes())
    server.use(reviews.routes())
    server.use(contacts.routes())
    server.use(error.routes())

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes())

    if (!dev) {
        https.createServer(options, server.callback()).listen(port, () => {
            console.log(`> Сервер запущен на https://localhost:${port}`)
        })
    } else {
        http.createServer(server.callback()).listen(port, () => {
            console.log(`> Сервер запущен на http://localhost:${port}`)
        })
    }
})
