import React, { FC } from 'react'
import Image from 'next/image'

interface IReviewProps {
    review: {
        header: string,
        description: {
            image: string,
            fullname: string,
            city: string,
            date: string,
            description: string
        }
    }
}

const Review: FC<IReviewProps> = ({
    review
}) => (
    <section className="review">
        <div className="grid-x">
            <div className="cell">
                <h2 className="h1 text-center font-bold color-white margin-bottom-3">{review.header}</h2>
            </div>
        </div>
        {review.description && (
            <div className="grid-x">
                <div className="cell auto" />
                <div className="cell small-12 medium-8 large-6">
                    <div className="review-description text-center radius bordered shadow">
                        <figure>
                            {/* <img src={`/images/${review.description.image}`} alt={review.description.image} /> */}
                            <Image
                                src={`/images/${review.description.image}`}
                                alt={review.description.image}
                                width="150"
                                height="150"
                            />
                            <figcaption className="margin-top-2">
                                <h5 className="color-purple font-bold margin-bottom-1">{review.description.fullname}</h5>
                                <h6 className="lead color-grey margin-bottom-1">{review.description.city}</h6>
                                <h6 className="color-grey margin-bottom-2">{review.description.date}</h6>
                                <p className="lead">{review.description.description}</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="cell auto" />
            </div>
        )}

        <style jsx>{`
            .review {
                padding: 5vw;
                background: url('/images/bg-review.jpg') center center no-repeat;
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

export default Review