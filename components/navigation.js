import React from 'react'
import { array } from 'prop-types'
import { map, uniqueId } from 'lodash'
import classnames from 'classnames'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Brand from '../components/brand'
import './navigation.css'

class Navigation extends React.Component {
    state = {
        isOpen: false
    }

    handleClickToggleButton = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { navigation, brand } = this.props
        const { isOpen } = this.state
        const classes = classnames('cell small-12 medium-12 large-11 hidden', isOpen && 'visible')

        return (
            <nav className="navigation grid-container fluid">
                <div className="toggle-button show-for-small-only">
                    <span className="color-white" onClick={this.handleClickToggleButton}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </span>
                </div>
                <div className="grid-x grid-padding-x align-middle">
                    <div className="cell small-12 medium-12 large-1">
                        <div className="brand">
                            <Brand brand={brand} />
                        </div>
                    </div>
                    <div className={classes}>
                        <ul className="menu">
                            {map(navigation, (menuItem, menuIndex) => (
                                <li className="menu-item" key={uniqueId(menuIndex)}>
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
            </nav>
        )
    }
}

Navigation.propTypes = {
    navigation: array,
    brand: array
}

export default Navigation
