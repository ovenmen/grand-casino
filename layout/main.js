import React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

const Layout = (props) => {
    const { Component } = props

    return (
        <article>
            <Navigation {...props} />
            <Component {...props} />
            <Footer {...props} />
            <ScrollerDynamic />
        </article>
    )
}

Layout.propTypes = {
    Component: PropTypes.func
}

export default Layout
