const Router = require('koa-router')
const _ = require('lodash')

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ReviewForm = require('../../models/review-form')

const router = new Router()

// Send review form
router.post('/api/send-review-form', async ctx => {
    try {
        await connection.open()

        const data = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${ctx.request.body.name}</p>
                <p><strong>Город:</strong> ${ctx.request.body.city}</p>
                <p><strong>Желаемая дата:</strong> ${ctx.request.body.date}</p>
                <p><strong>Сообщение:</strong> ${ctx.request.body.message}</p>
            `
        }
        const review = new ReviewForm({
            show: true,
            best: false,
            fullname: _.upperFirst(ctx.request.body.name),
            city: _.upperFirst(ctx.request.body.city),
            image: ctx.request.body.image || 'uploads/default-photo.jpg',
            date: ctx.request.body.date,
            description: _.upperFirst(ctx.request.body.message)
        })

        await sendMail(data)
        await review.save()
        await connection.close()
    } catch (error) {
        ctx.throw(500, 'Не удалось отправить отзыв', { error })
    }
})

module.exports = router
