import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Logo = ({
    logo
}) => (
    <Link href="/">
        <a className="h2 link color-white" aria-label={logo}>
            <span className="first-letter font-bold">{logo}</span>
        </a>
    </Link>
)

Logo.propTypes = {
    logo: PropTypes.string
}

export default Logo
