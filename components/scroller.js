import React, { useState } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import { SHOW_SCROLL_POSITION} from '../config'

const Scroller = () => {
    const [showScroller, setShowScroller] = useState(false)

    const handleScroll = () => {
        const isShow = window.pageYOffset >= SHOW_SCROLL_POSITION || false
        setShowScroller(isShow)
    }

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    window.onscroll = handleScroll

    return (
        <div className={classnames('scroller', showScroller && 'show')}>
            <div className="scroller-link" onClick={handleClick}>
                <span className="icon"><FontAwesomeIcon icon={faCaretUp} /></span>
            </div>

            <style jsx>{`
                .scroller {
                    position: fixed;
                    bottom: 5rem;
                    right: 2rem;
                    z-index: 1000000;
                    visibility: hidden;
                    opacity: 0;
                    transition: all 0.3s ease-in-out;
                }
                .scroller-link {
                    background: #6047af;
                    padding: 1rem 1.4rem;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .scroller-link .icon {
                    color: #ffffff;
                }
                .scroller.show {
                    visibility: visible !important;
                    opacity: 1;
                }
            `}</style>
        </div>
    )
}


export default Scroller