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
    static async getInitialProps(appContext) {
        // calls page's `getInitialProps` and fills `appProps.pageProps`
        const appProps = await App.getInitialProps(appContext)
        const pathname = appContext.ctx.pathname
        return { ...appProps, pathname }
    }

    render () {
        const {
            Component, pageProps, pathname
        } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>{pageProps.title || ''}</title>
                    <meta name="theme-color" content="#330b6b" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content={pageProps.description || ''} />
                    <meta name="keywords" content={pageProps.keywords || ''} />
                    <link href="https://fonts.googleapis.com/css?family=PT+Serif:400,700&amp;subset=cyrillic" rel="stylesheet" />
                    <link rel="icon" type="image/ico" sizes="16x16" href="/static/images/favicon.ico" />
                    <link rel="stylesheet" href="/static/css/foundation.min.css" />
                </Head>
                <article>
                    <Navigation {...pageProps} pathname={pathname} />
                    <Component {...pageProps} />
                    <Footer {...pageProps} />
                    <ScrollerDynamic />
                </article>

                <style global jsx>{`
                    :root {
                        --color-black: #000000;
                        --color-white: #ffffff;
                        --color-purple: #372964;
                        --color-grey: #424242;
                        --color-link-hover: #a48eec;
                    }
                    body {
                        font-family: 'PT Serif', Roboto, serif;
                    }
                    html {
                        scroll-behavior: smooth;
                        position: relative;
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
                    @media screen and (max-width: 39.9375em) {
                        .error-header {
                            font-size: 3.5rem;
                        }
                    }
                `}</style>
            </React.Fragment>
        )
    }
}
