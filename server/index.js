const http = require('http')
const https = require('https')
const fs = require('fs')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const forceHTTPS = require('koa-force-https')

const connection = require('./connection')
const settings = require('./settings')
const sendMail = require('../utils/send-mail')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3000 : 443
const app = next({ dev })
const handle = app.getRequestHandler()
const options = {
    hostname: 'grand-casino.com.ru',
    port: 443,
    path: '/',
    method: 'GET',
    key: fs.readFileSync('keys/6472878.key'),
    cert: fs.readFileSync('keys/6472878.crt'),
    ca: fs.readFileSync('keys/ca_bundle_6472878.crt')
}
const serverModule = dev ? http : https
const serverOptions = dev ? null : options
const message = dev ? 'Starting development server' : 'Starting production server'

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // middleware
    if (!dev) { server.use(forceHTTPS()) }
    server.use(json())
    server.use(bodyParser())

    /* API */
    // index page
    router.post('/api/v1/pages/index', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'index' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: ctx.params.subpage })
        ctx.state.query = { data: ctx.state.data }

        await app.render(ctx.req, ctx.res, '/event-page', ctx.state.query)
        ctx.respond = false
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'events' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'prices' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'franchise' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'reviews' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'contacts' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        ctx.state.db = await connection()
        ctx.state.collection = ctx.state.db.collection(settings.collection)
        ctx.state.data = await ctx.state.collection.findOne({ pageId: 'error' })

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // api forms
    // form review
    router.post('/api/v1/send-form-review', async ctx => {
        ctx.state.data = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
            `
        }

        sendMail(ctx.state.data)
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // form contacts
    router.post('/api/v1/send-form-contacts', async ctx => {
        ctx.state.data = {
            subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                <p><strong>Телефон:<strong> ${ctx.request.body.phone}</p>
                <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
            `
        }

        sendMail(ctx.state.data)
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.status = 200
        await next()
    })
    server.use(router.routes())
    server.use(router.allowedMethods())

    if (!dev) {
        http.createServer(server.callback()).listen(80)
    }
    serverModule.createServer(serverOptions, server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log(message)
    })
})
