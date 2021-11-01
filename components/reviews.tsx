import React, { FC } from 'react'
import Image from 'next/image'

import { ReviewsProps } from '../types/reviews'

const Reviews: FC<ReviewsProps> = ({
    reviews
}) => (
    <section className="reviews">
        {reviews?.header && (
            <div className="grid-x grid-padding-x">
                <div className="cell small-12">
                    <h2 className="text-center text-uppercase color-white margin-bottom-3">{reviews.header}</h2>
                </div>
            </div>
        )}
        {reviews?.items && (
            <div className="grid-x">
                {reviews.items.map(item => (
                    <div className="cell small-12 medium-6 large-6 review-border" key={item.image + Math.random()}>
                        <div className="review text-center">
                            <figure className="reviews-avatar margin-bottom-1">
                                <Image
                                    src={`/images/${item.image}`}
                                    alt={item.image}
                                    width="150"
                                    height="150"
                                    loading="lazy"
                                    objectFit="cover"
                                    layout="intrinsic"
                                />
                                <figcaption>
                                    <p className="h5 color-white font-bold">{item.fullname}</p>
                                    <p className="h5 color-white font-bold">{item.city}</p>
                                    <p className="h6 color-white font-bold">{item.date}</p>
                                </figcaption>
                                <p className="color-white margin-top-2">{item.description}</p>
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        )}

        <style jsx>{`
            .reviews {
                background: url('/images/bg-reviews.jpg') center center;
                background-size: cover;
                padding: 5vw;
            }
            .reviews-avatar {
                border-radius: 50%;
            }
            .review-border:nth-child(odd) .review {
                border-right: 1px solid #e3eff3;
            }
            .review {
                padding: 0 5vw;
            }
            @media screen and (max-width: 39.9375em) {
                .review-border:nth-child(odd) .review {
                    border-right: none;
                }
                .review {
                    padding: 0;
                    margin-bottom: 3rem;
                }
            }
        `}</style>
    </section>
)

export default Reviews