const http = require('http')
const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const json = require('koa-json')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const MongoClient = require('mongodb').MongoClient
const { takeRight, last } = require('lodash')

const settings = require('./settings')
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
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'index'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const contentCollection = await db.collection('content')
            const reviewsCollection = await db.collection('reviews')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataReviews = await reviewsCollection.find({ show: true }).toArray()
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataContent,
                reviews: takeRight(dataReviews, 2), 
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const navigationCollection = await db.collection('navigation')
            const contentCollection = await db.collection('content')

            const dataHead = await headCollection.findOne({ pageId: ctx.params.subpage })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId: ctx.params.subpage })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId: ctx.params.subpage })
            const dataContent = await contentCollection.findOne({ pageId: ctx.params.subpage })
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                ...dataFooter
            }

            connection.close()

            app.render(ctx.req, ctx.res, '/event-page', { data })
            ctx.respond = false
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'events'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const contentCollection = await db.collection('content')
            const reviewsCollection = await db.collection('reviews')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataReviews = await reviewsCollection.find({ show: true }).toArray()
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                review: last(dataReviews), 
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'prices'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const contentCollection = await db.collection('content')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'franchise'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const contentCollection = await db.collection('content')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'reviews'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const contentCollection = await db.collection('content')
            const reviewsCollection = await db.collection('reviews')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataReviews = await reviewsCollection.find({ show: true }).toArray()
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                reviews: dataReviews,
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'contacts'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const breadcrumbsCollection = await db.collection('breadcrumbs')
            const contentCollection = await db.collection('content')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataBreadcrumbs,
                ...dataContent,
                ...dataFooter
            }

            connection.close()

            ctx.body = { data }
            ctx.respond = true
        } catch (error) {
            ctx.throw(500, error)
        }
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        try {
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const pageId = 'error'

            const headCollection = await db.collection('head')
            const partialsCollection = await db.collection('partials')
            const navigationCollection = await db.collection('navigation')
            const contentCollection = await db.collection('content')

            const dataHead = await headCollection.findOne({ pageId })
            const dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
            const dataNavigation = await navigationCollection.findOne({ pageId })
            const dataContent = await contentCollection.findOne({ pageId })
            const dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

            const data = {
                ...dataHead,
                ...dataBrand,
                ...dataNavigation,
                ...dataContent,
                ...dataFooter
            }

            connection.close()

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
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const reviewsCollection = await db.collection('reviews')

            reviewsCollection.insertOne({
                show: false,
                fullname: ctx.request.body.name,
                city: ctx.request.body.city,
                image: 'no-photo.jpg',
                date: ctx.request.body.date,
                description: ctx.request.body.message
            })

            const data = {
                subject: 'Новый отзыв с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                    <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                    <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
                `
            }

            connection.close()
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
            const connection = await MongoClient.connect(settings.url, settings.params)
            const db = await connection.db(settings.dbName)
            const contactsCollection = await db.collection('contacts')

            contactsCollection.insertOne({
                fullname: ctx.request.body.name,
                phone: ctx.request.body.phone,
                city: ctx.request.body.city,
                date: ctx.request.body.date,
                message: ctx.request.body.message
            })

            const data = {
                subject: 'Новое сообщение от клиента с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                    <p><strong>Телефон:<strong> ${ctx.request.body.phone}</p>
                    <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                    <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
                `
            }

            connection.close()
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
        console.log('Starting development server')
    })
})
