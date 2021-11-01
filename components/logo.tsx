import React, { FC } from 'react'
import Link from 'next/link'

import { LogoProps } from '../types/logo'

const Logo: FC<LogoProps> = ({
    logo
}) => (
    <Link href="/">
        <a className="h2 link color-white" aria-label={logo}>
            <span className="first-letter font-bold">{logo}</span>
        </a>
    </Link>
)

export default Logo