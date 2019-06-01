const DB_NAME = 'grand-casino'
const COLLECTION = 'pages'
const HOST = 'localhost'
const PORT = 27017
const URL = `mongodb://${HOST}:${PORT}/${DB_NAME}`

module.exports = {
    url: URL,
    collection: COLLECTION,
    params: {
        retryWrites: true,
        useNewUrlParser: true,
        keepAlive: true,
        autoReconnect: true,
        reconnectInterval: 500,
        connectTimeoutMS: 10000,
    }
}
