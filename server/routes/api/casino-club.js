const Router = require('@koa/router')

const connection = require('../../connection')
const Page = require('../../models/page')
const Component = require('../../models/component')

const router = new Router()

// Casino Club
router.post('/api/casino-club', async ctx => {
    try {
        await connection.open()

        ctx.state.page = await Page.findOne({ pageId: 'casino-club' })
        ctx.state.logo = await Component.findOne({ componentId: 'logo' })
        ctx.state.navigation = await Component.findOne({ componentId: 'navigation' })
        ctx.state.photos = await Component.findOne({ componentId: 'photos' })
        ctx.state.contacts = await Component.findOne({ componentId: 'contacts' })
        ctx.state.footer = await Component.findOne({ componentId: 'footer' })

        const {
            page, logo, navigation, photos, contacts, footer
        } = ctx.state

        const response = {
            title: page.title,
            description: page.description,
            keywords: page.keywords,
            logo: logo.title,
            header: page.header,
            headerImage: page.headerImage,
            navigation: navigation.items,
            breadcrumbs: page.breadcrumbs,
            event: page.event,
            action: page.action,
            photos: {
                header: page.photos.header,
                items: photos.items
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
