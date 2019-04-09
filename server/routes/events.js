module.exports = (router, app) => {
    router.get('/events/:subpage', async ctx => {
        const subpage = ctx.params.subpage
        const json = await require(`../../stub/api/v1/pages/${subpage}.json`)
        const data = { data: json }
        await app.render(ctx.req, ctx.res, '/event-page', data)
        ctx.respond = false
    })

    router.post('/api/v1/pages/events', async ctx => {
        const json = await require('../../stub/api/v1/pages/events.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}