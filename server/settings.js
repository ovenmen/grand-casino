const USERNAME = 'detanton'
const PASSWORD = 'I71%26fyh5'
const DB_NAME = 'grand-casino'
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-zcza4.gcp.mongodb.net/${DB_NAME}?retryWrites=true`

module.exports = {
    url: URL,
    dbName: DB_NAME,
    params: {
        retryWrites: true,
        useNewUrlParser: true,
        keepAlive: true,
        autoReconnect: true,
        reconnectInterval: 500,
        connectTimeoutMS: 10000
    }
}
