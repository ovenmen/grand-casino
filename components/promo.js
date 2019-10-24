import React from  'react'
import PropTypes from 'prop-types'

const Promo = ({
    promo
}) => (
    <section className="promo">
        <div className="grid-container fluid">
            <div className="grid-x">
                <div className="cell large-8 large-offset-4">
                    <div className="headers text-right color-white font-bold">
                        <h1><strong>{promo.header}</strong></h1>
                        <h2><strong>{promo.description}</strong></h2>
                    </div>
                </div>
            </div>
        </div>

        <style jsx>{`
            .promo {
                background: url('/images/bg-promo.jpg') center center no-repeat;
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
    promo: PropTypes.object,
}

export default Promo
