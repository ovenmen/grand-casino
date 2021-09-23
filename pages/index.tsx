import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import clientPromise from '../lib/mongodb'

const Home: FC = ({ page, navigation }) => (
    <div className="container">
        <h1>Grand-casino.com.ru</h1>
        {console.log(page, navigation)}
    </div>
)

export const getServerSideProps: GetServerSideProps = async () => {
    const client = await clientPromise

    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const db = client.db()

    let page
    let navigation

    try {
        page = await db.collection('pages').findOne({ pageId: 'index' })
        navigation = await db.collection('components').findOne({ componentId: 'navigation' })
        console.log(navigation)
    } catch (error) {
        throw new Error(error.message)
    }

    page = JSON.parse(JSON.stringify(page))
    navigation = JSON.parse(JSON.stringify(navigation))

    return {
        props: {
            page,
            navigation
        }
    }
}

export default Home