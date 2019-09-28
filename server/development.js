const http = require('http')
const Koa = require('koa')
const next = require('next')
const Router = require('@koa/router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const compression = require('compression')
const koaConnect = require('koa-connect')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
const favicon = require('koa-favicon')

const index = require('./routes/api/index')
const events = require('./routes/api/events')
const prices = require('./routes/api/prices')
const franchise = require('./routes/api/franchise')
const reviews = require('./routes/api/reviews')
const contacts = require('./routes/api/contacts')
const casinoClub = require('./routes/api/casino-club')
const goldCasino = require('./routes/api/gold-casino')
const casinoRoyal = require('./routes/api/casino-royal')
const grandCasino = require('./routes/api/grand-casino')
const error = require('./routes/api/error')
const sendReviewForm = require('./routes/api/send-review-form')
const sendContactForm = require('./routes/api/send-contact-form')

const dev = process.env.NODE_ENV !== 'production'
const port = 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // middleware
    server.use(koaConnect(compression()))
    server.use(json())
    server.use(bodyParser())
    server.use(helmet())
    server.use(cors())
    server.use(favicon(__dirname + '/static/images/favicon.ico'))
    server.use(async (ctx, next) => {
        ctx.status = 200
        await next()
    })

    server.use(index.routes())
    server.use(events.routes())
    server.use(prices.routes())
    server.use(franchise.routes())
    server.use(reviews.routes())
    server.use(contacts.routes())
    server.use(casinoClub.routes())
    server.use(goldCasino.routes())
    server.use(casinoRoyal.routes())
    server.use(grandCasino.routes())
    server.use(error.routes())
    server.use(sendReviewForm.routes())
    server.use(sendContactForm.routes())

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        // ctx.respond = false
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    http.createServer(server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Starting development server')
    })
})
