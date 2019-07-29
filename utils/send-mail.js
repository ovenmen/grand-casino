const nodemailer = require('nodemailer')

const host = 'smtp.timeweb.ru'
const port = 465 // true for 465, false for other ports
const secure = true
const user = 'admin'
const pass = 'zd8WxVUUrfjEr9a'
const from = '"Grand Casino" <admin@grand-casino.com.ru>'
const to = 'detanton@gmail.com'

const sendMail = async (data) => {
    if (data) {
        try {
            const { subject, html } = data
            const transporter = await nodemailer.createTransport({
                host,
                port,
                secure,
                auth: { user, pass },
                tls: {
                    // do not fail on invalid certs
                    rejectUnauthorized: false
                }
            })
            const info = await transporter.sendMail({
                from,
                to,
                subject,
                html
            })

            // eslint-disable-next-line no-console
            console.log('Message sent: %s', info.messageId)
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = sendMail
