const mongoose = require('mongoose')
const settings = require('./settings')

const open = () => mongoose.connect(settings.url, settings.params)
const close = () => mongoose.disconnect()

module.exports = {
    open,
    close
}
