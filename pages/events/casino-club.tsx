import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'

import clientPromise from '../../lib/mongodb'
import Breadcrumbs from '../../components/breadcrumbs'
import EventDescription from '../../components/event-description'
import Action from '../../components/action'
import Loader from '../../components/loader'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import HeaderPage from '../../components/header-page'

interface ICasinoClub {
    photos: {}
}

const PhotosDynamic = dynamic(() => import('../../components/photo-carousel'), {
    loading: () => <Loader />,
    ssr: true
})

const ScrollerDynamic = dynamic(() => import('../../components/scroller'), {
    ssr: false
})

const CasinoClub: FC<ICasinoClub> = ({
    resolvedUrl,
    logo,
    navigation,
    breadcrumbs
}) => (
    <>
        {navigation && (
            <Navigation
                navigation={navigation}
                logo={logo}
                resolvedUrl={resolvedUrl}
            />
        )}
        {/* {breadcrumbs && <Breadcrumbs {...props} />} */}
        {/* <HeaderPage {...props} /> */}
        {/* <EventDescription {...props} /> */}
        {/* <PhotosDynamic photos={props.photos} />
        <Action {...props} />
        <Footer {...props} /> */}
        <ScrollerDynamic />
    </>
)

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl }) => {
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
            page: await db.collection('pages').findOne({ pageId: 'casino-club' }),
            logo: await db.collection('components').findOne({ componentId: 'logo' }),
            navigation: await db.collection('components').findOne({ componentId: 'navigation' }),
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
        contacts: JSON.parse(JSON.stringify(data.contacts)),
        footer: JSON.parse(JSON.stringify(data.footer))
    }

    return {
        props: {
            resolvedUrl,
            title: data.page.title,
            description: data.page.description,
            keywords: data.page.keywords,
            logo: data.logo.title,
            header: data.page.header,
            headerImage: data.page.headerImage,
            breadcrumbs: data.page.breadcrumbs,
            action: data.page.action,
            navigation: data.navigation,
            photos: data.page.photos,
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

export default CasinoClub