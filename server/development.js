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
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'index'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const contentCollection = await db.collection('content')
        const reviewsCollection = await db.collection('reviews')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataReviews = await reviewsCollection.find({ show: true }).toArray()
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataContent,
            reviews: takeRight(ctx.state.dataReviews, 2), 
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // events subpage
    router.get('/events/:subpage', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const navigationCollection = await db.collection('navigation')
        const contentCollection = await db.collection('content')

        ctx.state.dataHead = await headCollection.findOne({ pageId: ctx.params.subpage })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId: ctx.params.subpage })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId: ctx.params.subpage })
        ctx.state.dataContent = await contentCollection.findOne({ pageId: ctx.params.subpage })
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            ...ctx.state.dataFooter
        }

        ctx.state.query = { data: ctx.state.data }

        connection.close()

        app.render(ctx.req, ctx.res, '/event-page', ctx.state.query)
        ctx.respond = false
    })

    // events page
    router.post('/api/v1/pages/events', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'events'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const contentCollection = await db.collection('content')
        const reviewsCollection = await db.collection('reviews')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataReviews = await reviewsCollection.find({ show: true }).toArray()
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            review: last(ctx.state.dataReviews), 
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // prices events
    router.post('/api/v1/pages/prices', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'prices'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const contentCollection = await db.collection('content')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // franchise page
    router.post('/api/v1/pages/franchise', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'franchise'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const contentCollection = await db.collection('content')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // reviews page
    router.post('/api/v1/pages/reviews', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'reviews'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const contentCollection = await db.collection('content')
        const reviewsCollection = await db.collection('reviews')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataReviews = await reviewsCollection.find({ show: true }).toArray()
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            reviews: ctx.state.dataReviews,
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // contacts page
    router.post('/api/v1/pages/contacts', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'contacts'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const breadcrumbsCollection = await db.collection('breadcrumbs')
        const contentCollection = await db.collection('content')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataBreadcrumbs = await breadcrumbsCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataBreadcrumbs,
            ...ctx.state.dataContent,
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // error page
    router.post('/api/v1/pages/error', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)
        const pageId = 'error'

        const headCollection = await db.collection('head')
        const partialsCollection = await db.collection('partials')
        const navigationCollection = await db.collection('navigation')
        const contentCollection = await db.collection('content')

        ctx.state.dataHead = await headCollection.findOne({ pageId })
        ctx.state.dataBrand = await partialsCollection.findOne({ componentId: 'brand' })
        ctx.state.dataNavigation = await navigationCollection.findOne({ pageId })
        ctx.state.dataContent = await contentCollection.findOne({ pageId })
        ctx.state.dataFooter = await partialsCollection.findOne({ componentId: 'footer' })

        ctx.state.data = {
            ...ctx.state.dataHead,
            ...ctx.state.dataBrand,
            ...ctx.state.dataNavigation,
            ...ctx.state.dataContent,
            ...ctx.state.dataFooter
        }

        connection.close()

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // api forms
    // form review
    router.post('/api/v1/send-form-review', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)

        const reviewsCollection = await db.collection('reviews')

        try {
            reviewsCollection.insertOne({
                show: false,
                fullname: ctx.request.body.name,
                city: ctx.request.body.city,
                image: 'no-photo.jpg',
                date: ctx.request.body.date,
                description: ctx.request.body.message
            })
        } catch (err) {
            throw new Error(err)
        }

        ctx.state.data = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
            `
        }

        connection.close()

        sendMail(ctx.state.data)

        ctx.body = { data: ctx.state.data }
        ctx.respond = true
    })

    // form contacts
    router.post('/api/v1/send-form-contacts', async ctx => {
        const connection = await MongoClient.connect(settings.url, settings.params)
        const db = await connection.db(settings.dbName)

        const contactsCollection = await db.collection('contacts')

        try {
            contactsCollection.insertOne({
                fullname: ctx.request.body.name,
                phone: ctx.request.body.phone,
                city: ctx.request.body.city,
                date: ctx.request.body.date,
                message: ctx.request.body.message
            })
        } catch (err) {
            throw new Error(err)
        }

        ctx.state.data = {
            subject: 'Новое сообщение от клиента с сайта grand-casino.ru',
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
        console.log('Starting development server')
    })
})
