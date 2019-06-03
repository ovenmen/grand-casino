const USERNAME = 'detanton'
const PASSWORD = 'I71%26fyh5'
const DB_NAME = 'grand-casino'
const COLLECTION = 'pages'
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-zcza4.gcp.mongodb.net/${DB_NAME}?retryWrites=true`

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
