const connection = require('../connection')
const settings = require('../settings')

module.exports = (router, app) => {
    router.get('/events/:subpage', async ctx => {
        const subpage = ctx.params.subpage
        const db = await connection()
        const collection = db.collection(settings.collection)
        const docs = collection.findOne({ pageId: subpage })
        const json = await docs
        const data = { data: json }
        await app.render(ctx.req, ctx.res, '/event-page', data)

        ctx.respond = false
    })

    router.post('/api/v1/pages/events', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const docs = collection.findOne({ pageId: 'events' })
        const json = await docs

        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}