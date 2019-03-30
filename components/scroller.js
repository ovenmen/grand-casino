import React, { Component } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import { SHOW_SCROLL_POSITION} from '../config'

import './scroller.css'

class Scroller extends Component {
    state = {
        showScroller: false
    }

    handleScroll = () => {
        window.onscroll = () => {
            this.setState({
                showScroller: window.pageYOffset >= SHOW_SCROLL_POSITION || false
            })
        }
    }

    handleClick = (event) => {
        event.preventDefault()
        window.scrollTo(0, 0)
    }

    render () {
        const { showScroller } = this.state
        this.handleScroll()

        return (
            <div className={classnames('scroller', showScroller && 'show')}>
                <a className="scroller-link" onClick={this.handleClick}>
                    <span className="icon"><FontAwesomeIcon icon={faCaretUp} /></span>
                </a>
            </div>
        )
    }
}


export default Scroller