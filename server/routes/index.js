// const connection = require('../connection')

module.exports = (router) => {

    router.post('/api/v1/pages/index', async ctx => {
        const json = await require('../../stub/api/v1/pages/index.json')
        ctx.body = { data: json }
        ctx.respond = true
    })

    return router
}
