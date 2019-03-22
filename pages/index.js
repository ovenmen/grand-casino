import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'

const IndexPage = ({ data }) => (
    <section>
        <HeaderPage header={data.header} />
    </section>
)

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
