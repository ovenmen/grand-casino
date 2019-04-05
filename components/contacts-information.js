import React from 'react'
import { object } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const ContactsInformation = ({ header, address, operationMode, phone, email }) => (
    <section className="contacts-information">
        <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-12 large-12">
                <h3 className="margin-bottom-3 font-bold">{header}</h3>
            </div>
        </div>
        <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-12 large-12">
                <p className="lead"><span className="font-bold">Адрес: </span>{address}</p>
                <p className="lead"><span className="font-bold">Режим работы: </span>{operationMode}</p>
                <p className="lead"><span className="font-bold">Телефон: </span>{phone}</p>
                <p className="lead"><span className="font-bold">Email: </span>{email}</p>
            </div>
        </div>
        <div className="grid-x grid-margin-x">
            <div className="cell small-12 medium-12 large-12">
                <div className="follow grid-x align-spaced align-middle padding-top-1 padding-bottom-1">
                    <p className="lead font-bold">Следить</p>
                    <ul className="social-list no-bullet">
                        <li>
                            <a href="https://vk.com/questoria" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faVk} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/questoria/" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/questories/" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/questoriaru" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                                <FontAwesomeIcon className="fa-fw" icon={faYoutube} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <style jsax>{`
            .contacts-information {
                padding: 5vw;
            }
            .follow {
                border: 2px solid #372964;
            }
            .follow .lead {
                margin: 0;
            }
            .social-list {
                display: flex;
                width: 10rem;
                justify-content: space-around;
                margin: 0;
            }
        `}</style>
    </section>
)

ContactsInformation.propTypes = {
    contactsInformationBlock: object
}

export default ContactsInformation