import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Follow = () => (
    <div className="follow grid-x align-spaced align-middle padding-top-1 padding-bottom-1">
        <p className="lead font-bold">Следить</p>
        <ul className="social-list no-bullet">
            <li>
                <a href="https://vk.com/questoria" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                    <span className="icon"><FontAwesomeIcon fixedWidth icon={faVk} height="1rem" /></span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/questoria/" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                    <span className="icon"><FontAwesomeIcon fixedWidth icon={faFacebook} height="1rem" /></span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/questories/" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                    <span className="icon"><FontAwesomeIcon fixedWidth icon={faInstagram} height="1rem" /></span>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/user/questoriaru" className="link color-purple lead" rel="noopener noreferrer" target="_blank">
                    <span className="icon"><FontAwesomeIcon fixedWidth icon={faYoutube} height="1rem" /></span>
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
            li a:visited {
                color: #372964;
            }
            .icon {
                display: inline-block;
                vertical-align: middle;
            }
        `}</style>
    </div>
)

export default Follow
