import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'

interface IEventDescriptionProps {
    event: {
        header: string,
        image?: string,
        list: {
            title: string,
            items: string[]
        },
        description: string[],
        marker: string,
        linkPriceHref: string,
        linkPriceTitle: string
    }
}

const EventDescription: FC<IEventDescriptionProps> = ({
    event
}) => (
    <section>
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-6">
                <div className="info">
                    <h2 className="margin-bottom-2 text-center subheader">{event.header}</h2>
                    {event.description.map((item, index) => (
                        <p key={index} className="h5 margin-bottom-2">{item}</p>
                    ))}
                    <p className="h5 margin-bottom-2">{event.list.title}</p>
                    <ul className="margin-left-3">
                        {event.list.items.map((item, index) => (
                            <li key={index} className="h5 margin-bottom-1">{item}</li>
                        ))}
                    </ul>
                    <p className="h5 font-italic margin-top-3 marker">{event.marker}</p>
                    <p className="margin-top-3">
                        <Link href={event.linkPriceHref}>
                            <a className="link color-purple text-uppercase font-bold" aria-label={event.linkPriceTitle}>{event.linkPriceTitle}
                                <span className="icon margin-left-1"><FontAwesomeIcon fixedWidth icon={faFileInvoiceDollar} height="1em" /></span>
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="cell small-12 medium-12 large-6">
                <Image
                    src={`/images/${event.image}`}
                    className="image"
                    alt={event.image}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                />
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

export default EventDescription