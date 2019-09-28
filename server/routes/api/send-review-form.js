const Router = require('@koa/router')
const multer = require('@koa/multer')
const _ = require('lodash')

const sendMail = require('../../../utils/send-mail')
const connection = require('../../connection')
const ReviewForm = require('../../models/review-form')

const router = new Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/images/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.originalname)
    }
})

// Send review form
router.post('/api/send-review-form', multer({ storage: storage }).single('photo'), async ctx => {
    try {
        await connection.open()

        const {
            name, city, date, message, photo
        } = ctx.request.body

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
            image: photo || 'uploads/default-photo.jpg',
            date,
            description: modifyMessage
        })

        // await sendMail(data)
        // await review.save()
    } catch (error) {
        ctx.throw(500, 'Не удалось отправить отзыв', { error })
    }
})

module.exports = router
