import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'

const Button = ({
    href,
    title,
    bigSize,
    invert
}) => (
    <span>
        <Link href={href}>
            <a
                className={classnames('link button text-uppercase text-nowrap', bigSize && 'big', invert && 'invert')}
                aria-label={title}
            >
                {title}
            </a>
        </Link>

        <style jsx>{`
            .button {
                border: 2px solid #ffffff;
                padding: 1rem 2rem;
                font-weight: 700;
                font-size: 0.8rem;
            }
            .link.button:hover {
                background: #ffffff;
                color: #372964 !important;
            }
            .big {
                padding: 1.5rem 2.5rem;
                font-size: 1rem;
            }
            .invert {
                background: #372964;
                border: 2px solid #372964;
            }
            .invert:hover {
                background: #ffffff;
                border: 2px solid #ffffff;
            }
            @media screen and (max-width: 39.9375em) {
                .button {
                    padding: 0.7rem 1rem;
                }
            }
        `}</style>
    </span>
)

Button.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    bigSize: PropTypes.bool,
    invert: PropTypes.bool
}

export default Button