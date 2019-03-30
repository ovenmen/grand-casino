import React from 'react'
import { array, object } from 'prop-types'
import { map, uniqueId, find } from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMapMarkerAlt, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Brand from './brand'
import './footer.css'

const submenu = (navigation) => find(navigation, item => item.submenu)

const Footer = ({ brand, footer, navigation }) => (
    <section className="footer">
        <div className="footer-main-section">
            <div className="grid-x">
                <div className="cell small-12 medium-6 large-3">
                    <div className="description">
                        <Brand brand={brand} />
                        <p className="color-white">{footer.description}</p>
                    </div>
                </div>
                <div className="cell small-12 medium-6 large-3">
                    <ul className="color-white list">
                        {map(navigation, (item, index) => (
                            <li key={uniqueId(index)} className="list-item">
                                <Link href={item.value}>
                                    <a className="link color-white">{item.title}
                                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cell small-12 medium-6 large-3">
                    <ul className="color-white list">
                        {map(submenu(navigation).submenu, (item, index) => (
                            <li key={uniqueId(index)} className="list-item">
                                <Link href={item.value}>
                                    <a className="link color-white">{item.title}
                                        <span className="icon"><FontAwesomeIcon icon={faLink} /></span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cell small-12 medium-6 large-3">
                    <p className="color-white">
                        <span className="contact-icon"><FontAwesomeIcon className="fa-fw" icon={faMapMarkerAlt} /></span>
                        {footer.address}
                    </p>
                    <p className="color-white">
                        <span className="contact-icon"><FontAwesomeIcon className="fa-fw" icon={faClock} /></span>
                        {footer.operationMode}
                    </p>
                    <p className="color-white">
                        <span className="contact-icon"><FontAwesomeIcon className="fa-fw" icon={faEnvelope} /></span>
                        <a className="color-white link" href={`mailto:${footer.email}`} rel="noopener noreferrer">
                            {footer.email}
                        </a>
                    </p>
                    <p className="color-white">
                        <span className="contact-icon"><FontAwesomeIcon className="fa-fw" icon={faPhone} /></span>
                        <a className="color-white link" href={`tel:${footer.phone}`} rel="noopener noreferrer">
                            {footer.phone}
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div className="footer-social-section">
            <div className="grid-x">
                <div className="cell small-12 medium-10 large-10">
                    <p className="color-white">{footer.copirated}</p>
                </div>
                <div className="cell small-12 medium-2 large-2">
                    <ul className="social-list">
                        <li className="social-list-item">
                            <a href="https://vk.com/questoria" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faVk} />
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a href="https://www.facebook.com/questoria/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faFacebook} />
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a href="https://www.instagram.com/questories/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faInstagram} />
                            </a>
                        </li>
                        <li className="social-list-item">
                            <a href="https://www.youtube.com/user/questoriaru" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

Footer.propTypes = {
    brand: array,
    footer: object,
    navigation: array
}

export default Footer
