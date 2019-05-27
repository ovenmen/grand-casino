import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import GlobalStyle from '../components/global-style'
import Loader from '../components/loader'

const LayoutDynamic = dynamic(() => import('../layouts/main'), {
    // eslint-disable-next-line react/display-name
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
                    {/* <base href={} /> */}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content={description} />
                    <meta name="keywords" content={keywords} />
                    <link rel="stylesheet" href="/static/css/foundation.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&amp;subset=cyrillic" rel="stylesheet" />
                    <link rel="icon" type="image/ico" sizes="16x16" href="/static/images/favicon.ico" />
                </Head>
                <LayoutDynamic>
                    <Component {...pageProps} />
                </LayoutDynamic>
                <GlobalStyle />
            </Container>
        )
    }
}
