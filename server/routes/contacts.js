module.exports = (router) => {
    router.post('/api/v1/pages/contacts', async ctx => {
        const json = await require('../../stub/api/v1/pages/contacts.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
