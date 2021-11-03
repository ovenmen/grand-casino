import format from 'date-fns/format'
import { NextApiRequest, NextApiResponse } from 'next'

import clientPromise from '../../lib/mongodb'
import sendMail from '../../lib/send-mail'

interface ISendFormDataProps {
    name: string,
    city: string,
    date: string,
    phone: string,
    message: string
}

const sendFormData = async (body: ISendFormDataProps) => {
    try {
        const client = await clientPromise
        const db = client.db()

        const { name, city, date, phone, message } = body
        const modifyName = name.replace(/^./, name[0].toUpperCase())
        const modifyCity = city.replace(/^./, city[0].toUpperCase())
        const modifyMessage = message.replace(/^./, message[0].toUpperCase())
        const modifyDate = format(new Date(date), 'dd.MM.yyyy')
        const data = {
            subject: 'Новая заявка с сайта grand-casino.ru',
            html: `
                <p><strong>Имя:</strong> ${modifyName}</p>
                <p><strong>Телефон:<strong> ${phone}</p>
                <p><strong>Город:</strong> ${modifyCity}</p>
                <p><strong>Желаемая дата:</strong> ${modifyDate}</p>
                <p><strong>Сообщение:</strong> ${modifyMessage}</p>
            `
        }

        await db.collection('contacts').insertOne({
            name: modifyName,
            phone,
            city: modifyCity,
            date: modifyDate,
            message: modifyMessage
        })

        sendMail(data)
    } catch (error) {
        throw new Error(`Не удалось отправить отзыв! ${error}`)
    }
}

const contactFormHundler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { body } = req

        sendFormData(body)
    } else {
        throw new Error('Данный метод не поддерживается!')
    }
}

export default contactFormHundler