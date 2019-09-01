import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const TablePrices = ({
    prices
}) => (
    <section className="table-prices">
        <div className="grid-container fluid">
            {_.map(prices.items, (item, index) => (
                <div className="grid-x grid-padding-x price-row" key={index}>
                    <div className="cell small-7 medium-8 large-10">
                        <p className="price-item h5">{item.title}</p>
                    </div>
                    <div className="cell small-5 medium-4 large-2">
                        <p className="price-item font-bold h5">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>

        <style jsx>{`
            .table-prices {
                padding: 5vw 10vw;
            }
            .price-row {
                border-bottom: 1px solid #d2e0eb;
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
