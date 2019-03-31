import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'

import './table-prices.css'

const TablePrices = ({ items }) => (
    <section className="table-prices">
        <div className="grid-container fluid">
            {map(items, (item, index) => (
                <div className="grid-x grid-padding-x price-row" key={uniqueId(index)}>
                    <div className="cell small-10 medium-10 large-10">
                        <p className="price-item">{item.title}</p>
                    </div>
                    <div className="cell small-2 medium-2 large-2">
                        <p className="price-item font-bold">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

TablePrices.propTypes = {
    items: array
}

export default TablePrices
