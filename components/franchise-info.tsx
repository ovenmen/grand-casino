import React, { FC } from 'react'
import Link from 'next/link'

interface IFranchiseInfoProps {
    franchise: {
        header: string,
        description: string,
        profit: {
            header: string,
            promo: string,
            description: string[]
        },
        advantages: {
            header: string,
            queston: string,
            action: string,
            linkHref: string,
            linkTitle: string,
            answer: string,
            items: [
                {
                    header: string,
                    promo: string
                    description: string[],
                    list: {
                        header: string,
                        description: string[]
                    },
                    note: string
                }
            ],
            
        }
    }
}

const FranchiseInfo: FC<IFranchiseInfoProps> = ({
    franchise
}) => (
    <section className="franchise-info">
        <div className="grid-x margin-bottom-2">
            <div className="cell">
                <h2 className="text-center">{franchise.header}</h2>
                <h3 className="text-center subheader">{franchise.description}</h3>
            </div>
        </div>
        <div className="grid-x margin-bottom-2">
            <div className="cell">
                <h5 className="font-bold font-italic">{franchise.profit.header}</h5>
                <ul className="padding-left-2">
                    {franchise.profit.description.map((item, index) =>
                        <li key={index} className="h5">{item}</li>
                    )}
                </ul>
                <h4 className="promo color-purple font-bold margin-top-2">{franchise.profit.promo}</h4>
            </div>
        </div>
        <div className="grid-x">
            <div className="cell">
                <h3 className="text-center margin-bottom-2">{franchise.advantages.header}</h3>
            </div>
        </div>
        {franchise.advantages.items.map((advantage, index) => (
            <div className="grid-x margin-bottom-2" key={index}>
                <div className="cell">
                    <h4 className="text-center font-bold margin-bottom-2">{advantage.header}</h4>
                    {advantage.description.map((item, index) =>
                        <p key={index} className="h5">{item}</p>
                    )}
                    <h4 className="promo color-purple font-bold margin-top-2 margin-bottom-2">{advantage.promo}</h4>
                    {advantage.list && <h5 className="font-bold font-italic">{advantage.list.header}</h5>}
                    {advantage.list && <ul className="padding-left-2 margin-bottom-2">
                        {advantage.list.description.map((item, index) =>
                            <li key={index} className="h5">{item}</li>
                        )}
                    </ul>}
                    <h5 className="font-italic margin-bottom-2">{advantage.note}</h5>
                </div>
            </div>
        ))}
        <div className="grid-x">
            <div className="cell">
                <p className="font-bold text-center h4">{franchise.advantages.queston}</p>
                <p className="font-bold text-center h4">{franchise.advantages.action}</p>
                <p className="text-center h4">
                    <Link href={franchise.advantages.linkHref}>
                        <a className="link color-purple" aria-label={franchise.advantages.linkTitle}>{franchise.advantages.linkTitle}</a>
                    </Link>
                    {franchise.advantages.answer}
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

export default FranchiseInfo