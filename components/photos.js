import React, { useState } from 'react'
import { string, array } from 'prop-types'
import { map, uniqueId, get, toLower, toNumber } from 'lodash'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { STATIC_IMAGES_URL } from '../config'

const Photos = ({ header, items }) => {
    const [imageIndex, setImageIndex] = useState(0)
    const [modal, setToggleModal] = useState(false)
    const lengthSlides = items.length

    const handleKeyDown = (event) => {
        const keyCode = get(event, 'keyCode', null)

        if (keyCode === 39) {
            nextSlide()
        }

        if (keyCode === 37) {
            prevSlide()
        }

        if (keyCode === 27) {
            setToggleModal(false)
        }
    }

    const handleClickImage = (event) => {
        const index = get(event, 'target.children[0].dataset.index', null)
        setToggleModal(true)
        setImageIndex(toNumber(index))
    }

    const handleClickCloseModal = (event) => {
        const tagName = get(event, 'target.tagName', null)

        if (toLower(tagName) !== 'img') {
            setToggleModal(false)
        }
    }

    const nextSlide = () => {
        const index = imageIndex + 1 > lengthSlides - 1 ? 0 : imageIndex + 1
        setImageIndex(index)
    }

    const prevSlide = () => {
        const index = imageIndex - 1 < 0 ? lengthSlides - 1 : imageIndex - 1
        setImageIndex(index)
    }

    const handleClickBigImage = (event) => {
        const currentSlide = get(event, 'target', null)
        const clickSlidePlaceX = get(event, 'pageX', 0)
        const width = currentSlide.width
        const prevElem = clickSlidePlaceX < width / 2
        const nextElem = clickSlidePlaceX > width / 2

        if (prevElem) {
            prevSlide()
        }

        if (nextElem) {
            nextSlide()
        }
    }

    window.onkeydown = handleKeyDown

    return (
        <section className="photos">
            <div className="grid-x">
                <div className="cell">
                    <h2 className="h1 text-center color-white font-bold margin-bottom-3">{header}</h2>
                </div>
            </div>
            <div className={classnames('grid-x modal align-middle', modal && 'show')} onClick={handleClickCloseModal}>
                <div className="cell">
                    <span className="close-icon"><FontAwesomeIcon className="fa-fw fa-lg color-white" icon={faTimes} /></span>
                    <figure>
                        <img src={`${STATIC_IMAGES_URL}/${items[imageIndex]}`} onClick={handleClickBigImage} />
                    </figure>
                </div>
            </div>
            <div className="grid-x grid-margin-x">
                {map(items, (item, index) =>
                    <div className="cell small-6 medium-4 large-2 margin-bottom-2" key={uniqueId(index)}>
                        <figure className="cover shadow" onClick={handleClickImage}>
                            <img src={`${STATIC_IMAGES_URL}/${item}`} data-index={index} />
                        </figure>
                    </div>
                )}
            </div>

            <style jsx>{`
                .photos {
                    padding: 5vw;
                    background: #3b3165;
                    position: relative;
                }
                .cover {
                    background: #ffffff;
                    overflow: hidden;
                    position: relative;
                    transition: all 0.3s ease-in-out;
                }
                .cover img {
                    height: 10rem;
                    width: 100%;
                    object-fit: cover;
                    padding: 0.4rem;
                    transition: all 0.3s ease-in-out;
                }
                .cover:hover img {
                    transform: scale(1.2);
                }
                .cover:before {
                    content: "";
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    background: #000000;
                    position: absolute;
                    z-index: 0;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                }
                .cover:hover::before {
                    z-index: 1000;
                    opacity: 0.5;
                }
                .modal {
                    position: fixed;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 100000;
                    text-align: center;
                    background: rgba(0,0,0,0.95);
                    transition: all 0.3s linear;
                    visibility: hidden;
                    opacity: 0;
                }
                .show {
                    visibility: visible;
                    opacity: 1;
                }
                .modal figure {
                    padding: 0 5vw;
                }
                .modal img {
                    cursor: pointer;
                    max-height: 55rem;
                }
                .arrow-right {
                    position: absolute;
                    z-index: 100000;
                    top: 50%;
                    padding-right: 5vw;
                    right: 0;
                }
                .arrow-right:hover {
                    cursor: pointer;
                }
                .close-icon {
                    position: fixed;
                    top: 0;
                    right: 0;
                    cursor: pointer;
                }
            `}</style>
        </section>
    )
}

Photos.propTypes = {
    header: string,
    items: array
}

export default Photos
