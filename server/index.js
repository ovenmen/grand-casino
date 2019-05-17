const fs = require('fs')
const http = require('http')
const https = require('https')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const connection = require('./connection')
const settings = require('./settings')
const sendMail = require('../utils/send-mail')

const dev = process.env.NODE_ENV !== 'production'
const port = dev ? 3000 : 443
const app = next({ dev })
const handle = app.getRequestHandler()

const options = {
    key: fs.readFileSync('keys/server.key'),
    cert: fs.readFileSync('keys/server.crt')
}

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // middleware
    server.use(logger())
    server.use(json())
    server.use(bodyParser())

    /* API */
    // index page
    router.post('/api/v1/pages/index', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'index' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        const subpage = ctx.params.subpage
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: subpage })
        const data = { data: json }

        await app.render(ctx.req, ctx.res, '/event-page', data)
        ctx.respond = false
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'events' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'prices' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'franchise' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'reviews' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'contacts' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const json = await collection.findOne({ pageId: 'error' })

        ctx.body = { data: json }
        ctx.respond = true
    })

    // api forms
    // form review
    router.post('/api/v1/send-form-review', async ctx => {
        const { name = '', city = '', date = null, message = '' } = ctx.request.body
        const json = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Город:</strong> ${city}</p>
                <p><strong>Желаемая дата:</strong> ${date}</p>
                <p><strong>Сообщение:</strong> ${message}</p>
            `
        }

        sendMail(json)
        ctx.body = { data: json }
        ctx.respond = true
    })

    // form contacts
    router.post('/api/v1/send-form-contacts', async ctx => {
        const { name = '', phone = '', city = '', date = null, message = '' } = ctx.request.body
        const json = {
            subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Телефон:<strong> ${phone}</p>
                <p><strong>Город:</strong> ${city}</p>
                <p><strong>Желаемая дата:</strong> ${date}</p>
                <p><strong>Сообщение:</strong> ${message}</p>
            `
        }

        sendMail(json)
        ctx.body = { data: json }
        ctx.respond = true
    })

    router.get('*', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next()
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    if (!dev) {
        https.createServer(options, server.callback()).listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`> Сервер запущен на https://localhost:${port}`)
        })
    } else {
        http.createServer(server.callback()).listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`> Сервер запущен на http://localhost:${port}`)
        })
    }
})
