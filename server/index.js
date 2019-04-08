const http = require('http')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.post('/api/v1/pages/index', async ctx => {
        const json = await require('../stub/api/v1/pages/index.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.post('/api/v1/pages/events', async ctx => {
        const json = await require('../stub/api/v1/pages/events.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.post('/api/v1/pages/prices', async ctx => {
        const json = await require('../stub/api/v1/pages/prices.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.post('/api/v1/pages/franchise', async ctx => {
        const json = await require('../stub/api/v1/pages/franchise.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.post('/api/v1/pages/contacts', async ctx => {
        const json = await require('../stub/api/v1/pages/contacts.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.post('/api/v1/pages/error', async ctx => {
        const json = await require('../stub/api/v1/pages/error.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.get('/events/:subpage', async ctx => {
        const subpage = ctx.params.subpage
        const json = await require(`../stub/api/v1/pages/${subpage}.json`)
        const data = { data: json }
        await app.render(ctx.req, ctx.res, '/event-page', data)
        ctx.respond = false
    })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(json())
    server.use(router.routes())

    http.createServer(server.callback()).listen(port, () => {
        console.log(`> Сервер запущен на http://localhost:${port}`)
    })
})
