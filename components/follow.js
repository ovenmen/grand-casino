import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Follow = () => (
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

        <style jsx>{`
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
    </div>
)

export default Follow
