import React from 'react'

const GlobalStyle = () => (
    <style global jsx>{`
        body {
            font-family: 'PT Serif', serif;
        }
        a {
            color: #fff;
            transition: all 0.3s ease-in-out;
        }
        a:hover {
            color: #a48eec !important;
        }
        .color-white {
            color: #ffffff;
        }
        .row-wrap {
            flex-wrap: wrap;
        }
    `}</style>
)

export default GlobalStyle
