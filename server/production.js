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

const sendMail = require('../utils/send-mail')

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

    // Главная
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
            reviews: {
                ...data.reviews,
                items: _.takeRight(_.shuffle(reviews.items), 2)
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Мероприятия
    router.post('/api/events', async ctx => {
        const data = await require('../stub/api/events.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const reviews = await require('../stub/api/data/reviews.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            review: {
                ...data.review,
                description: _.head(_.shuffle(reviews.items))
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Цены
    router.post('/api/prices', async ctx => {
        const data = await require('../stub/api/prices.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Франшиза
    router.post('/api/franchise', async ctx => {
        const data = await require('../stub/api/franchise.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Отзывы
    router.post('/api/reviews', async ctx => {
        const data = await require('../stub/api/reviews.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const reviews = await require('../stub/api/data/reviews.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            reviews: {
                ...data.reviews,
                items: _.reverse(reviews.items)
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Контакты
    router.post('/api/contacts', async ctx => {
        const data = await require('../stub/api/contacts.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            contacts: {
                ...data.contacts,
                ...contacts
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Casino Club
    router.post('/api/casino-club', async ctx => {
        const data = await require('../stub/api/casino-club.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const photos = await require('../stub/api/data/photos.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            photos: {
                ...data.photos,
                ...photos
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Gold Casino
    router.post('/api/gold-casino', async ctx => {
        const data = await require('../stub/api/gold-casino.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const photos = await require('../stub/api/data/photos.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            photos: {
                ...data.photos,
                ...photos
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Casino Royal
    router.post('/api/casino-royal', async ctx => {
        const data = await require('../stub/api/casino-royal.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const photos = await require('../stub/api/data/photos.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            photos: {
                ...data.photos,
                ...photos
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Grand Casino
    router.post('/api/grand-casino', async ctx => {
        const data = await require('../stub/api/grand-casino.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const photos = await require('../stub/api/data/photos.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            photos: {
                ...data.photos,
                ...photos
            },
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // Error
    router.post('/api/error', async ctx => {
        const data = await require('../stub/api/error.json')
        const logo = await require('../stub/api/data/logo.json')
        const navigation = await require('../stub/api/data/navigation.json')
        const contacts = await require('../stub/api/data/contacts.json')
        const footer = await require('../stub/api/data/footer.json')

        const response = {
            ...data,
            ...logo,
            ...navigation,
            footer: {
                ...footer,
                ...contacts
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
    })

    // form review
    router.post('/api/send-review-form', async ctx => {
        try {
            const data = {
                subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                    <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                    <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
                `
            }

            sendMail(data)
        } catch (error) {
            ctx.throw(500, 'Не удалось отправить отзыв', { error })
        }
    })

    // form contacts
    router.post('/api/send-contacts-form', async ctx => {
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
        } catch (error) {
            ctx.throw(500, 'Не удалось отправить заявку', { error })
        }
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
