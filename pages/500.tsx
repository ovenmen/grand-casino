import React, { FC } from 'react'
import { GetStaticProps } from 'next'

import clientPromise from '../lib/mongodb'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Info from '../components/info'
import { Error500Props } from '../types/pages/error500'
import ScrollerDynamic from '../dynamic-components/scroller-dynamic'

const Error500: FC<Error500Props> = ({
    header,
    logo,
    navigation,
    footer
}) => (
    <>
        {navigation && (
            <Navigation
                navigation={navigation}
                logo={logo}
                resolvedUrl={''}
            />
        )}
        {header && (
            <div className="text-center">
                <Info
                    info={{
                        header
                    }}
                />
            </div>
            
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

export const getStaticProps: GetStaticProps = async () => {
    const client = await clientPromise
    const db = client.db()

    let data

    try {
        data = {
            page: await db.collection('pages').findOne({ pageId: 'error404' }),
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
            title: data.page.title,
            description: data.page.description,
            keywords: data.page.keywords,
            logo: data.logo.title,
            navigation: data.navigation,
            header: data.page.header,
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

export default Error500