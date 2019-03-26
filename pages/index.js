import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'

const IndexPage = ({ data }) => {
    const { promo, action } = data.content

    return (
        <section>
            <Promo {...promo} />
            <Action {...action} />
        </section>
    )
}

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
