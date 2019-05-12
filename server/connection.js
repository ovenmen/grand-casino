const MongoClient = require('mongodb').MongoClient
const settings = require('./settings')

module.exports = async () =>
    await MongoClient.connect(settings.url, settings.params)
        .then((connection) => connection.db(settings.database))
        .catch((err) => console.error(err))