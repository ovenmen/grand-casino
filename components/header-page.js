import React from 'react'
import { string } from 'prop-types'

import { STATIC_IMAGES_URL } from '../config'

const HeaderPage = ({ header, image }) => (
    <div className="header-page">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <img className="header-page-image" src={`${STATIC_IMAGES_URL}/${image}`} />
                <h1 className="text-center color-white font-bold">{header}</h1>
            </div>
        </div>

        <style jsx>{`
            .header-page {
                position: relative;
                padding: 2.5vw;
            }
            .header-page-image {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: -1;
                object-fit: cover;
            }
        `}</style>
    </div>
)

HeaderPage.propTypes = {
    header: string,
    image: string
}

export default HeaderPage
