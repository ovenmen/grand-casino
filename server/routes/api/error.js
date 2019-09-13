const Router = require('koa-router')

const connection = require('../../connection')
const Page = require('../../models/page')
const Component = require('../../models/component')

const router = new Router()

// Error
router.post('/api/error', async ctx => {
    try {
        await connection.open()

        ctx.state.page = await Page.findOne({ pageId: 'error' })
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
            navigation: navigation.items,
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
