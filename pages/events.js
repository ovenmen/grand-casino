import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import Info from '../components/info'
import AllEvents from '../components/all-events'
import Review from '../components/review'

const EventsPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <Info {...props} />
        <AllEvents {...props} />
        <Review {...props} />
    </section>
)

export const getStaticProps = fetchDataPage('events')

export default EventsPage
