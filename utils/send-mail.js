const nodemailer = require('nodemailer')

const host = 'smtp.yandex.ru'
const port = 465 // true for 465, false for other ports
const secure = true
const user = 'det-anton'
const pass = 'I71&fyh5'
const from = '"Anton Detev" <det-anton@yandex.ru>'
const to = 'detanton@gmail.com'

const sendMail = async (data) => {
    if (data) {
        try {
            const { subject, html } = data
            const transporter = await nodemailer.createTransport({ host, port, secure, auth: { user, pass } })
            const info = await transporter.sendMail({ from, to, subject, html })
        
            // eslint-disable-next-line no-console
            console.log('Message sent: %s', info.messageId)
        } catch (err) {
            throw new Error(err)
        }
    }
}

module.exports = sendMail
