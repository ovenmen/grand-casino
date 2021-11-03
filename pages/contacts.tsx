import React, { FC } from 'react'
import { GetServerSideProps } from 'next'

import clientPromise from '../lib/mongodb'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import HeaderPage from '../components/header-page'
import YMap from '../components/ymaps'
import ContactInformation from '../components/contact-information'
import ContactForm from '../components/contact-form'
import { ContactsProps } from '../types/pages/contacts'
import ScrollerDynamic from '../dynamic-components/scroller-dynamic'

const Contacts: FC<ContactsProps> = ({
    resolvedUrl,
    header,
    headerImage,
    logo,
    navigation,
    footer,
    breadcrumbs,
    map,
    contacts,
    contactsForm
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
        <div className="grid-x">
            <div className="cell small-12 medium-6 large-6">
                {contactsForm && (
                    <ContactForm
                        contactsForm={contactsForm}
                    />
                )}
            </div>
            <div className="cell small-12 medium-6 large-6">
                {contacts && (
                    <ContactInformation
                        contacts={contacts}
                    />
                )}
            </div>
        </div>
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
    const db = client.db()

    let data

    try {
        data = {
            page: await db.collection('pages').findOne({ pageId: 'contacts' }),
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
            navigation: data.navigation,
            contacts: { ...data.contacts, header: data.page.contacts.header },
            contactsForm: data.page.contactsForm,
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

export default Contacts