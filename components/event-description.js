import React from 'react'
import { string, array, object } from 'prop-types'
import { map, uniqueId } from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const EventDescription = ({ header, description, list, linkPriceTitle, linkPriceHref, image, marker }) => (
    <section>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-6">
                <div className="info">
                    <h2 className="margin-bottom-2 text-center subheader">{header}</h2>
                    {map(description, (item, index) => (
                        <p key={uniqueId(index)} className="h5 margin-bottom-2">{item}</p>
                    ))}
                    <p className="h5 margin-bottom-2">{list.title}</p>
                    <ul className="margin-left-3">
                        {map(list.items, (item, index) => (
                            <li key={uniqueId(index)} className="h5 margin-bottom-1">{item}</li>
                        ))}
                    </ul>
                    <p className="h5 font-italic margin-top-3 marker">{marker}</p>
                    <p className="margin-top-3">
                        <Link href={linkPriceHref}>
                            <a className="link color-purple text-uppercase font-bold">{linkPriceTitle}
                                <span className="icon margin-left-1"><FontAwesomeIcon icon={faFileInvoiceDollar} /></span>
                            </a></Link>
                    </p>
                </div>
            </div>
            <div className="cell small-12 medium-12 large-6">
                <img src={`${STATIC_IMAGES_URL}/${image}`} className="image" />
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
            }
            .link:hover .icon {
                visibility: visible;
                opacity: 1;
            }
        `}</style>
    </section>
)

EventDescription.propTypes = {
    header: string,
    description: array,
    list: object,
    linkPriceTitle: string,
    linkPriceHref: string,
    image: string,
    marker: string
}

export default EventDescription
