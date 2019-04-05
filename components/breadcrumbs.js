import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import Link from 'next/link'

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

        <style jsx>{`
            .breadcrumbs {
                padding: 1vw 0;
            }
            .breadcrumbs-nav {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .breadcrumbs-nav .nav-item {
                cursor: pointer;
            }
            .breadcrumbs-separate {
                padding: 1rem 0.25rem;
            }
            .breadcrumbs-nav .nav-item:last-child {
                cursor: auto;
                color: #9c9c9c;
            }
        `}</style>
    </section>
)

Breadcrumbs.propTypes = {
    breadcrumbs: array
}

export default Breadcrumbs