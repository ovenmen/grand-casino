import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import clientPromise from '../lib/mongodb'
import Action from '../components/action'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import FranchiseInfo from '../components/franchise-info'
import HeaderPage from '../components/header-page'
import YMap from '../components/ymaps'

interface IFranchiseProps {
    resolvedUrl: string,
    header: string,
    headerImage: string,
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
    logo: string,
    breadcrumbs: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ],
    franchise: {
        header: string,
        description: string,
        profit: {
            header: string,
            promo: string,
            description: string[]
        },
        advantages: {
            header: string,
            queston: string,
            action: string,
            linkHref: string,
            linkTitle: string,
            answer: string,
            items: [
                {
                    header: string,
                    promo: string
                    description: string[],
                    list: {
                        header: string,
                        description: string[]
                    },
                    note: string
                }
            ],
            
        }
    },
    action: {
        header: string,
        description: string,
        buttonTitle: string
        buttonHref: string
    },
    map: {
        header: string,
        items: [
            {
                long: number,
                lat: number,
                cooperation: string,
                city: string
            }
        ]
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

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

const Franchise: FC<IFranchiseProps> = ({
    resolvedUrl,
    header,
    headerImage,
    logo,
    navigation,
    action,
    footer,
    breadcrumbs,
    franchise,
    map
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
        {franchise && (
            <FranchiseInfo
                franchise={franchise}
            />
        )}
        {action && (
            <Action
                action={action}
            />
        )}
        {map && (
            <YMap
                map={map}
                logo={logo}
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
            page: await db.collection('pages').findOne({ pageId: 'franchise' }),
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
            franchise: data.page.franchise,
            map: data.page.map,
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

export default Franchise