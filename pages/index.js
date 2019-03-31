import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'
import Reviews from '../components/reviews'

const IndexPage = ({ data }) => {
    const { promo, action, activity, reviews } = data.content

    return (
        <section>
            <Promo {...promo} />
            <Action {...action} />
            <Activity {...activity} />
            <Reviews {...reviews} />
        </section>
    )
}

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
