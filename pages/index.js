import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'
import Reviews from '../components/reviews'

const IndexPage = ({ data }) => {
    const { promo, action, activity, reviews } = data.content

    return (
        <section>
            {promo && <Promo {...promo} />}
            {action && <Action {...action} />}
            {activity && <Activity {...activity} />}
            {reviews && <Reviews {...reviews} />}
        </section>
    )
}

IndexPage.getInitialProps = async ({ err, res }) => {
    const mongoose = require('mongoose')

    const username = 'detanton'
    const password = 'I71%26fyh5'
    const dbname = 'grand-casino'
    const url = `mongodb+srv://${username}:${password}@cluster0-zcza4.gcp.mongodb.net/${dbname}?retryWrites=true`
    const collection = 'pages'

    mongoose.connect(url, { useNewUrlParser: true })
    const db = mongoose.connection
    db.once('open', () => {
        const Schema = mongoose.Schema
        const model = mongoose.model
        const schema = new Schema({ title: String })
        const HomeModel = mongoose.models.Home || model('Home', schema)
        const result = HomeModel.findOne({ title: 'Grand Casino | Выездные мероприятия' })

        console.log(result)
    })
    db.on('error', (err) => { console.log(err) })

    const response = {
        head: {
            title: 'Grand Casino | Выездные мероприятия',
            description: 'Выездные мероприятия',
            keywords: 'фан казино, фан казино самара, выездное казино, рулетка, покер, блэкджек, корпоратив, сценарий праздника, сценарий юбилея, шоу программы, мальчишник, девичник, сценарий девичника, аренда казино, роскошная вечеринка'
        },
        navigation: {},
        content: {},
        footer: {}
    }
    const json = response

    return {
        data: json,
        statusCode: 200
    }
}

IndexPage.propTypes = {
    data: object
}

export default IndexPage
