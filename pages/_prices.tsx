import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import clientPromise from '../lib/mongodb'
import Action from '../components/action'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import TablePrices from '../components/table-prices'
import HeaderPage from '../components/header-page'
import { PricesProps } from '../types/pages/prices'
import ScrollerDynamic from '../dynamic-components/scroller-dynamic'

const Prices: FC<PricesProps> = ({
    resolvedUrl,
    header,
    headerImage,
    logo,
    navigation,
    action,
    footer,
    breadcrumbs,
    prices
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
        {prices && (
            <TablePrices
                prices={prices}
            />
        )}
        {action && (
            <Action
                action={action}
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
            page: await db.collection('pages').findOne({ pageId: 'prices' }),
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
            prices: data.page.prices,
            footer: {
                description: data.footer.description,
                copirated: data.footer.copirated,
                address: data.contacts.address,
                operationMode: data.contacts.operationMode,
                email: data.contacts.email,
                phone: data.contacts.phone,
                navigation: data.navigation
            }
        }
    }
}

export default Prices