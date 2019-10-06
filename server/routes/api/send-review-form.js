const Router = require('@koa/router')
const _ = require('lodash')
const format = require('date-fns').format

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ReviewForm = require('../../models/review-form')

const router = new Router()

// Send review form
router.post('/api/send-review-form', async ctx => {
    try {
        await connection.open()

        const { name, city, date, message } = ctx.request.body
        const { file } = ctx.request

        const modifyName = _.upperFirst(name)
        const modifyCity = _.upperFirst(city)
        const modifyMessage = _.upperFirst(message)
        const modifyDate = format(new Date(date), 'dd.MM.yyyy')

        const data = {
            subject: 'Новый отзыв с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${modifyName}</p>
                <p><strong>Город:</strong> ${modifyCity}</p>
                <p><strong>Желаемая дата:</strong> ${modifyDate}</p>
                <p><strong>Сообщение:</strong> ${modifyMessage}</p>
            `
        }

        const review = new ReviewForm({
            show: true,
            best: false,
            fullname: modifyName,
            city: modifyCity,
            image: file ? `uploads/${file.originalname}` : 'uploads/default-photo.jpg',
            date: modifyDate,
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
