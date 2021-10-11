import React, { FC, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Logo from '../components/logo'

interface NavigationProps {
    navigation?: [
        {
            title: string,
            value: string,
            submenu?: [
                {
                    title: string,
                    value: string,
                }
            ]
        },
    ],
    logo?: string,
    pathname?: string
}

const Navigation: FC<NavigationProps> = ({
    navigation,
    logo,
    pathname
}) => {
    const [isOpen, setToggleIsOpen] = useState(false)

    const handleClickToggleButton = useCallback(() => {
        setToggleIsOpen(!isOpen)
    }, [setToggleIsOpen, isOpen])

    const handleClickLink = useCallback(() => {
        setToggleIsOpen(false)
    }, [setToggleIsOpen])

    return (
        <header className="shadow">
            <nav className="navigation grid-container fluid">
                <div className="toggle-button show-for-small-only">
                    <span className="color-white" onClick={handleClickToggleButton}>
                        <FontAwesomeIcon fixedWidth icon={isOpen ? faTimes : faBars} height="1em" />
                    </span>
                </div>
                <div className="grid-x grid-padding-x align-middle">
                    {logo && (
                        <div className="cell small-12 medium-12 large-1">
                            <div className="brand">
                                <Logo logo={logo} />
                            </div>
                        </div>
                    )}
                    <div className={classnames('cell small-12 medium-12 large-11 hidden', isOpen && 'visible')}>
                        <ul className="menu">
                            {navigation && 
                                (navigation.map(menuItem => (
                                    <li className="menu-item" key={menuItem.value} onClick={handleClickLink}>
                                        <Link href={menuItem.value}>
                                            <a className={classnames('link font-bold h5', menuItem.value === pathname && 'active')} aria-label={menuItem.title}>
                                                {menuItem.title}
                                            </a>
                                        </Link>
                                        {menuItem &&
                                            (menuItem.submenu && (
                                                <ul className="submenu flex-dir-column">
                                                    {menuItem.submenu.map(submenuItem => (
                                                        <li className="submenu-item" key={submenuItem.value}>
                                                            <Link href={submenuItem.value}>
                                                                <a className={classnames('link font-bold h5', submenuItem.value === pathname && 'active')} aria-label={submenuItem.title}>
                                                                    {submenuItem.title}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))
                                        }
                                    </li>
                                )))
                            }
                        </ul>
                    </div>
                </div>
            </nav>

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
                    top: 1rem;
                    right: 1rem;
                    cursor: pointer;
                }
                @media screen and (max-width: 39.9375em) {
                    .navigation {
                        min-height: 3rem;
                    }
                    .brand {
                        padding: 1rem 0;
                    }
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
                        height: 0;
                        overflow: hidden;
                        transition: all 0.4s ease-in-out;
                    }
                    .visible {
                        visibility: visible;
                        height: 17rem;
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
        </header>
    )
}

Navigation.propTypes = {
    navigation: PropTypes.array,
    logo: PropTypes.string,
    pathname: PropTypes.string
}

export default Navigation