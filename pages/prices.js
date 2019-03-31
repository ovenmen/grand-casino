import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'

const PricesPage = ({ data }) => {
    const {
        header,
        headerImage
    } = data

    return (
        <section>
            <HeaderPage header={header} image={headerImage} />
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('prices')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
