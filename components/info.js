import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Info = ({
    info: {
        header,
        description,
        list
    }
}) => (
    <section className="info">
        <div className="grid-x">
            <div className="cell">
                <h2 className="margin-bottom-2 subheader">{header}</h2>
                {description.map((item, index) => (
                    <p key={index} className="h5 margin-bottom-2">{item}</p>
                ))}
                {list &&
                    <Fragment>
                        <p className="h5 margin-bottom-2">{list.title}</p>
                        <ul className="margin-left-3">
                            {list?.description?.map((item, index) => (
                                <li key={index} className="h5 margin-bottom-1">{item}</li>
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
    info: PropTypes.object
}

export default Info
