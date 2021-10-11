import React, { FC } from 'react'
import Image from 'next/image'

interface ReviewsProps {
    reviews?: {
        header: string,
        items: [
            {
                image: string,
                fullname: string,
                city: string,
                date: string,
                description: string
            }
        ]
    }
}

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
                    <div className="cell small-12 medium-6 large-6 review-border" key={item.image}>
                        <div className="review text-center">
                            <figure>
                                <Image className="reviews-avatar margin-bottom-1" src={`/images/${item.image}`} alt={item.image} width="150" height="150" />
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
                width: 15vh;
                height: 20vw;
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