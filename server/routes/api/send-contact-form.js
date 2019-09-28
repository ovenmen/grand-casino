const Router = require('@koa/router')
const _ = require('lodash')

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ContactForm = require('../../models/contact-form')

const router = new Router()

// Send contact form
router.post('/api/send-contacts-form', async ctx => {
    try {
        await connection.open()

        const {
            name, city, date, phone, message
        } = ctx.request.body

        const modifyName = _.upperFirst(name)
        const modifyCity = _.upperFirst(city)
        const modifyMessage = _.upperFirst(message)

        const data = {
            subject: 'Новая заявка с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${modifyName}</p>
                <p><strong>Телефон:<strong> ${phone}</p>
                <p><strong>Город:</strong> ${modifyCity}</p>
                <p><strong>Желаемая дата:</strong> ${date}</p>
                <p><strong>Сообщение:</strong> ${modifyMessage}</p>
            `
        }

        const contact = new ContactForm({
            name: modifyName,
            phone,
            city: modifyCity,
            date,
            message: modifyMessage
        })

        sendMail(data)
        await contact.save()
        await connection.close()
    } catch (error) {
        ctx.throw(500, 'Не удалось отправить отзыв', { error })
    }
})

module.exports = router
