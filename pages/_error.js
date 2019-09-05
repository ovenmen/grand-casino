import React from 'react'
import PropTypes from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'

const Error = ({ statusCode, errorMessage }) => (
    <section className="error">
        <div className="grid-x grid-padding-x">
            <div className="cell small-12 medium-12 large-12">
                <h1 className="text-center font-bold error-header">{statusCode}</h1>
                <h2 className="text-center">{errorMessage}</h2>
            </div>
        </div>

        <style jsx>{`
            .error {
                padding: 5rem;
            }
        `}</style>
    </section>
)

Error.getInitialProps = fetchDataPage('error')

Error.propTypes = {
    errorMessage: PropTypes.string,
    statusCode: PropTypes.number
}

export default Error
