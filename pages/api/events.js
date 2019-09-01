const data = require('../../stub/api/events.json')
const logo = require('../../stub/api/data/logo.json')
const navigation = require('../../stub/api/data/navigation.json')
const contacts = require('../../stub/api/data/contacts.json')
const footer = require('../../stub/api/data/footer.json')

export default (req, res) => {
    if (req.method === 'POST') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.json({
            ...data,
            ...logo,
            ...navigation,
            footer: { ...footer, ...contacts }
        })
    } else {
        res.send('Method not allowed!')
    }
}
