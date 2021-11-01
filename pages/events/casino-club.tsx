import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import clientPromise from '../../lib/mongodb'
import Breadcrumbs from '../../components/breadcrumbs'
import EventDescription from '../../components/event-description'
import Action from '../../components/action'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import HeaderPage from '../../components/header-page'
import { CasinoClubProps } from '../../types/pages/casino-club'
import ScrollerDynamic from '../../dynamic-components/scroller-dynamic'
import PhotosDynamic from '../../dynamic-components/photos-dynamic'

const CasinoClub: FC<CasinoClubProps> = ({
    resolvedUrl,
    logo,
    navigation,
    breadcrumbs,
    header,
    headerImage,
    event,
    photos,
    action,
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
        {event && (
            <EventDescription
                event={event}
            />)}
        {photos && (
            <PhotosDynamic
                photos={photos}
            />
        )}
        {action && (
            <Action action={action}
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
            event: data.page.event,
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