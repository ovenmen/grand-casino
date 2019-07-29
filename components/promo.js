import React from  'react'
import { string } from 'prop-types'

const Promo = ({
    header,
    description
}) => (
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

        <style jsx>{`
            .promo {
                background: url('/static/images/bg-promo.jpg') center center no-repeat;
                background-size: cover;
            }
            .headers {
                margin-top: 28vw;
                margin-bottom: 12vw;
                padding-right: 3vw;
                border-right: 4px solid var(--color-white);
            }
            .headers h1,
            .headers h2 {
                text-shadow: 0px 0px 10px var(--color-black);
            }
        `}</style>
    </section>
)

Promo.propTypes = {
    header: string,
    description: string,
    subheader: string
}

export default Promo
