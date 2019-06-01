import React from 'react'
import Link from 'next/link'
import { object, string, array } from 'prop-types'
import { map, uniqueId } from 'lodash'

const FranchiseInfo = ({ header, description, profit, advantages }) => (
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
                    {map(profit.description, (item, index) =>
                        <li key={uniqueId(index)} className="h5">{item}</li>
                    )}
                </ul>
                <h4 className="promo color-purple font-bold margin-top-2">{profit.promo}</h4>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <h3 className="text-center margin-bottom-2">{advantages.header}</h3>
            </div>
        </div>
        {map(advantages.items, (advantage, index) => (
            <div className="grid-x margin-bottom-2" key={uniqueId(index)}>
                <div className="cell">
                    <h4 className="text-center font-bold margin-bottom-2">{advantage.header}</h4>
                    {map(advantage.description, (item, index) =>
                        <p key={uniqueId(index)} className="h5">{item}</p>
                    )}
                    <h4 className="promo color-purple font-bold margin-top-2 margin-bottom-2">{advantage.promo}</h4>
                    {advantage.list && <h5 className="font-bold font-italic">{advantage.list.header}</h5>}
                    {advantage.list && <ul className="padding-left-2 margin-bottom-2">
                        {map(advantage.list.description, (item, index) =>
                            <li key={uniqueId(index)} className="h5">{item}</li>
                        )}
                    </ul>}
                    <h5 className="font-italic margin-bottom-2">{advantage.note}</h5>
                </div>
            </div>
        ))}
        <div className="grid-x">
            <div className="cell">
                <p className="font-bold text-center h4">{advantages.queston}</p>
                <p className="font-bold text-center h4">{advantages.action}</p>
                <p className="text-center h4">
                    <Link href={advantages.linkHref}>
                        <a className="link color-purple">{advantages.linkTitle}</a>
                    </Link>
                    {advantages.answer}
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

}

export default FranchiseInfo
