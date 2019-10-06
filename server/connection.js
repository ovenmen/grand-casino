const mongoose = require('mongoose')
const settings = require('./settings')

const open = async () => mongoose.connect(settings.url, settings.params)
const close = async () => mongoose.disconnect()

module.exports = {
    open,
    close
}
