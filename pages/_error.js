import React from 'react'
import PropTypes from 'prop-types'

import {
    protocol,
    siteName,
    port
} from '../utils/fetch-data-page'

const Error = ({
    statusCode,
    errorMessage
}) => (
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

Error.getInitialProps = async ({ res, error }) => {
    try {
        const statusCode = res ? res.statusCode : error ? error.statusCode : 404
        const url = `${protocol}://${siteName}:${port}/api/error`
        const params = {
            method: 'POST',
            timeout: 5000,
            compress: true
        } 
        const response = await fetch(url, params)
        const data = await response.json()
        let errorMessage = ''

        if (statusCode === 404) {
            errorMessage = 'Страница не найдена'
        }

        if (statusCode === 500) {
            errorMessage = 'Что-то пошло не так :('
        }

        return {
            ...data,
            statusCode,
            errorMessage
        }
    } catch (error) {
        throw new Error(error)
    }
}

Error.propTypes = {
    errorMessage: PropTypes.string,
    statusCode: PropTypes.number
}

export default Error
