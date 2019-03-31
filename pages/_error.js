import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'

const Error = ({ data }) => {
    const { header, description } = data.content.error

    return (
        <section>
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <h1 className="text-center font-bold">{header}</h1>
                    <h2 className="text-center">{description}</h2>
                </div>
            </div>
            <style jsx>{`
                section {
                    padding: 10vw 5vw;
                }
                h1 {
                    color: #372964;
                    font-size: 5rem;
                }
                @media screen and (max-width: 39.9375em) {
                    h1 {
                        font-size: 3.5rem;
                    }
                }
            `}</style>
        </section>
    )
}

Error.getInitialProps = fetchDataPage('error')

Error.propTypes = {
    data: object
}

export default Error
