import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Ymap from '../components/ymap'
import ContactsForm from '../components/contacs-form'
import ContactsInformation from '../components/contacts-information'

const PricesPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { map, contactsForm, contactsInformation } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {map && <Ymap {...map} />}
            <div className="grid-x">
                <div className="cell small-12 medium-6 large-6">
                    {contactsForm && <ContactsForm {...contactsForm} />}
                </div>
                <div className="cell small-12 medium-6 large-6">
                    {contactsInformation && <ContactsInformation {...contactsInformation} />}
                </div>
            </div>
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('contacts')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
