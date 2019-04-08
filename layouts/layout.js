import React from 'react'
import { object } from 'prop-types'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Scroller from '../components/scroller'

const Layout = ({ children }) => {
    const { navigation, brand, footer } = children.props.data

    return (
        <article>
            <header className="shadow">
                <Navigation navigation={navigation} brand={brand} />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer footer={footer} brand={brand} navigation={navigation} />
                <Scroller />
            </footer>
        </article>
    )
}

Layout.propTypes = {
    children: object
}

export default Layout
