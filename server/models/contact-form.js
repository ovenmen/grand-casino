const mongoose = require('mongoose')

const contactFormScheme = new mongoose.Schema({
    name: String,
    phone: String,
    city: String,
    date: String,
    message: String
}, {
    collection: 'contacts'
})

module.exports = mongoose.model('ContactForm', contactFormScheme)
