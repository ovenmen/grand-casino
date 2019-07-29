import React from 'react'
import { array } from 'prop-types'
import { head, last } from 'lodash'
import Link from 'next/link'

const Brand = ({
    brand
}) => (
    <Link href="/">
        <a className="h2 link color-white">
            <span className="first-letter font-bold">{head(brand)}</span>
            <span className="last-letter font-bold">{last(brand)}</span>
        </a>
    </Link>
)

Brand.propTypes = {
    brand: array
}

export default Brand