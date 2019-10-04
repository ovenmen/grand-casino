import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'

const TablePrices = ({
    prices
}) => (
    <section className="table-prices">
        <div className="grid-container fluid">
            <Accordion allowZeroExpanded preExpanded={[0]}>
                {_.map(prices.items, (item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading >
                            <AccordionItemButton>
                                <div className="grid-x grid-padding-x price-row">
                                    <div className="cell small-7 medium-8 large-10">
                                        <p className="price-item font-bold h5">{item.title}</p>
                                    </div>
                                    <div className="cell small-5 medium-4 large-2">
                                        <p className="price-item font-bold h5">{item.value}</p>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="grid-x grid-padding-x">
                                <div className="cell padding-1 small-12 medium-12 large-12">
                                    {_.map(item.description, (itemDescription, indexDescription) =>(
                                        <p key={indexDescription}>{itemDescription}</p>
                                    ))}
                                    {item.list && (
                                        <div>
                                            <p>{item.list.title}</p>
                                            <ul>
                                                {_.map(item.list.items, (itemList, indexList) => (
                                                    <li key={indexList}>{itemList}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>

        <style global jsx>{`
            .accordion__button {
                outline: none;
            }
            .accordion__button[aria-expanded='true'] {
                background-color: #372964;
                color: var(--color-white);
            }
             .accordion__button:hover {
                background-color: #372964;
                color: var(--color-white);
             }
             .accordion__panel {
                border: 1px solid #372964;
                border-top: none;
                padding: 20px;
                animation: fadein 0.35s ease-in;
             }
             @keyframes fadein {
                 0% {
                     opacity: 0;
                 }
                 100% {
                     opacity: 1;
                 }
             }
        `}</style>

        <style jsx>{`
            .table-prices {
                padding: 5vw 10vw;
            }
            .price-row {
                border-bottom: 1px solid #d2e0eb;
                cursor: pointer;
            }
            .price-item {
                margin: 0;
                padding: 1rem 0;
            }
        `}</style>
    </section>
)

TablePrices.propTypes = {
    prices: PropTypes.object
}

export default TablePrices
