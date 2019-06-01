import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import FranchiseInfo from '../components/franchise-info'
import Ymap from '../components/ymap'
import Action from '../components/action'

const PricesPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { franchise, action, map } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {franchise && <FranchiseInfo {...franchise} />}
            {map && <Ymap {...map} />}
            {action && <Action {...action} />}
        </section>
    )
}

PricesPage.getInitialProps = fetchDataPage('franchise')

PricesPage.propTypes = {
    data: object
}

export default PricesPage
