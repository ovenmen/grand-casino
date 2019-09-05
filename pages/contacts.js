import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Ymap from '../components/ymap'
import ContactForm from '../components/contact-form'
import ContactInformation from '../components/contact-information'

const PricesPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <div className="grid-x">
            <div className="cell small-12 medium-6 large-6">
                <ContactForm {...props} />
            </div>
            <div className="cell small-12 medium-6 large-6">
                <ContactInformation {...props} />
            </div>
        </div>
        <Ymap {...props} />
    </section>
)

PricesPage.getInitialProps = fetchDataPage('contacts')

export default PricesPage
