const Router = require('@koa/router')
const _ = require('lodash')

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ReviewForm = require('../../models/review-form')

const router = new Router()

// Send review form
router.post('/api/send-review-form', async ctx => {
    try {
        await connection.open()

        const { name, city, date, message } = ctx.request.body
        const { originalname } = ctx.request.file

        const modifyName = _.upperFirst(name)
        const modifyCity = _.upperFirst(city)
        const modifyMessage = _.upperFirst(message)

        const data = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${modifyName}</p>
                <p><strong>Город:</strong> ${modifyCity}</p>
                <p><strong>Желаемая дата:</strong> ${date}</p>
                <p><strong>Сообщение:</strong> ${modifyMessage}</p>
            `
        }

        const review = new ReviewForm({
            show: true,
            best: false,
            fullname: modifyName,
            city: modifyCity,
            image: originalname ? `uploads/${originalname}` : 'uploads/default-photo.jpg',
            date,
            description: modifyMessage
        })

        ctx.status = 200

        await sendMail(data)
        await review.save()
        await connection.close()

        ctx.redirect('/reviews')
    } catch (error) {
        ctx.throw(500, 'Не удалось отправить отзыв', { error })
    }
})

module.exports = router
