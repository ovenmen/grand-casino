import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'

const EventDescription = ({ eventDescription }) => (
    <section className="event-description">
        <div className="grid-x">
            <div className="cell">
                {map(eventDescription, (item, index) => (
                    <p key={uniqueId(index)} className="h5 margin-bottom-2">{item}</p>
                ))}
            </div>
        </div>

        <style jsx>{`
            .event-description {
                padding: 5vw;
            }
        `}</style>
    </section>
)

EventDescription.propTypes = {
    eventDescription: array
}

export default EventDescription
