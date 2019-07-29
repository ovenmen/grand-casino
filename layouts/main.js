import React from 'react'
import { object } from 'prop-types'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Scroller from '../components/scroller'

const MainLayout = ({
    children
}) => {
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
                <Scroller />
            </footer>
        </article>
    )
}

MainLayout.propTypes = {
    children: object
}

export default MainLayout
