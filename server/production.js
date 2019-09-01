const https = require('https')
const fs = require('fs')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const forceHTTPS = require('koa-force-https')
const compression = require('compression')
const koaConnect = require('koa-connect')
const helmet = require('koa-helmet')
const MongoClient = require('mongodb').MongoClient

const dev = process.env.NODE_ENV !== 'production'
const port = 443
const app = next({ dev })
const handle = app.getRequestHandler()
const options = {
    key: fs.readFileSync('keys/6472878.key', 'utf8'),
    cert: fs.readFileSync('keys/6472878.crt', 'utf8'),
    ca: fs.readFileSync('keys/ca_bundle_6472878.crt', 'utf8')
}

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // middleware
    server.use(koaConnect(compression()))
    server.use(forceHTTPS())
    server.use(json())
    server.use(bodyParser())
    server.use(helmet())
    server.use(async (ctx, next) => {
        ctx.status = 200
        await next()
    })
    server.use(router.routes())
    server.use(router.allowedMethods())

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    https.createServer(options, server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Starting production server')
    })
})
