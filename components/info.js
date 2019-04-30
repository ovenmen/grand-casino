import React, { Fragment } from 'react'
import { string, array, object } from 'prop-types'
import { map, uniqueId } from 'lodash'

const Info = ({ header, description, list }) => (
    <section className="info">
        <div className="grid-x">
            <div className="cell">
                <h2 className="margin-bottom-2 text-center subheader">{header}</h2>
                {map(description, (item, index) => (
                    <p key={uniqueId(index)} className="h5 margin-bottom-2 text-center">{item}</p>
                ))}
                {list &&
                    <Fragment>
                        <p className="h5 margin-bottom-2">{list.title}</p>
                        <ul className="margin-left-3">
                            {map(list.items, (item, index) => (
                                <li key={uniqueId(index)} className="h5 margin-bottom-1">{item}</li>
                            ))}
                        </ul>
                    </Fragment>
                }
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
    header: string,
    description: array,
    list: object
}

export default Info