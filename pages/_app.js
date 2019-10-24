/* eslint-disable react/display-name */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

export default class extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <article>
                <Head>
                    <title>{pageProps.title || ''}</title>
                    <meta name="theme-color" content="#330b6b" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content={pageProps.description || ''} />
                    <meta name="keywords" content={pageProps.keywords || ''} />
                    <link href="https://fonts.googleapis.com/css?family=Pattaya&display=swap" rel="stylesheet"></link>
                    <link rel="icon" type="image/ico" sizes="16x16" href="/images/favicon.ico" />
                    <link rel="apple-touch-icon" type="image/ico" href="/images/favicon.ico"></link>
                    <link rel="stylesheet" href="/css/foundation.min.css" />
                </Head>
                <Navigation {...pageProps} />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer {...pageProps} />
                <ScrollerDynamic />


                <style global jsx>{`
                    :root {
                        --color-black: #000000;
                        --color-white: #ffffff;
                        --color-purple: #372964;
                        --color-grey: #424242;
                        --color-link-hover: #a48eec;
                    }
                    html {
                        scroll-behavior: smooth;
                        position: relative;
                    }
                    html, body {
                        font-family: 'Pattaya', sans-serif;
                    }
                    h1, h2, h3, h4, h5, h6,
                    .h1, .h2, .h3, .h4, .h5, .h6 {
                        font-family: 'Pattaya', sans-serif;
                    }
                    header {
                        position: sticky;
                        top: 0;
                        z-index: 100000;
                    }
                    .link,
                    .link-not-hover,
                    .link-not-hover:focus,
                    .link:focus {
                        color: var(--color-white);
                        transition: all 0.3s ease-in-out;
                    }
                    .link:visited {
                        opacity: 1 !important;
                    }
                    .link:hover {
                        color: var(--color-link-hover) !important;
                    }
                    .link-not-hover:hover {
                        color: var(--color-white);
                    }
                    .color-black {
                        color: var(--color-black);
                    }
                    .color-white {
                        color: var(--color-white);
                    }
                    .color-purple {
                        color: var(--color-purple);
                    }
                    .color-grey {
                        color: var(--color-grey);
                    }
                    .error-header {
                        color: var(--color-purple);
                        font-size: 5rem;
                    }
                    .paging-dot {
                        background-color: var(--color-white) !important;
                        margin: 0 5px;
                    }
                    @media screen and (max-width: 39.9375em) {
                        .error-header {
                            font-size: 3.5rem;
                        }
                    }
                `}</style>
            </article>
        )
    }
}
