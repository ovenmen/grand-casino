const USERNAME = 'admin'
const PASSWORD = 'IXXXUB3RPvkqJQwB5rkq'
const DB_NAME = 'grand-casino'
// const URL = `mongodb://localhost:27017/${DB_NAME}`
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-r5zev.gcp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = {
    url: URL,
    dbName: DB_NAME,
    params: {
        retryWrites: true,
        useNewUrlParser: true,
        keepAlive: true,
        autoReconnect: true,
        reconnectInterval: 500,
        connectTimeoutMS: 30000,
        reconnectTries: 30,
        useUnifiedTopology: true
    }
}
