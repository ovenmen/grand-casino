const mongoose = require('mongoose')

const reviewsScheme = new mongoose.Schema({
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

module.exports = mongoose.model('Reviews', reviewsScheme)
