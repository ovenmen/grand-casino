import React from 'react'
import { string } from 'prop-types'

import { STATIC_IMAGES_URL } from '../config'
import './header-page.css'

const HeaderPage = ({ header, image }) => (
    <div className="header-page">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <img className="header-page-image" src={`${STATIC_IMAGES_URL}/${image}`} />
                <h1 className="text-center color-white font-bold">{header}</h1>
            </div>
        </div>
    </div>
)

HeaderPage.propTypes = {
    header: string,
    image: string
}

export default HeaderPage
