import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'

import Layout from '../layouts/layout' 
import GlobalStyle from '../components/global-style'

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
                    <link rel="stylesheet" href="/static/css/foundation.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&amp;subset=cyrillic" rel="stylesheet" />
                    <link rel="icon" type="image/ico" sizes="16x16" href="/static/images/favicon.ico" />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <GlobalStyle />
            </Container>
        )
    }
}
