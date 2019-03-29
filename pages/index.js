import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import Promo from '../components/promo'
import Action from '../components/action'
import Activity from '../components/activity'

const IndexPage = ({ data }) => {
    const {
        promo,
        action,
        activity
    } = data.content

    return (
        <section>
            <Promo {...promo} />
            <Action {...action} />
            <Activity {...activity} />
        </section>
    )
}

IndexPage.getInitialProps = fetchDataPage('index')

IndexPage.propTypes = {
    data: object
}

export default IndexPage
