module.exports = (router) => {
    router.post('/api/v1/pages/reviews', async ctx => {
        const json = await require('../../stub/api/v1/pages/reviews.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
