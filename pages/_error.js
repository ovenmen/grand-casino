import React from 'react'
import { number, object } from 'prop-types'
import Link from 'next/link'

import fetchDataPage from '../utils/fetch-data-page'

const Error = ({ statusCode, data }) => (
    <section>
        <h1 className="text-center font-bold">{data.header}</h1>
        <h2 className="text-center">
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </h2>
        <h3 className="text-center">
            Вернуться на <Link href="/"><a>главную</a></Link>
        </h3>
    </section>
)

Error.getInitialProps = fetchDataPage('error')

Error.propTypes = {
    statusCode: number,
    data: object
}

export default Error
