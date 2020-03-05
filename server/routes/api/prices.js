const Router = require('@koa/router')

const Page = require('../../models/page')
const Component = require('../../models/component')

const router = new Router()

// Цены
router.post('/api/prices', async ctx => {
    try {
        ctx.state.page = await Page.findOne({ pageId: 'prices' })
        ctx.state.logo = await Component.findOne({ componentId: 'logo' })
        ctx.state.navigation = await Component.findOne({ componentId: 'navigation' })
        ctx.state.contacts = await Component.findOne({ componentId: 'contacts' })
        ctx.state.footer = await Component.findOne({ componentId: 'footer' })

        const {
            page, logo, navigation, contacts, footer
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
            prices: page.prices,
            action: page.action,
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
    } catch (error) {
        ctx.throw(500, error)
    }
})

module.exports = router
