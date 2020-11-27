/* eslint-disable react/display-name */
import React from 'react'
import dynamic from 'next/dynamic'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Action from '../components/action'
import Loader from '../components/loader'

const TablePricesDynamic = dynamic(() => import('../components/table-prices'), {
    loading: () => <Loader />,
    ssr: true
})

const PricesPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <TablePricesDynamic {...props} />
        <Action {...props} />
    </section>
)

export const getStaticProps = fetchDataPage('prices')

export default PricesPage
