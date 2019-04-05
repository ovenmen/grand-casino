import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import TablePrices from '../components/table-prices'
import Action from '../components/action'

const PricesPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { action, tablePrices } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {tablePrices && <TablePrices {...tablePrices} />}
            {action && <Action {...action} />}
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('prices')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
