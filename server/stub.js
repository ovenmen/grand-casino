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
        try {
            const head = await require('../stub/api/v1/head/head-index.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-index.json')
            const content = await require('../stub/api/v1/content/index.json')
            const reviews = require('../stub/api/v1/reviews')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...content,
                reviews: takeRight(reviews, 2),
                ...footer
            }
            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        try {
            const head = await require(`../stub/api/v1/head/head-${ctx.params.subpage}.json`)
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require(`../stub/api/v1/navigation/navigation-${ctx.params.subpage}.json`)
            const breadcrumbs = await require(`../stub/api/v1/breadcrumbs/breadcrumbs-${ctx.params.subpage}.json`)
            const content = await require(`../stub/api/v1/content/${ctx.params.subpage}.json`)
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...breadcrumbs,
                ...content,
                ...footer
            }

            app.render(ctx.req, ctx.res, '/event-page', { data })
            ctx.respond = false
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-events.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-events.json')
            const breadcrumbs = await require('../stub/api/v1/breadcrumbs/breadcrumbs-events.json')
            const content = await require('../stub/api/v1/content/events.json')
            const reviews = require('../stub/api/v1/reviews')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...breadcrumbs,
                ...content,
                review: last(reviews),
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-prices.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-prices.json')
            const breadcrumbs = await require('../stub/api/v1/breadcrumbs/breadcrumbs-prices.json')
            const content = await require('../stub/api/v1/content/prices.json')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...breadcrumbs,
                ...content,
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
        
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-franchise.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-franchise.json')
            const breadcrumbs = await require('../stub/api/v1/breadcrumbs/breadcrumbs-franchise.json')
            const content = await require('../stub/api/v1/content/franchise.json')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...breadcrumbs,
                ...content,
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-reviews.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-reviews.json')
            const breadcrumbs = await require('../stub/api/v1/breadcrumbs/breadcrumbs-reviews.json')
            const content = await require('../stub/api/v1/content/reviews.json')
            const reviews = require('../stub/api/v1/reviews')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...breadcrumbs,
                ...content,
                reviews,
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-contacts.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-contacts.json')
            const content = await require('../stub/api/v1/content/contacts.json')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...content,
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        try {
            const head = await require('../stub/api/v1/head/head-error.json')
            const brand = await require('../stub/api/v1/partials/brand.json')
            const navigation = await require('../stub/api/v1/navigation/navigation-error.json')
            const content = await require('../stub/api/v1/content/error.json')
            const footer = await require('../stub/api/v1/partials/footer.json')
            const data = {
                ...head,
                ...brand,
                ...navigation,
                ...content,
                ...footer
            }

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // api forms
    // form review
    router.post('/api/v1/send-form-review', async ctx => {
        try {
            const data = {
                subject: 'Новый отзыв с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                    <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                    <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
                `
            }
    
            sendMail(data)
            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // form contacts
    router.post('/api/v1/send-form-contacts', async ctx => {
        try {
            const data = {
                subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                    <p><strong>Телефон:<strong> ${ctx.request.body.phone}</p>
                    <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                    <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
                `
            }
    
            sendMail(data)
            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
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
