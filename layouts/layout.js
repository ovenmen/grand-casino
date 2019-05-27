import React from 'react'
import { object } from 'prop-types'
import dynamic from 'next/dynamic'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

const Layout = ({ children }) => {
    const { navigation, brand, footer } = children.props.data

    return (
        <article>
            <header className="shadow">
                {navigation && <Navigation navigation={navigation} brand={brand} />}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {footer && <Footer footer={footer} brand={brand} navigation={navigation} />}
                <ScrollerDynamic />
            </footer>
        </article>
    )
}

Layout.propTypes = {
    children: object
}

export default Layout
