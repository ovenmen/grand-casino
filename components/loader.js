import React from 'react'

import { STATIC_IMAGES_URL } from '../config'

const Loader = () => (
    <div className="loader text-center">
        <img src={`${STATIC_IMAGES_URL}/loader.svg`} />
    </div>
)

export default Loader
