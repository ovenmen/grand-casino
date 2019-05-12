const connection = require('../connection')
const settings = require('../settings')

module.exports = (router) => {
    router.post('/api/v1/pages/franchise', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const docs = collection.findOne({ pageId: 'franchise' })
        const json = await docs

        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
