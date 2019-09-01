import React from 'react'
import PropTypes from 'prop-types'

import { STATIC_IMAGES_URL } from '../config'

const Review = ({
    review
}) => (
    <section className="review">
        <div className="grid-x">
            <div className="cell">
                <h2 className="h1 text-center font-bold color-white margin-bottom-3">{review.header}</h2>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell auto" />
            <div className="cell small-12 medium-8 large-6">
                <div className="review-description text-center radius bordered shadow">
                    <figure>
                        <img src={`${STATIC_IMAGES_URL}/${review.description.image}`} />
                        <figcaption className="margin-top-2">
                            <h5 className="color-purple font-bold margin-bottom-1">{review.description.fullname}</h5>
                            <h6 className="lead color-grey margin-bottom-1">{review.description.city}</h6>
                            <p className="lead">{review.description.description}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="cell auto" />
        </div>

        <style jsx>{`
            .review {
                padding: 5vw;
                background: url('/static/images/bg-review.jpg') center center no-repeat;
                background-size: cover;
            }
            .review-description {
                background-color: #ffffff;
                padding: 5rem;
            }
            .review-description img {
                width: 15vh;
                height: 15vh;
                border-radius: 50%;
            }
        `}</style>
    </section>
)

Review.propTypes = {
    review: PropTypes.object
}

export default Review
