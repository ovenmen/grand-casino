import React, { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faMapMarkerAlt, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import Logo from './logo'

interface IFooterProps {
    logo: string,
    footer: {
        description: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string,
        copirated: string
    },
    navigation: {
         items: [
            {
                title: string,
                value: string,
                submenu?: [
                    {
                        title: string,
                        value: string,
                    }
                ]
            }
        ]
    }
}

const Footer: FC<IFooterProps> = ({
    logo,
    footer,
    navigation
}) => {
    const subNavigation = navigation.items.find(item => item.submenu)
    const submenu = subNavigation && subNavigation.submenu

    return (
        <footer>
            <section className="footer">
                <div className="footer-main-section">
                    <div className="grid-x">
                        {footer.description && (
                            <div className="cell small-12 medium-6 large-3">
                                <div className="description">
                                    <Logo logo={logo} />
                                    <p className="color-white">{footer.description}</p>
                                </div>
                            </div>
                        )}
                        <div className="cell small-12 medium-6 large-3">
                            <ul className="color-white list">
                                {navigation && navigation.items.map((item, index) => (
                                    <li key={index} className="list-item">
                                        <Link href={item.value} passHref>
                                            <a className="link color-white" aria-label={item.title}>{item.title}
                                                <span className="icon"><FontAwesomeIcon fixedWidth icon={faLink} height="1em" /></span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {submenu && (
                            <div className="cell small-12 medium-6 large-3">
                                <ul className="color-white list">
                                    {submenu.map(item => (
                                        <li key={item.value} className="list-item">
                                            <Link href={item.value} passHref>
                                                <a className="link color-white" aria-label={item.title}>{item.title}
                                                    <span className="icon"><FontAwesomeIcon fixedWidth icon={faLink} height="1em" /></span>
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="cell small-12 medium-6 large-3">
                            <p className="color-white">
                                <span className="contact-icon"><FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} height="1em" /></span>
                                {footer.address}
                            </p>
                            <p className="color-white">
                                <span className="contact-icon"><FontAwesomeIcon fixedWidth icon={faClock} height="1em" /></span>
                                {footer.operationMode}
                            </p>
                            <p className="color-white">
                                <span className="contact-icon"><FontAwesomeIcon fixedWidth icon={faEnvelope} height="1em" /></span>
                                <a className="color-white link" href={`mailto:${footer.email}`} rel="noopener noreferrer">
                                    {footer.email}
                                </a>
                            </p>
                            <p className="color-white">
                                <span className="contact-icon"><FontAwesomeIcon fixedWidth icon={faPhone} height="1em" /></span>
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
                                        <FontAwesomeIcon fixedWidth icon={faVk} height="1em" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/questoria/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon fixedWidth icon={faFacebook} height="1em" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/questories/" className="color-white link" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon fixedWidth icon={faInstagram} height="1em" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/questoriaru" className="color-white link" rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon fixedWidth icon={faYoutube} height="1em" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .footer {
                    background: url('/images/bg-footer.jpg') center center;
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
                    vertical-align: middle;
                    display: inline-block;
                    line-height: initial;
                }
                .link:hover .icon {
                    visibility: visible;
                    opacity: 1;
                }
                .contact-icon {
                    margin-right: 1rem;
                    vertical-align: middle;
                    display: inline-block;
                    line-height: initial;
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
        </footer>
    )
}

export default Footer