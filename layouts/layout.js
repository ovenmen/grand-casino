import React from 'react'
import { object } from 'prop-types'
import Head from 'next/head'

import { BASE_URL } from '../config'

const Layout = ({ children }) => {
    const { title, description, keywords } = children.props.data.head
    
    return (
        <main>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <base href={BASE_URL} />
                <link rel="stylesheet" href="/static/css/normalize.css" />
            </Head>
            <article>
                {children}
            </article>
        </main>
    )
}

Layout.propTypes = {
    children: object
}

export default Layout
