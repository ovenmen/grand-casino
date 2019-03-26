import React from 'react'
import { string } from 'prop-types'
import Link from 'next/link'

import './button.css'

const Button = ({ href, title }) => (
    <Link href={href}><a className="link button text-uppercase">{title}</a></Link>
)

Button.propTypes = {
    href: string,
    title: string
}

export default Button