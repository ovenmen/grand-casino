import React, { useState } from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import classnames from 'classnames'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Brand from '../components/brand'

const Navigation = ({ navigation, brand }) => {
    const [isOpen, setToggleIsOpen] = useState(false)

    const handleClickToggleButton = () => {
        setToggleIsOpen(!isOpen)
    }

    const handleClickLink = () => {
        setToggleIsOpen(false)
    }

    return (
        <nav className="navigation grid-container fluid">
            <div className="toggle-button show-for-small-only">
                <span className="color-white" onClick={handleClickToggleButton}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </span>
            </div>
            <div className="grid-x grid-padding-x align-middle">
                <div className="cell small-12 medium-12 large-1">
                    <div className="brand">
                        <Brand brand={brand} />
                    </div>
                </div>
                <div className={classnames('cell small-12 medium-12 large-11 hidden', isOpen && 'visible')}>
                    <ul className="menu">
                        {map(navigation, (menuItem, menuIndex) => (
                            <li className="menu-item" key={uniqueId(menuIndex)} onClick={handleClickLink}>
                                <Link href={menuItem.value}>
                                    <a className={classnames('link font-bold h5', menuItem.active && 'active')}>
                                        {menuItem.title}
                                    </a>
                                </Link>
                                {menuItem.submenu && (
                                    <ul className="submenu flex-dir-column">
                                        {map(menuItem.submenu, (submenuItem, submenuIndex) => (
                                            <li className="submenu-item" key={uniqueId(submenuIndex)}>
                                                <Link href={submenuItem.value}>
                                                    <a className={classnames('link font-bold h5', submenuItem.active && 'active')}>
                                                        {submenuItem.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .navigation {
                    background: #000000;
                }
                .menu {
                    display: flex;
                    justify-content: flex-end;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    position: relative;
                }
                .menu-item {
                    padding: 2rem 1rem;
                    white-space: nowrap;
                }
                .submenu {
                    list-style: none;
                    margin: 0;
                    visibility: hidden;
                    position: absolute;
                    z-index: -1;
                    background: #2f2250;
                    padding: 1rem 2rem;
                    top: 10rem;
                    opacity: 0;
                    transition: all 0.4s ease-in-out;
                }
                .menu-item:hover .submenu {
                    visibility: visible;
                    top: 5.75rem;
                    opacity: 1;
                    z-index: 100;
                }
                .submenu-item {
                    padding: 0.5rem 0;
                }
                .active {
                    color: #a48eec !important;
                }
                .toggle-button {
                    position: absolute;
                    top: 2px;
                    right: 1rem;
                    cursor: pointer;
                }
                @media screen and (max-width: 39.9375em) {
                    .menu {
                        flex-direction: column;
                    }
                    .menu-item {
                        padding: 0.5rem 0;
                    }
                    .submenu {
                        display: none;
                    }
                    .hidden {
                        visibility: hidden;
                        max-height: 0;
                        overflow: hidden;
                        transition: all 0.4s ease-in-out;
                    }
                    .visible {
                        visibility: visible;
                        max-height: 20rem;
                    }
                }
                @media screen and (min-width: 40em) and (max-width: 63.9375em) {
                    .brand {
                        text-align: center;
                    }
                    .menu {
                        justify-content: space-between;
                    }
                    .menu-item {
                        padding: 2rem 0;
                    }
                }
            `}</style>
        </nav>
    )
}

Navigation.propTypes = {
    navigation: array,
    brand: array
}

export default Navigation
