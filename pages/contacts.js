import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Ymap from '../components/ymap'
import ContactForm from '../components/contact-form'
import ContactInformation from '../components/contact-information'

const PricesPage = ({
    data
}) => {
    const { header, headerImage, breadcrumbs } = data
    const { map, contactsForm, contactsInformation } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            <div className="grid-x">
                <div className="cell small-12 medium-6 large-6">
                    {contactsForm && <ContactForm {...contactsForm} />}
                </div>
                <div className="cell small-12 medium-6 large-6">
                    {contactsInformation && <ContactInformation {...contactsInformation} />}
                </div>
            </div>
            {map && <Ymap {...map} />}
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('contacts')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
