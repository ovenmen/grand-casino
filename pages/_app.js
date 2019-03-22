import React from 'react'
import App, { Container } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { BASE_URL } from '../config'
import Loader from '../components/loader'
import GlobalStyle from '../components/global-style'

const Layout = dynamic(() => import('../layouts/layout'), {
    loading: () => <Loader />,
    ssr: false
})

export default class extends App {
    render () {
        const { Component, pageProps } = this.props
        const { title, description, keywords } = pageProps.data.head

        return (
            <Container>
                <Head>
                    <title>{title}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <base href={BASE_URL} />
                    <link rel="stylesheet" href="/static/css/foundation.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&amp;subset=cyrillic" rel="stylesheet" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <GlobalStyle />
            </Container>
        )
    }
}
