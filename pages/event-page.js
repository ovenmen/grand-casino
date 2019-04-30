import React from 'react'
import { object } from 'prop-types'

import getDataQueryPage from '../utils/fetch-data-query-page'
import Breadcrumbs from '../components/breadcrumbs'
import HeaderPage from '../components/header-page'
import EventDescription from '../components/event-description'
import Photos from '../components/photos'
import Action from '../components/action'

const EventPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { eventDescription, photos, action } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {eventDescription && <EventDescription {...eventDescription} />}
            {photos && <Photos {...photos} />}
            {action && <Action {...action} />}
        </section>
    )
}

EventPage.getInitialProps = getDataQueryPage

EventPage.propTypes = {
    data: object
}

export default EventPage
