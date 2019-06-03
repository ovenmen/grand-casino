const http = require('http')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const { takeRight, last } = require('lodash')

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
    server.use(helmet())
    server.use(async (ctx, next) => {
        ctx.status = 200
        await next()
    })
    server.use(router.routes())
    server.use(router.allowedMethods())

    /* API */
    // index page
    router.post('/api/v1/pages/index', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-index.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-index.json')
        ctx.state.content = await require('../stub/api/v1/content/index.json')
        ctx.state.reviews = require('../stub/api/v1/reviews')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.content,
            reviews: takeRight(ctx.state.reviews, 2),
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        ctx.state.head = await require(`../stub/api/v1/partials/head-${ctx.params.subpage}.json`)
        ctx.state.navigation = await require(`../stub/api/v1/partials/navigation-${ctx.params.subpage}.json`)
        ctx.state.breadcrumbs = await require(`../stub/api/v1/partials/breadcrumbs-${ctx.params.subpage}.json`)
        ctx.state.content = await require(`../stub/api/v1/content/${ctx.params.subpage}.json`)
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.breadcrumbs,
            ...ctx.state.content,
            ...ctx.state.footer
        }
        ctx.state.query = { data: ctx.state.data }

        app.render(ctx.req, ctx.res, '/event-page', ctx.state.query)
        ctx.respond = false
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-events.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-events.json')
        ctx.state.breadcrumbs = await require('../stub/api/v1/partials/breadcrumbs-events.json')
        ctx.state.content = await require('../stub/api/v1/content/events.json')
        ctx.state.reviews = require('../stub/api/v1/reviews')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.breadcrumbs,
            ...ctx.state.content,
            review: last(ctx.state.reviews),
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-prices.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-prices.json')
        ctx.state.breadcrumbs = await require('../stub/api/v1/partials/breadcrumbs-prices.json')
        ctx.state.content = await require('../stub/api/v1/content/prices.json')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.breadcrumbs,
            ...ctx.state.content,
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-franchise.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-franchise.json')
        ctx.state.breadcrumbs = await require('../stub/api/v1/partials/breadcrumbs-franchise.json')
        ctx.state.content = await require('../stub/api/v1/content/franchise.json')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.breadcrumbs,
            ...ctx.state.content,
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-reviews.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-reviews.json')
        ctx.state.breadcrumbs = await require('../stub/api/v1/partials/breadcrumbs-reviews.json')
        ctx.state.content = await require('../stub/api/v1/content/reviews.json')
        ctx.state.reviews = require('../stub/api/v1/reviews')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.breadcrumbs,
            ...ctx.state.content,
            reviews: ctx.state.reviews,
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-contacts.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-contacts.json')
        ctx.state.content = await require('../stub/api/v1/content/contacts.json')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.content,
            ...ctx.state.footer
        }
        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        ctx.state.head = await require('../stub/api/v1/partials/head-error.json')
        ctx.state.navigation = await require('../stub/api/v1/partials/navigation-error.json')
        ctx.state.content = await require('../stub/api/v1/content/error.json')
        ctx.state.footer = await require('../stub/api/v1/partials/footer.json')
        ctx.state.data = {
            ...ctx.state.head,
            ...ctx.state.navigation,
            ...ctx.state.content,
            ...ctx.state.footer
        }
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

    http.createServer(server.callback()).listen(port, () => {
        // eslint-disable-next-line no-console
        console.log('Starting development server stub')
    })
})
