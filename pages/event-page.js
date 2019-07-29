import React from 'react'
import { object } from 'prop-types'
import dynamic from 'next/dynamic'

import getDataQueryPage from '../utils/fetch-data-query-page'
import Breadcrumbs from '../components/breadcrumbs'
import HeaderPage from '../components/header-page'
import EventDescription from '../components/event-description'
import Action from '../components/action'

const PhotosDynamic = dynamic(() => import('../components/photos'), {
    ssr: false
})

const EventPage = ({
    data
}) => {
    const { header, headerImage, breadcrumbs } = data
    const { eventDescription, photos, action } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            {eventDescription && <EventDescription {...eventDescription} />}
            {photos && <PhotosDynamic {...photos} />}
            {action && <Action {...action} />}
        </section>
    )
}

EventPage.getInitialProps = getDataQueryPage

EventPage.propTypes = {
    data: object
}

export default EventPage
