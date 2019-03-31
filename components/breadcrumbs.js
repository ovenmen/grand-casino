import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import Link from 'next/link'

import './breadcrumbs.css'

const Breadcrumbs = ({ breadcrumbs }) => (
    <section className="breadcrumbs">
        <div className="grid-container fluid">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <ul className="breadcrumbs-nav flex-container">
                        {map(breadcrumbs, (item, index) => item.active
                            ? (
                                <li key={uniqueId(index)} className="nav-item font-bold text-uppercase">{item.title}</li>
                            ) : (
                                <li key={uniqueId(index)} className="nav-item font-bold text-uppercase">
                                    <Link href={item.value}><a className="link color-purple">{item.title}</a></Link>
                                    <span className="breadcrumbs-separate">{'/'}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

Breadcrumbs.propTypes = {
    breadcrumbs: array
}

export default Breadcrumbs