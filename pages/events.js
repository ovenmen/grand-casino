import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import AllEvents from '../components/all-events'
import Review from '../components/review'

const EventsPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { events, review } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {events && <AllEvents {...events} />}
            {review && <Review {...review} />}
        </section>
    )
}

EventsPage.getInitialProps = fetchDataPage('events')

EventsPage.propTypes = {
    data: object
}

export default EventsPage
