const https = require('https')
const fs = require('fs')
const Koa = require('koa')
const next = require('next')
const forceHTTPS = require('koa-force-https')
const Router = require('@koa/router')
const cors = require('@koa/cors')
const multer = require('@koa/multer')
const helmet = require('koa-helmet')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const mongoose = require('mongoose')
const config = require('config')

const dev = process.env.NODE_ENV !== 'production'
const port = 443
const app = next({ dev })
const handle = app.getRequestHandler()
const options = {
    key: fs.readFileSync('keys/6472878.key', 'utf8'),
    cert: fs.readFileSync('keys/6472878.crt', 'utf8'),
    ca: fs.readFileSync('keys/ca_bundle_6472878.crt', 'utf8')
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/images/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const init = async () => {
    const url = config.get('db.url')
    const params = config.get('db.params')

    try {
        await mongoose.connect(url, params)
        console.log('Connection DB')

        app.prepare().then(() => {
            const server = new Koa()
            const router = new Router()

            // middleware
            server.use(forceHTTPS())
            server.use(json())
            server.use(bodyParser())
            server.use(helmet())
            server.use(cors())
            server.use(multer({ storage: storage }).single('photo'))

            server.use(require('./routes/api/index').routes())
            server.use(require('./routes/api/events').routes())
            server.use(require('./routes/api/prices').routes())
            server.use(require('./routes/api/franchise').routes())
            server.use(require('./routes/api/reviews').routes())
            server.use(require('./routes/api/contacts').routes())
            server.use(require('./routes/api/casino-club').routes())
            server.use(require('./routes/api/gold-casino').routes())
            server.use(require('./routes/api/casino-royal').routes())
            server.use(require('./routes/api/grand-casino').routes())
            server.use(require('./routes/api/error').routes())
            server.use(require('./routes/api/send-review-form').routes())
            server.use(require('./routes/api/send-contact-form').routes())

            server.use(router.routes())
            server.use(router.allowedMethods())

            server.use(async (ctx, next) => {
                ctx.status = 200
                await next()
            })

            router.get('*', async ctx => {
                await handle(ctx.req, ctx.res)
                ctx.respond = false
            })

            https.createServer(options, server.callback()).listen(port, () => {
                // eslint-disable-next-line no-console
                console.log('Starting production server')
            })
        })
    } catch (error) {
        console.log('error', error.message)
    }
}

init()