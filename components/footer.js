import React from 'react'
import { array, object } from 'prop-types'
import { map, uniqueId, find } from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMapMarkerAlt, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Brand from './brand'

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
                        {navigation && map(navigation, (item, index) => (
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
                        {navigation.submenu && map(submenu(navigation).submenu, (item, index) => (
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
                    <ul className="social-list no-bullet">
                        <li>
                            <a href="https://vk.com/questoria" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faVk} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/questoria/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/questories/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/questoriaru" className="color-white link" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <style jsx>{`
            .footer {
                background: url('/static/images/bg-footer.jpg') center center;
                background-size: cover;
            }
            .footer-main-section {
                padding: 5vw;
            }
            .description {
                margin: 0;
                padding-bottom: 0;
                padding-right: 1.5rem;
                padding-left: 0.5rem;
                padding-top: 0.5rem;
            }
            .list {
                padding: 0 1.5rem;
                margin: 0;
            }
            .list-item {
                margin: 1rem 0;
                padding-left: 0.5rem;
            }
            .icon {
                font-size: 1rem;
                margin-left: 1rem;
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
                color: #a48eec;
            }
            .link:hover .icon {
                visibility: visible;
                opacity: 1;
            }
            .contact-icon {
                margin-right: 1rem;
            }
            .footer-social-section {
                padding: 1rem 3%;
                margin: 0 2rem;
                border-top: 1px solid #7b7b7b;
            }
            .social-list {
                display: flex;
                padding: 0;
                justify-content: space-around;
            }
        `}</style>
    </section>
)

Footer.propTypes = {
    brand: array,
    footer: object,
    navigation: array
}

export default Footer
