import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'

const IndexPage = ({ data }) => {
    const { promo } = data.content

    return (
        <section>
            <Promo {...promo} />
        </section>
    )
}

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
