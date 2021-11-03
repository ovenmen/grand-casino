import React, { FC } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faFrown } from '@fortawesome/free-solid-svg-icons'

import { AllReviewsProps } from '../types/all-reviews'

const AllReviews: FC<AllReviewsProps> = ({
    reviews
}) => (
    <section className="all-reviews">
        <div className="grid-x">
            <div className="cell">
                <h3 className="text-center font-bold margin-bottom-1 color-white">{reviews.header}</h3>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <div className="reviews-container">
                    {reviews.items.map((item, index) => item ? (
                        <div key={index} className="review margin-bottom-1 bordered round radius">
                            <div className="flex-container align-left">
                                <div className="margin-left-2 margin-right-2 width-30">
                                    <Image
                                        src={`/images/${item.image}`}
                                        className="float-left"
                                        alt={item.image}
                                        width="130"
                                        height="120"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="align-self-middle">
                                    <h4>{item.fullname}</h4>
                                    <h5 className="color-purple">{item.city}</h5>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <hr />
                            <span className="quote-left"><FontAwesomeIcon icon={faQuoteLeft} height="1em" /></span>
                            <p className="margin-top-2 margin-bottom-2 description">{item.description}</p>
                            <span className="quote-right"><FontAwesomeIcon icon={faQuoteRight} height="1em" /></span>
                        </div>
                    ) : (
                        <div className="grid-x grid-padding-x margin-top-3">
                            <div className="cell small-12">
                                <span className="frown color-white text-center"><FontAwesomeIcon fixedWidth icon={faFrown} height="5em" /></span>
                                <p className="text-center color-white h5">{reviews.emptyReviewsMessage}</p>
                                <p className="text-center color-white h5">{reviews.actionReviewsMessage}</p>
                            </div>
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
            .frown {
                display: block;
                margin: 0 auto;
                display: block;
                vertical-align: middle;
            }
            .review {
                background: #ffffff;
                padding: 1rem 1.5rem;
                position: relative;
            }
            .review img {
                width: 15vh;
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

export default AllReviews