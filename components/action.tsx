import React, { FC } from 'react'

import Button from './button'

interface ActionProps {
    action?: {
        header: string,
        description: string,
        buttonTitle: string,
        buttonHref: string
    }
}

const Action: FC<ActionProps> = ({
    action
}) => (
    <section className="action">
        <div className="grid-container fluid">
            <div className="grid-x grid-padding-x align-middle">
                <div className="cell small-12 medium-12 large-8">
                    <div className="headers-actions color-white font-bold">
                        {action?.header && (
                            <h2><strong>{action.header}</strong></h2>
                        )}
                        {action?.description && (
                            <h4><strong>{action.description}</strong></h4>
                        )}
                    </div>
                </div>
                {action?.buttonHref && (
                    <div className="cell small-12 medium-12 large-4">
                        <p className="button-action color-white text-right">
                            <Button title={action.buttonTitle} href={action.buttonHref} bigSize />
                        </p>
                    </div>
                )}
            </div>
        </div>

        <style jsx>{`
            .action {
                background: url('/images/bg-action.jpg') center center no-repeat;
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

export default Action