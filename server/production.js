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
const _ = require('lodash')

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

    router.post('/api/index', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const reviews = await require('../stub/api/data/reviews.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            reviews: { ...data.reviews, items: _.takeRight(_.shuffle(reviews.items), 2) },
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/events', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/prices', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/franchise', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/prices', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/reviews', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const reviews = require('../stub/api/data/reviews.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            reviews: { ...data.reviews, items: _.reverse(reviews.items) },
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/contacts', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/events/casino-club', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/events/casino-royal', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/events/gold-casino', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/events/grand-casino', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.post('/api/error', async ctx => {
        const data = await require('../stub/api/index.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        // ctx.respond = false
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    https.createServer(options, server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Starting production server')
    })
})
