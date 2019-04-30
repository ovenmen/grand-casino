const mongoose = require('mongoose')

const username = 'detanton'
const password = 'I71&fyh5'
const dbname = 'grand-casino'
const url = `mongodb+srv://${username}:${password}@cluster0-zcza4.gcp.mongodb.net/${dbname}?retryWrites=true`
const params = {
    useNewUrlParser: true
}

const connectionMongoDB = () => mongoose.connect(url, params)

module.exports = connectionMongoDB()
