import React from 'react'
import dynamic from 'next/dynamic'

import fetchDataPage from '../../utils/fetch-data-page'
import Breadcrumbs from '../../components/breadcrumbs'
import HeaderPage from '../../components/header-page'
import EventDescription from '../../components/event-description'
import Action from '../../components/action'

const PhotosDynamic = dynamic(() => import('../../components/photos'), {
    ssr: false
})

const GoldCasino = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <EventDescription {...props} />
        <PhotosDynamic {...props} />
        <Action {...props} />
    </section>
)

GoldCasino.getInitialProps = fetchDataPage('gold-casino')

export default GoldCasino