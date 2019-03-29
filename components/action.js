import React from 'react'
import { string } from 'prop-types'

import Button from './button'
import './action.css'

const Action = ({ header, description, buttonTitle, buttonHref }) => (
    <section className="action">
        <div className="grid-container fluid">
            <div className="grid-x grid-padding-x align-middle">
                <div className="cell small-12 medium-12 large-8">
                    <div className="headers-actions color-white font-bold">
                        <h2><strong>{header}</strong></h2>
                        <h4><strong>{description}</strong></h4>
                    </div>
                </div>
                <div className="cell small-12 medium-12 large-4">
                    <p className="button-action color-white text-right">
                        <Button title={buttonTitle} href={buttonHref} bigSize />
                    </p>
                </div>
            </div>
        </div>
    </section>
)

Action.propTypes = {
    header: string,
    description: string,
    buttonTitle: string,
    buttonHref: string
}

export default Action
