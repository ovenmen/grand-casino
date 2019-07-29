import React from 'react'

import { STATIC_IMAGES_URL } from '../config'

const Loader = () => (
    <div className="loader text-center">
        <img src={`${STATIC_IMAGES_URL}/loader.svg`} />

        <style jsx>{`
            .loader {
                margin-top: 20%;
            }
        `}</style>
    </div>
)

export default Loader