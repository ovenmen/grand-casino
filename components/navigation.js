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
        const { brand, navigation } = this.props
        const { isOpen } = this.state
        const icon = isOpen ? faTimes : faBars
        const classes = isOpen ? 'menu vertical visible' : 'menu show-for-medium'

        return (
            <nav className="navigation">
                <div className="grid-x grid-padding-x align-middle">
                    <div className="cell small-12 medium-12 large-12 row-wrap">
                        <div className="grid-x align-middle">
                            <div className="cell small-12 medium-1 large-1">
                                <Brand brand={brand} />
                            </div>
                            <div className="toggle-button show-for-small-only align-top">
                                <span className="color-white align-right" onClick={this.handleClickToggleButton}>
                                    <FontAwesomeIcon icon={icon} />
                                </span>
                            </div>
                            <div className="cell small-12 medium-11 large-11">
                                <ul className={classes}>
                                    {map(navigation, (menuItem, menuIndex) => (
                                        <li className={menuItem.active ? 'menu-item active' : 'menu-item'} key={uniqueId(menuIndex)}>
                                            <Link href={menuItem.value}>
                                                <a className={classnames('color-white font-bold h5', menuItem.active && 'active')}>
                                                    {menuItem.title}
                                                </a>
                                            </Link>
                                            {menuItem.submenu && (
                                                <ul className="submenu flex-dir-column show-for-medium">
                                                    {map(menuItem.submenu, (submenuItem, submenuIndex) => (
                                                        <li className="submenu-item" key={uniqueId(submenuIndex)}>
                                                            <Link href={submenuItem.value}>
                                                                <a className={classnames('color-white font-bold h5', submenuItem.active && 'active')}>
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
