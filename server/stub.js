const http = require('http')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')

const sendMail = require('../utils/send-mail')

const dev = process.env.NODE_ENV !== 'production'
const port = 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    // middleware
    server.use(json())
    server.use(bodyParser())
    server.use(async (ctx, next) => {
        ctx.status = 200
        await next()
    })
    server.use(router.routes())
    server.use(router.allowedMethods())

    /* API */
    // index page
    router.post('/api/v1/pages/index', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/index.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        ctx.state.json = await require(`../stub/api/v1/pages/${ctx.params.subpage}.json`)
        ctx.state.query = { data: ctx.state.json }

        await app.render(ctx.req, ctx.res, '/event-page', ctx.state.query)
        ctx.respond = false
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/events.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/prices.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/franchise.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/reviews.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/contacts.json')
        ctx.body = { data: ctx.state.json }
        ctx.respond = true
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        ctx.state.json = await require('../stub/api/v1/pages/error.json')
        ctx.body = { data: ctx.state.json }
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

    http.createServer(server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Starting development server stub')
    })
})
