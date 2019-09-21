const mongoose = require('mongoose')

const componentScheme = new mongoose.Schema({
    title: String,
    description: String,
    navigation: Array,
    address: String,
    operationMode: String,
    email: String,
    phone: String,
    copirated: String,
    logo: String,
    items: Array,
    list: Array
}, {
    collection: 'components'
})

module.exports = mongoose.model('Components', componentScheme)
