import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import clientPromise from '../lib/mongodb'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'
import Reviews from '../components/reviews'
import Navigation from '../components/navigation'
import Footer from '../components/footer'


const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

const Home: FC = (props) => (
    <>
        <Navigation {...props} />
        <Promo {...props} />
        <Action {...props} />
        <Activity {...props} />
        <Reviews {...props} />
        <Footer {...props} />
        <ScrollerDynamic />
    </>
)

export const getServerSideProps: GetServerSideProps = async () => {
    const client = await clientPromise

    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const db = client.db()

    let data

    try {
        data = {
            page: await db.collection('pages').findOne({ pageId: 'index' }),
            logo: await db.collection('components').findOne({ componentId: 'logo' }),
            navigation: await db.collection('components').findOne({ componentId: 'navigation' }),
            reviews: await db.collection('reviews').aggregate([
                { $match: { show: true }},
                { $sample: { size: 2 }}
            ]).toArray(),
            contacts: await db.collection('components').findOne({ componentId: 'contacts' }),
            footer: await db.collection('components').findOne({ componentId: 'footer' })
        }
    } catch (error) {
        throw new Error('Неудалось получить данные!')
    }

    data = {
        page: JSON.parse(JSON.stringify(data.page)),
        logo: JSON.parse(JSON.stringify(data.logo)),
        navigation: JSON.parse(JSON.stringify(data.navigation)),
        reviews: JSON.parse(JSON.stringify(data.reviews)),
        contacts: JSON.parse(JSON.stringify(data.contacts)),
        footer: JSON.parse(JSON.stringify(data.footer))
    }

    return {
        props: {
            title: data.page.title,
            description: data.page.description,
            keywords: data.page.keywords,
            logo: data.logo.title,
            header: data.page.header,
            headerImage: data.page.headerImage,
            promo: data.page.promo,
            action: data.page.action,
            activity: data.page.activity,
            navigation: data.navigation.items,
            reviews: {
                header: data.page.reviews.header,
                items: data.reviews
            },
            footer: {
                description: data.footer.description,
                copirated: data.footer.copirated,
                address: data.contacts.address,
                operationMode: data.contacts.operationMode,
                email: data.contacts.email,
                phone: data.contacts.phone,
                navigation: data.navigation.items
            }
        }
    }
}

export default Home