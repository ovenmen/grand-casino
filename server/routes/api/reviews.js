const Router = require('koa-router')
const _ = require('lodash')

const connection = require('../../connection')
const Page = require('../../models/page')
const Component = require('../../models/component')
const Reviews = require('../../models/reviews')

const router = new Router()

// Отзывы
router.post('/api/reviews', async ctx => {
    try {
        await connection.open()

        ctx.state.page = await Page.findOne({ pageId: 'reviews' })
        ctx.state.logo = await Component.findOne({ componentId: 'logo' })
        ctx.state.navigation = await Component.findOne({ componentId: 'navigation' })
        ctx.state.reviews = await Reviews.find({})
        ctx.state.contacts = await Component.findOne({ componentId: 'contacts' })
        ctx.state.footer = await Component.findOne({ componentId: 'footer' })

        const {
            page, logo, navigation, contacts, reviews, footer
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
            reviewsForm: page.reviewsForm,
            reviews: {
                header: page.reviews.header,
                items: _.reverse(reviews),
                emptyReviewsMessage: page.reviews.emptyReviewsMessage,
                actionReviewsMessage: page.reviews.actionReviewsMessage
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
