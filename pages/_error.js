import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'

const Error = ({
    data
}) => {
    const { header, description } = data.content.error

    return (
        <section className="error">
            <div className="grid-x grid-padding-x">
                <div className="cell small-12 medium-12 large-12">
                    <h1 className="text-center font-bold error-header">{header}</h1>
                    <h2 className="text-center">{description}</h2>
                </div>
            </div>
        </section>
    )
}

Error.getInitialProps = fetchDataPage('error')

Error.propTypes = {
    data: object
}

export default Error
