import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'

const TablePrices = ({ items }) => (
    <section className="table-prices">
        <div className="grid-container fluid">
            {map(items, (item, index) => (
                <div className="grid-x grid-padding-x price-row" key={uniqueId(index)}>
                    <div className="cell small-10 medium-10 large-10">
                        <p className="price-item h5">{item.title}</p>
                    </div>
                    <div className="cell small-2 medium-2 large-2">
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
    items: array
}

export default TablePrices