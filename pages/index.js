import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'
import Reviews from '../components/reviews'

const IndexPage = (props) => (
    <section>
        <Promo {...props} />
        <Action {...props} />
        <Activity {...props} />
        <Reviews {...props} />
    </section>
)

IndexPage.getInitialProps = fetchDataPage('index')

export default IndexPage
