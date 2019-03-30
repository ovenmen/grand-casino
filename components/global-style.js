import React from 'react'

const GlobalStyle = () => (
    <style global jsx>{`
        * {
            font-family: 'PT Serif', serif;
        }
        html,
        body {
            scroll-behavior: smooth;
        }
        .link,
        .link-not-hover,
        .link-not-hover:focus,
        .link:focus {
            color: #ffffff;
            transition: all 0.3s ease-in-out;
        }
        .link:hover {
            color: #a48eec !important;
        }
        .link-not-hover:hover {
            color: #ffffff;
        }
        .color-white {
            color: #ffffff;
        }
    `}</style>
)

export default GlobalStyle
