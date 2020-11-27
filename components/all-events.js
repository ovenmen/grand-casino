import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const AllEvents = ({
    events: {
        items = []
    }
}) => (
    <section>
        <div className="grid-x">
            {items.map(item => (
                <Fragment key={item.header}>
                    <div className="cell small-12 medium-6 large-3">
                        <img src={`${STATIC_IMAGES_URL}/${item.image}`} className="event-image" alt={item.image} loading="lazy" />
                    </div>
                    <div className="cell small-12 medium-6 large-3">
                        <div className="event-description">
                            <h4 className="text-uppercase font-bold">
                                <Link href={item.headerHref}>
                                    <a className="link color-grey">{item.header}</a>
                                </Link>
                            </h4>
                            <h4 className="subheader">{item.subheader}</h4>
                            <p>{item.description}</p>
                            <p className="gallary-button">
                                <Link href={item.buttonHref}>
                                    <a className="link color-purple text-uppercase font-bold" aria-label={item.buttonTitle}>
                                        <span>{item.buttonTitle}</span><span className="icon margin-left-1">
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
