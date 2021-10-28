import React, { FC } from 'react'
import Link from 'next/link'

interface IBreadcrumbsProps {
    breadcrumbs?: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ]
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({
    breadcrumbs = []
}) => (
    <section className="breadcrumbs">
        <div className="grid-container fluid">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <ul className="breadcrumbs-nav flex-container">
                        {breadcrumbs.map((item, index) => item.active
                            ? (
                                <li key={index} className="nav-item font-bold text-uppercase">{item.title}</li>
                            ) : (
                                <li key={index} className="nav-item font-bold text-uppercase">
                                    <Link href={item.value}><a className="link color-purple" aria-label={item.title}>{item.title}</a></Link>
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
            @media screen and (max-width: 39.9375em) {
                .breadcrumbs-nav .nav-item {
                    font-size: 0.8rem;
                }
            }
        `}</style>
    </section>
)

export default Breadcrumbs