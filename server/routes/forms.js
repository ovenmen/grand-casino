const connection = require('../connection')
const settings = require('../settings')

module.exports = (router) => {
    router.post('/api/v1/send-form', async ctx => {
        const formData = await ctx.request.body
        ctx.respond = false
    })

    return router
}
