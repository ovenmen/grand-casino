import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

const Action = ({
    action
}) => (
    <section className="action">
        <div className="grid-container fluid">
            <div className="grid-x grid-padding-x align-middle">
                <div className="cell small-12 medium-12 large-8">
                    <div className="headers-actions color-white font-bold">
                        <h2><strong>{action.header}</strong></h2>
                        <h4><strong>{action.description}</strong></h4>
                    </div>
                </div>
                <div className="cell small-12 medium-12 large-4">
                    <p className="button-action color-white text-right">
                        <Button title={action.buttonTitle} href={action.buttonHref} bigSize />
                    </p>
                </div>
            </div>
        </div>

        <style jsx>{`
            .action {
                background: url('/static/images/bg-action.jpg') center center no-repeat;
                background-size: cover;
                padding: 5vw;
            }
            .headers-actions {
                padding-left: 3vw;
                border-left: 4px solid #ffffff;
            }
            @media screen and (max-width: 39.9375em) {
                .headers-actions,
                .button-action {
                    text-align: center;
                }
                .headers-actions {
                    border: none;
                    padding: 0;
                }
                .button-action {
                    margin-top: 5vw;
                }
            }
            @media screen and (min-width: 40em) and (max-width: 63.9375em) {
                .headers-actions,
                .button-action {
                    text-align: center;
                }
                .headers-actions {
                    border: none;
                    padding: 0;
                }
                .button-action {
                    margin-top: 5vw;
                    margin-bottom: 3vw;
                }
            }
        `}</style>
    </section>
)

Action.propTypes = {
    action: PropTypes.object,
}

export default Action
