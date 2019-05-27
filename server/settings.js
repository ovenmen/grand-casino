const USERNAME = 'detanton'
const PASSWORD = 'I71%26fyh5'
const DB_NAME = 'grand-casino'
const COLLECTION = 'pages'

module.exports = {
    // url: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-zcza4.gcp.mongodb.net/${DB_NAME}`,
    url: `mongodb://localhost:27017/${DB_NAME}`,
    host: 'cluster0-zcza4.gcp.mongodb.net',
    database: DB_NAME,
    port: 27017,
    collection: COLLECTION,
    authSource: 'admin',
    params: {
        retryWrites: true,
        useNewUrlParser: true,
        keepAlive: true,
        autoReconnect: true,
        reconnectInterval: 500,
        connectTimeoutMS: 10000,
    }
}
