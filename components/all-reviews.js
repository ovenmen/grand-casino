import React from 'react'
import { string, array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const AllReviews = ({ header, items }) => (
    <section className="all-reviews">
        <div className="grid-x">
            <div className="cell">
                <h3 className="text-center font-bold margin-bottom-1 color-white">{header}</h3>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <div className="reviews-container">
                    {map(items, (item, index) => (
                        <div key={uniqueId(index)} className="review margin-bottom-1 bordered round radius">
                            <div className="flex-container align-center">
                                <div className="margin-left-2 margin-right-2 width-30">
                                    <img src={`${STATIC_IMAGES_URL}/${item.image}`} className="float-left" />
                                </div>
                                <div className="align-self-middle">
                                    <h4>{item.fullname}</h4>
                                    <h5 className="color-purple">{item.city}</h5>
                                </div>
                            </div>
                            <hr />
                            <span className="quote-left"><FontAwesomeIcon icon={faQuoteLeft} /></span>
                            <p className="margin-top-2 margin-bottom-2 description">{item.description}</p>
                            <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight} /></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <style jsx>{`
            .all-reviews {
                background: #272439;
                padding: 5vw;
                height: 100%;
            }
            .reviews-container {
                min-height: 25rem;
                max-height: 35rem;
                overflow: auto;
            }
            .review {
                background: #ffffff;
                padding: 1rem 1.5rem;
                position: relative;
            }
            .review img {
                width: 15vh;
                height: 15vh;
                border-radius: 50%;
            }
            .quote-left,
            .quote-right {
                color: #797979;
                position: absolute;
            }
            .quote-left {
                left: 1rem;
            }
            .quote-right {
                right: 1rem;
                bottom: 1rem;
            }
            .description {
                margin: 0 2rem;
            }
        `}</style>
    </section>
)

AllReviews.propTypes  = {
    header: string,
    items: array
}

export default AllReviews