import React from 'react'
import { string, bool } from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'

import './button.css'

const Button = ({ href, title, bigSize, invert }) => (
    <Link href={href}>
        <a className={classnames('link button text-uppercase text-nowrap', bigSize && 'big', invert && 'invert')}>{title}</a>
    </Link>
)

Button.propTypes = {
    href: string,
    title: string,
    bigSize: bool,
    invert: bool
}

export default Button