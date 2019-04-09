module.exports = (router) => {
    router.post('/api/v1/pages/franchise', async ctx => {
        const json = await require('../../stub/api/v1/pages/franchise.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
