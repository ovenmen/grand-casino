const mongoose = require('mongoose')

const pageScheme = new mongoose.Schema({
    title: String,
    description: String,
    keywords: String,
    header: String,
    headerImage: String,
    breadcrumbs: Array,
    promo: {
        header: String,
        description: String
    },
    action: {
        header: String,
        description: String,
        buttonTitle: String,
        buttonHref: String
    },
    activity: {
        header: String,
        description: Array,
        buttonTitle: String,
        buttonHref: String,
        items: Array
    },
    reviews: {
        header: String,
        items: Array,
        emptyReviewsMessage: String,
        actionReviewsMessage: String
    },
    info: {
        description: Array
    },
    events: {
        items: Array
    },
    review: {
        header: String
    },
    prices: {
        header: String,
        items: Array,
        description: Array,
        list: {
            title: String,
            items: Array
        }
    },
    franchise: Object,
    map: {
        header: String,
        description: String,
        items: Array
    },
    reviewsForm: {
        header: String,
        fields: Array
    },
    contactsForm: {
        header: String,
        fields: Array,
        submitButtonTitle: String,
        successMessage: String
    },
    contacts: {
        header: String
    },
    event: Object,
    photos: {
        header: String,
        items: Array
    }
}, {
    collection: 'pages'
})

module.exports = mongoose.model('Page', pageScheme)
