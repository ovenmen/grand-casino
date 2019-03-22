import React from 'react'
import { object } from 'prop-types'

import Navigation from '../components/navigation'

const Layout = ({ children }) => {
    const { navigation, brand } = children.props.data

    return (
        <article>
            <header>
                <Navigation navigation={navigation} brand={brand} />
            </header>
            <main>
                {children}
            </main>
        </article>
    )
}

Layout.propTypes = {
    children: object
}

export default Layout
