/* eslint-disable react/display-name */
import React from 'react'
import dynamic from 'next/dynamic'

import fetchDataPage from '../../utils/fetch-data-page'
import Breadcrumbs from '../../components/breadcrumbs'
import HeaderPage from '../../components/header-page'
import EventDescription from '../../components/event-description'
import Action from '../../components/action'
import Loader from '../../components/loader'

const PhotosDynamic = dynamic(() => import('../../components/photo-carousel'), {
    loading: () => <Loader />,
    ssr: true
})

const CasinoClub = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <EventDescription {...props} />
        <PhotosDynamic {...props} />
        <Action {...props} />
    </section>
)

CasinoClub.getInitialProps = fetchDataPage('casino-club')

export default CasinoClub
