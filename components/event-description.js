import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const EventDescription = ({
    event
}) => (
    <section>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-6">
                <div className="info">
                    <h2 className="margin-bottom-2 text-center subheader">{event.header}</h2>
                    {_.map(event.description, (item, index) => (
                        <p key={index} className="h5 margin-bottom-2">{item}</p>
                    ))}
                    <p className="h5 margin-bottom-2">{event.list.title}</p>
                    <ul className="margin-left-3">
                        {_.map(event.list.items, (item, index) => (
                            <li key={index} className="h5 margin-bottom-1">{item}</li>
                        ))}
                    </ul>
                    <p className="h5 font-italic margin-top-3 marker">{event.marker}</p>
                    <p className="margin-top-3">
                        <Link href={event.linkPriceHref}>
                            <a className="link color-purple text-uppercase font-bold">{event.linkPriceTitle}
                                <span className="icon margin-left-1"><FontAwesomeIcon fixedWidth icon={faFileInvoiceDollar} height="1em" /></span>
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="cell small-12 medium-12 large-6">
                <img src={`${STATIC_IMAGES_URL}/${event.image}`} className="image" />
            </div>
        </div>

        <style jsx>{`
            .info {
                padding: 5vw;
            }
            .image {
                object-fit: cover;
                height: 100%;
                width: 100%
            }
            .marker {
                border-left: 2px solid #372964;
                padding-left: 1rem;
            }
            .icon {
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
                color: #a48eec;
                display: inline-block;
                vertical-align: middle;
            }
            .link:hover .icon {
                visibility: visible;
                opacity: 1;
            }
        `}</style>
    </section>
)

EventDescription.propTypes = {
    event: PropTypes.object
}

export default EventDescription
