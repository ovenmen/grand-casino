import nodemailer from 'nodemailer'

interface IData {
    subject: string,
    html: string
}

const host = 'smtp.timeweb.ru'
const port = 465 // true for 465, false for other ports
const secure = true
const user = 'admin@grand-casino.com.ru'
const pass = 'zd8WxVUUrfjEr9a'
const from = '"Grand Casino" <admin@grand-casino.com.ru>'
const to = 'detanton@gmail.com, questoria.surgut@gmail.com'

const sendMail = async (data: IData) => {
    try {
        const { subject, html } = data
        const transporter = await nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass }
        })
        const info = await transporter.sendMail({
            from,
            to,
            subject,
            html
        })

        // eslint-disable-next-line no-console
        console.log('Message sent: %s', info.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    } catch (error: any) {
        throw new Error(error)
    }
}

export default sendMail