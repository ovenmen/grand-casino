import React from 'react'
import { string, array } from 'prop-types'
import { map, uniqueId } from 'lodash'

import { STATIC_IMAGES_URL } from '../config'

import './reviews.css'

const Reviews = ({ header, items }) => (
    <section className="reviews">
        <div className="grid-x grid-padding-x">
            <div className="cell small-12">
                <h2 className="text-center text-uppercase color-white margin-bottom-3">{header}</h2>
            </div>
        </div>
        <div className="grid-x">
            {map(items, (item, index) => (
                <div className="cell small-12 medium-6 large-6 review-border" key={uniqueId(index)}>
                    <div className="review text-center">
                        <figure>
                            <img className="reviews-avatar margin-bottom-2" src={`${STATIC_IMAGES_URL}/${item.image}`} />
                            <figcaption>
                                <p className="h5 color-white font-bold">{item.fullname}</p>
                                <p className="h5 color-white font-bold">{item.city}</p>
                            </figcaption>
                            <p className="color-white margin-top-2">{item.description}</p>
                        </figure>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

Reviews.propTypes = {
    header: string,
    items: array
}

export default Reviews
