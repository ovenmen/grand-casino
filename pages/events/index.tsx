import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import clientPromise from '../../lib/mongodb'
import Breadcrumbs from '../../components/breadcrumbs'
import HeaderPage from '../../components/header-page'
import Navigation from '../../components/navigation'
import Info from '../../components/info'
import AllEvents from '../../components/all-events'
import Review from '../../components/review'
import Footer from '../../components/footer'


interface IEventsProps {
    header: string,
    headerImage: string,
    resolvedUrl: string,
    logo: string,
    navigation: {
        items: [
            {
                title: string,
                value: string,
                submenu?: [
                   {
                       title: string,
                       value: string
                   }
                ]
            }
        ]
    },
    breadcrumbs: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ],
    info: {
        header: string,
        description: string[],
        list: {
            title: string,
            items: string[]
        }
    },
    events: {
        items: [
            {
                image: string,
                headerHref: string,
                header: string,
                subheader: string,
                description: string,
                buttonHref: string,
                buttonTitle: string
            }
        ]
    },
    review: {
        header: string,
        description: {
            image: string,
            fullname: string,
            city: string,
            date: string,
            description: string
        }
    },
    footer: {
        description: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string,
        copirated: string
    }
}

const ScrollerDynamic = dynamic(() => import('../../components/scroller'), {
    ssr: false
})

const Events: FC<IEventsProps> = ({
    header,
    logo,
    navigation,
    resolvedUrl,
    breadcrumbs,
    headerImage,
    info,
    events,
    review,
    footer
}) => (
    <>
        {navigation && (
            <Navigation
                navigation={navigation}
                logo={logo}
                resolvedUrl={resolvedUrl}
            />
        )}
        {breadcrumbs && (
            <Breadcrumbs
                breadcrumbs={breadcrumbs}
            />
        )}
        {header && (
            <HeaderPage
                header={header}
                headerImage={headerImage}
            />
        )}
        {info && (
            <Info
                info={info}
            />
        )}
        {events && (
            <AllEvents events={events}
            />
        )}
        {review && (
            <Review
                review={review}
            />
        )}
        {footer && (
            <Footer
                footer={footer}
                logo={logo}
                navigation={navigation}
            />
        )}
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
            page: await db.collection('pages').findOne({ pageId: 'events' }),
            logo: await db.collection('components').findOne({ componentId: 'logo' }),
            navigation: await db.collection('components').findOne({ componentId: 'navigation' }),
            contacts: await db.collection('components').findOne({ componentId: 'contacts' }),
            footer: await db.collection('components').findOne({ componentId: 'footer' }),
            review: await db.collection('reviews').findOne({ best: true, show: true })
        }
    } catch (error) {
        throw new Error('Неудалось получить данные!')
    }

    data = {
        page: JSON.parse(JSON.stringify(data.page)),
        logo: JSON.parse(JSON.stringify(data.logo)),
        navigation: JSON.parse(JSON.stringify(data.navigation)),
        contacts: JSON.parse(JSON.stringify(data.contacts)),
        footer: JSON.parse(JSON.stringify(data.footer)),
        review: JSON.parse(JSON.stringify(data.review))
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
            navigation: data.navigation,
            info: data.page.info,
            events: data.page.events,
            review: { description: data.review, header: data.page.review.header },
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

export default Events