import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

interface IAllEventsProps {
    events: {
        items: [
            {
                image: string,
                headerHref: string,
                header: string,
                subheader: string,
                description: string,
                buttonHref: string,
                buttonTitle: string
            }
        ]
    }
}

const AllEvents: FC<IAllEventsProps> = ({
    events
}) => (
    <section>
        <div className="grid-x">
            {events.items.map((event, index) => (
                <Fragment key={index}>
                    <div className="cell small-12 medium-6 large-3">
                        <img src={`/images/${event.image}`} className="event-image" alt={event.image} />
                    </div>
                    <div className="cell small-12 medium-6 large-3">
                        <div className="event-description">
                            <h4 className="text-uppercase font-bold">
                                <Link href={event.headerHref}>
                                    <a className="link color-grey">{event.header}</a>
                                </Link>
                            </h4>
                            <h4 className="subheader">{event.subheader}</h4>
                            <p>{event.description}</p>
                            <p className="gallary-button">
                                <Link href={event.buttonHref}>
                                    <a className="link color-purple text-uppercase font-bold" aria-label={event.buttonTitle}>
                                        <span>{event.buttonTitle}</span><span className="icon margin-left-1">
                                            <FontAwesomeIcon fixedWidth icon={faImages} height="1em" />
                                        </span>
                                    </a>
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
                border-top: 1px solid #d3d3d3;
            }
            .icon {
                display: inline-block;
                vertical-align: middle;
            }
        `}</style>
    </section>
)

export default AllEvents