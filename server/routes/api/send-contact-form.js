const Router = require('koa-router')

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ContactForm = require('../../models/contact-form')

const router = new Router()

// Send contact form
router.post('/api/send-contacts-form', async ctx => {
    try {
        await connection.open()

        const data = {
            subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                <p><strong>Телефон:<strong> ${ctx.request.body.phone}</p>
                <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
            `
        }
        const contact = new ContactForm({
            name: ctx.request.body.name,
            phone: ctx.request.body.phone,
            city: ctx.request.body.city,
            date: ctx.request.body.date,
            message: ctx.request.body.message
        })

        sendMail(data)
        await contact.save()
        await connection.close()
    } catch (error) {
        ctx.throw(500, 'Не удалось отправить отзыв', { error })
    }
})

module.exports = router
