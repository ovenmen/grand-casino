import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import TablePrices from '../components/table-prices'
import Action from '../components/action'

const PricesPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <TablePrices {...props} />
        <Action {...props} />
    </section>
)

PricesPage.getInitialProps = fetchDataPage('prices')

export default PricesPage
