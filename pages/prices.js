import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs' 

const PricesPage = ({ data }) => {
    const {
        header,
        headerImage,
        breadcrumbs
    } = data

    return (
        <section>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <HeaderPage header={header} image={headerImage} />
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('prices')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
