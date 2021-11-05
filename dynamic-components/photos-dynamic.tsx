import React from 'react'
import dynamic from 'next/dynamic'

import Loader from '../components/loader'

const PhotosDynamic = dynamic(() => import('../components/photo-carousel'), {
    loading: () => <Loader />,
    ssr: false
})

export default PhotosDynamic