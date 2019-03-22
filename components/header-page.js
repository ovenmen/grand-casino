import React from 'react'
import { string } from 'prop-types'

const HeaderPage = ({ header }) => (
    <div>
        <h1>{header}</h1>
    </div>
)

HeaderPage.propTypes = {
    header: string
}

export default HeaderPage
