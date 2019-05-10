const mongoose = require('mongoose')
const settings = require('../settings')

module.exports = (router) => {
    router.post('/api/v1/pages/index', async ctx => {
        const data = await mongoose.connect(settings.url, settings.params).then(() => {
            const Schema = mongoose.Schema
            const model = mongoose.model
            const schema = new Schema({}, { collection: settings.collection })
            const HomeModel = mongoose.models.Home || model('Home', schema)
            return HomeModel.find({ namePage: 'home' }, (err, docs) => {
                if (err) throw err
                mongoose.disconnect()
                return docs
            })
        }, (err) => {
            throw err
        })

        ctx.body = { data: data[0] }
        ctx.respond = true
    })

    return router
}
