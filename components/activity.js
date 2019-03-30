import React from 'react'
import { string, array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import Link from 'next/link'

import Button from './button'
import { STATIC_IMAGES_URL } from '../config'

import './activity.css'

const Activity = ({ header, description, buttonTitle, buttonHref, items }) => (
    <section className="activity">
        <div className="grid-x align-middle">
            <div className="cell small-12 medium-12 large-6">
                <div className="grid-x grid-padding-x flex-dir-column info">
                    <div className="cell small-12">
                        <h2 className="text-uppercase text-right color-white margin-bottom-3">
                            <strong>{header}</strong>
                        </h2>
                    </div>
                    <div className="cell">
                        {map(description, (item, index) => (
                            <p className="text-right color-white margin-bottom-3" key={uniqueId(index)}>{item}</p>
                        ))}
                    </div>
                    <div className="cell">
                        <div className="button-activity text-right margin-bottom-1">
                            <Button title={buttonTitle} href={buttonHref} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cell small-12 medium-12 large-6">
                <div className="grid-x">
                    {map(items, (event, index) => (
                        <div className="cell small-12 medium-6 large-6" key={uniqueId(index)}>
                            <div className="activity-event">
                                <img className="activity-image" src={`${STATIC_IMAGES_URL}/${event.image}`} width="480" height="380" />
                                <Link href={event.buttonHref}>
                                    <a><p className="color-white h4 font-bold text-uppercase event-header">{event.header}</p></a>
                                </Link>
                                <div className="activity-event-button">
                                    <Button title={event.buttonTitle} href={event.buttonHref} invert />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)

Activity.propTypes = {
    header: string,
    description: array,
    buttonTitle: string,
    buttonHref: string,
    items: array
}

export default Activity
