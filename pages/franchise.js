import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Ymap from '../components/ymap'
import Action from '../components/action'

const PricesPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { action, map } = data.content

    return (
        <section>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <HeaderPage header={header} image={headerImage} />
            <Ymap {...map} />
            <Action {...action} />
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('franchise')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
