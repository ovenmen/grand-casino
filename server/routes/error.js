module.exports = (router) => {
    router.post('/api/v1/pages/error', async ctx => {
        const json = await require('../../stub/api/v1/pages/error.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
