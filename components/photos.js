import React from 'react'
import { string, array } from 'prop-types'

import { STATIC_IMAGES_URL } from '../config'

const Photos = ({ header, items }) => (
    <section className="photos">
        <div className="grid-x">
            <div className="cell">
                <h2 className="h1 text-center font-bold margin-bottom-3">{header}</h2>
            </div>
        </div>

        <style jsx>{`
            .photos {
                padding: 5vw;
            }
        `}</style>
    </section>
)

Photos.propTypes = {
    header: string,
    items: array
}

export default Photos
