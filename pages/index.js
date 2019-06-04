import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'
import Reviews from '../components/reviews'

const IndexPage = ({ data }) => {
    const { reviews } = data
    const { promo, action, activity, lastReviews } = data.content
    const joinReviews = { ...lastReviews, items: reviews }

    return (
        <section>
            {promo && <Promo {...promo} />}
            {action && <Action {...action} />}
            {activity && <Activity {...activity} />}
            {lastReviews && <Reviews {...joinReviews} />}
        </section>
    )
}

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
