const sendMail = require('../../utils/send-mail')

export default (req, res) => {
    if (req.method === 'POST') {
        try {
            const data = {
                subject: 'Новый сообщение от клиента с сайта grand-casino.ru',
                html: `
                    <p><strong>Имя:</strong> ${req.body.name}</p>
                    <p><strong>Телефон:<strong> ${req.body.phone}</p>
                    <p><strong>Город:</strong> ${req.body.city}</p>
                    <p><strong>Желаемая дата:</strong> ${req.body.date}</p>
                    <p><strong>Сообщение:</strong> ${req.body.message}</p>
                `
            }

            sendMail(data)
        } catch (error) {
            throw new Error(error)
        }
    } else {
        res.send('Method not allowed!')
    }
}
