import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const AllEvents = ({
    events
}) => (
    <section>
        <div className="grid-x">
            {_.map(events.items, (event, index) => (
                <Fragment key={index}>
                    <div className="cell small-12 medium-6 large-3">
                        <img src={`${STATIC_IMAGES_URL}/${event.image}`} className="event-image" alt={event.image} />
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

AllEvents.propTypes = {
    events: PropTypes.object
}

export default AllEvents
