const mongoose = require('mongoose')

const reviewFormScheme = new mongoose.Schema({
    show: Boolean,
    best: Boolean,
    fullname: String,
    city: String,
    image: String,
    date: String,
    description: String
}, {
    collection: 'reviews'
})

module.exports = mongoose.model('ReviewForm', reviewFormScheme)
