import React, { FC } from 'react'
import Link from 'next/link'

interface ILogoProps {
    logo: string
}

const Logo: FC<ILogoProps> = ({
    logo
}) => (
    <Link href="/">
        <a className="h2 link color-white" aria-label={logo}>
            <span className="first-letter font-bold">{logo}</span>
        </a>
    </Link>
)

export default Logo