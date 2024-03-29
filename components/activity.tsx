import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ActivityProps } from '../types/activity'
import Button from './button'

const Activity: FC<ActivityProps> = ({
    activity
}) => (
    <section className="activity">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-6 info">
                <div className="grid-x grid-padding-x flex-dir-column">
                    {activity?.header && (
                        <div className="cell">
                            <h2 className="text-uppercase text-right color-white margin-bottom-3">
                                <strong>{activity.header}</strong>
                            </h2>
                        </div>
                    )}
                    {activity?.description && (
                        <div className="cell">
                            {activity.description.map(item => (
                                <p className="text-right color-white margin-bottom-3" key={item}>{item}</p>
                            ))}
                        </div>
                    )}
                    {activity?.buttonTitle && (
                        <div className="cell">
                            <div className="button-activity text-right margin-bottom-1">
                                <Button title={activity.buttonTitle} href={activity.buttonHref} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {activity?.items && (
                <div className="cell small-12 medium-12 large-6">
                    <div className="grid-x">
                        {activity.items.map((event, index) => (
                            <div className="cell small-12 medium-6 large-6" key={index}>
                                <div className="activity-event">
                                    <Image className="activity-image" src={`/images/${event.image}`} width="480" height="380" alt={event.image} objectFit="cover" />
                                    <Link href={event.buttonHref}>
                                        <p className="color-white h4 font-bold text-uppercase event-header">{event.header}</p>
                                    </Link>
                                    <div className="activity-event-button">
                                        <Button title={event.buttonTitle} href={event.buttonHref} invert />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        <style jsx>{`
            .activity {
                background: #2d224d;
            }
            .info {
                background: url('/images/bg-activity.jpg') center center no-repeat;
                background-size: cover;
                padding: 5vw;
            }
            .activity-event {
                height: 100%;
                position: relative;
                z-index: 1000;
            }
            .activity-event::before {
                position: absolute;
                content: " ";
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: linear-gradient(to bottom, #000000 0%, #000000 10%, transparent 100%);
                opacity: 0.5;
                transition: all 0.3s ease-in-out;
            }
            .activity-event::after {
                position: absolute;
                content: " ";
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                background: linear-gradient(to top, #000000 0%, #000000 10%, transparent 100%);
                opacity: 0;
                transition: all 0.3s ease-in-out;
            }
            .activity-event:hover::before {
                opacity: 0;
            }
            .activity-event:hover::after {
                opacity: 0.5;
            }
            .event-header {
                position: absolute;
                left: 2rem;
                bottom: 2rem;
                transition: all .3s ease-in-out;
                z-index: 1;
                text-shadow: 0px 0px 10px var(--color-black);
            }
            .activity-event:hover .event-header {
                bottom: 5rem;
            }
            .activity-event-button {
                position: absolute;
                opacity: 0;
                left: 2rem;
                bottom: 2rem;
                transition: all .3s ease-in-out;
                transform: scale(0);
                z-index: 1;
            }
            .activity-event:hover .activity-event-button {
                opacity: 1;
                height: auto;
                transform: scale(1);
            }
            .activity-image {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
            @media screen and (max-width: 39.9375em) {
                .activity-event-button {
                    opacity: 1;
                    transform: scale(1);
                }
                .event-header {
                    bottom: 5rem;
                }
            }
        `}</style>
    </section>
)

export default Activity