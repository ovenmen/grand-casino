import _ from 'lodash'

const data = require('../../stub/api/reviews.json')
const logo = require('../../stub/api/data/logo.json')
const navigation = require('../../stub/api/data/navigation.json')
const reviews = require('../../stub/api/data/reviews.json')
const contacts = require('../../stub/api/data/contacts.json')
const footer = require('../../stub/api/data/footer.json')

export default (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.json(JSON.stringify({
            ...data,
            ...logo,
            ...navigation,
            reviews: { ...data.reviews, items: _.reverse(reviews.items) },
            footer: { ...footer, ...contacts }
        }))
        console.log(req)
    } else {
        res.send('Method not allowed!')
    }
}
