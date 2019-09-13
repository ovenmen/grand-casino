const Router = require('koa-router')

const connection = require('../../connection')
const Page = require('../../models/page')
const Component = require('../../models/component')
const Reviews = require('../../models/reviews')

const router = new Router()

// Мероприятия
router.post('/api/events', async ctx => {
    try {
        await connection.open()

        ctx.state.page = await Page.findOne({ pageId: 'events' })
        ctx.state.logo = await Component.findOne({ componentId: 'logo' })
        ctx.state.navigation = await Component.findOne({ componentId: 'navigation' })
        ctx.state.reviews = await Reviews.findOne({ best: true })
        ctx.state.contacts = await Component.findOne({ componentId: 'contacts' })
        ctx.state.footer = await Component.findOne({ componentId: 'footer' })

        const {
            page, logo, navigation, reviews, contacts, footer
        } = ctx.state

        const response = {
            title: page.title,
            description: page.description,
            keywords: page.keywords,
            logo: logo.title,
            header: page.header,
            headerImage: page.headerImage,
            breadcrumbs: page.breadcrumbs,
            navigation: navigation.items,
            info: page.info,
            events: page.events,
            review: {
                header: page.review.header,
                description: reviews
            },
            footer: {
                description: footer.description,
                copirated: footer.copirated,
                address: contacts.address,
                operationMode: contacts.operationMode,
                email: contacts.email,
                phone: contacts.phone,
                navigation: navigation.items
            }
        }

        ctx.statusCode = 200
        ctx.body = response
        ctx.respond = true
        await connection.close()
    } catch (error) {
        ctx.throw(500, error)
    }
})

module.exports = router
