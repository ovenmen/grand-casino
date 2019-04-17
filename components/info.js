import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'

const Info = ({ description }) => (
    <section className="info">
        <div className="grid-x">
            <div className="cell">
                {map(description, (item, index) => (
                    <p key={uniqueId(index)} className="lead">{item}</p>
                ))}
            </div>
        </div>

        <style jsx>{`
            .info {
                padding: 5vw;
            }
        `}</style>
    </section>
)

Info.propTypes = {
    description: array
}

export default Info
