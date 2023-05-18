import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import { AllEventsProps } from '../types/all-events'

const AllEvents: FC<AllEventsProps> = ({
    events
}) => (
    <section>
        <div className="grid-x">
            {events.items.map((event, index) => (
                <Fragment key={index}>
                    <div className="cell small-12 medium-6 large-3">
                        <Image
                            src={`/images/${event.image}`}
                            className="event-image"
                            alt={event.image}
                            width={100}
                            height={100}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                    <div className="cell small-12 medium-6 large-3">
                        <div className="event-description">
                            <h4 className="text-uppercase font-bold">
                                <Link href={event.headerHref} className="link color-grey">
                                    {event.header}
                                </Link>
                            </h4>
                            <h4 className="subheader">{event.subheader}</h4>
                            <p>{event.description}</p>
                            <p className="gallary-button">
                                <Link href={event.buttonHref} className="link color-purple text-uppercase font-bold" aria-label={event.buttonTitle}>
                                    <span>{event.buttonTitle}</span><span className="icon margin-left-1">
                                        <FontAwesomeIcon fixedWidth icon={faImages} height="1em" />
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>

        <style jsx>{`
            .event-image {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
            .event-description {
                padding: 2rem;
                border: 1px solid #d3d3d3;
                border-bottom: 0;
            }
            .icon {
                display: inline-block;
                vertical-align: middle;
            }
        `}</style>
    </section>
)

export default AllEvents