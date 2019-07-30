import React from 'react'

const GlobalStyle = () => (
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
)

export default GlobalStyle
