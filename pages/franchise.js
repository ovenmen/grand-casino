import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import FranchiseInfo from '../components/franchise-info'
import Ymap from '../components/ymap'
import Action from '../components/action'

const PricesPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <FranchiseInfo {...props} />
        <Ymap {...props} />
        <Action {...props} />
    </section>
)

PricesPage.getInitialProps = fetchDataPage('franchise')

export default PricesPage
