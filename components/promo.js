import React from  'react'
import { string } from 'prop-types'

import './promo.css'

const Promo = ({ header, description }) => (
    <section className="promo">
        <div className="grid-container fluid">
            <div className="grid-x">
                <div className="cell large-8 large-offset-4">
                    <div className="headers text-right color-white font-bold">
                        <h1><strong>{header}</strong></h1>
                        <h2><strong>{description}</strong></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

Promo.propTypes = {
    header: string,
    description: string,
    subheader: string
}

export default Promo
