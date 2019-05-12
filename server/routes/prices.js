const connection = require('../connection')
const settings = require('../settings')

module.exports = (router) => {
    router.post('/api/v1/pages/prices', async ctx => {
        const db = await connection()
        const collection = db.collection(settings.collection)
        const docs = collection.findOne({ pageId: 'prices' })
        const json = await docs

        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
