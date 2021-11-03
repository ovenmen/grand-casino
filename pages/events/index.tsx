import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import clientPromise from '../../lib/mongodb'
import Breadcrumbs from '../../components/breadcrumbs'
import HeaderPage from '../../components/header-page'
import Navigation from '../../components/navigation'
import Info from '../../components/info'
import AllEvents from '../../components/all-events'
import Review from '../../components/review'
import Footer from '../../components/footer'
import { EventsProps } from '../../types/pages/events'
import ScrollerDynamic from '../../dynamic-components/scroller-dynamic'

const Events: FC<EventsProps> = ({
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