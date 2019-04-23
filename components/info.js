import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'

const Info = ({ header, description, list }) => (
    <section className="info">
        <div className="grid-x">
            <div className="cell">
                <h2 className="margin-bottom-2 text-center subheader">{header}</h2>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                {map(description, (item, index) => (
                    <p key={uniqueId(index)} className="h5 margin-bottom-2">{item}</p>
                ))}
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <p className="h5 margin-bottom-2">{list.title}</p>
                <ul className="margin-left-3">
                    {map(list.items, (item, index) => (
                        <li key={uniqueId(index)} className="h5 margin-bottom-1">{item}</li>
                    ))}
                </ul>
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
