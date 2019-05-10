const USERNAME = 'detanton'
const PASSWORD = 'I71%26fyh5'
const DB_NAME = 'grand-casino'

module.exports = {
    url: `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-zcza4.gcp.mongodb.net/${DB_NAME}?retryWrites=true`,
    collection: 'pages',
    params: {
        useNewUrlParser: true,
        keepAlive: true,
        autoReconnect: true,
        reconnectInterval: 500,
        connectTimeoutMS: 10000
    }
}
