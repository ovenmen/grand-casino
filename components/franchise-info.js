import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const FranchiseInfo = ({
    franchise: {
        header,
        description,
        profit,
        advantages: {
            advantageHeader,
            items = [],
            queston,
            action,
            linkHref,
            linkTitle,
            answer
        },
        promo,
        note
    }
}) => (
    <section className="franchise-info">
        <div className="grid-x margin-bottom-2">
            <div className="cell">
                <h2 className="text-center">{header}</h2>
                <h3 className="text-center subheader">{description}</h3>
            </div>
        </div>
        <div className="grid-x margin-bottom-2">
            <div className="cell">
                <h5 className="font-bold font-italic">{profit.header}</h5>
                <ul className="padding-left-2">
                    {profit.description.map((item, index) =>
                        <li key={index} className="h5">{item}</li>
                    )}
                </ul>
                <h4 className="promo color-purple font-bold margin-top-2">{profit.promo}</h4>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <h3 className="text-center margin-bottom-2">{advantageHeader}</h3>
            </div>
        </div>
        {items.map(advantage => (
            <div className="grid-x margin-bottom-2" key={advantage.header}>
                <div className="cell">
                    <h4 className="text-center font-bold margin-bottom-2">{advantage.header}</h4>
                    {advantage.description.map((item, index) =>
                        <p key={index} className="h5">{item}</p>
                    )}
                    <h4 className="promo color-purple font-bold margin-top-2 margin-bottom-2">{promo}</h4>
                    {advantage.list && <h5 className="font-bold font-italic">{advantage.list.header}</h5>}
                    {advantage.list && <ul className="padding-left-2 margin-bottom-2">
                        {advantage.list.description.map((item, index) =>
                            <li key={index} className="h5">{item}</li>
                        )}
                    </ul>}
                    <h5 className="font-italic margin-bottom-2">{note}</h5>
                </div>
            </div>
        ))}
        <div className="grid-x">
            <div className="cell">
                <p className="font-bold text-center h4">{queston}</p>
                <p className="font-bold text-center h4">{action}</p>
                <p className="text-center h4">
                    <Link href={linkHref}>
                        <a className="link color-purple" aria-label={linkTitle}>{linkTitle}</a>
                    </Link>
                    {answer}
                </p>
            </div>
        </div>

        <style jsx>{`
            .franchise-info {
                padding: 5vw;
            }
            .promo {
                border-left: 2px solid #372964;
                padding-left: 1rem;
            }
        `}</style>
    </section>
)

FranchiseInfo.propTypes = {
    franchise: PropTypes.object
}

export default FranchiseInfo
