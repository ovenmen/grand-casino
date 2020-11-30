import React, { useState, useCallback } from 'react'
import PropTypes, { number } from 'prop-types'
import FsLightbox from 'fslightbox-react'
import Image from 'next/image'

const PhotoCarousel = ({
    photos: {
        items = []
    }
}) => {
    const [toggler, setToggler] = useState(false)
    const [slide, setSlide] = useState(0)

    const openLightboxOnSlide = useCallback(number => {
        setToggler(!toggler)
        setSlide(number)
    }, [toggler, number])

    return (
        <section className="photo-carousel">
            <div className="grid-x align-center">
                {items.map((photo, index) => (
                    <div className="cell small-12 medium-3 large-2 thumbnail" key={index}>
                        <figure>
                            <Image
                                src={photo}
                                alt={photo}
                                onClick={() => openLightboxOnSlide(index + 1)}
                                loading="lazy"
                                objectFit="cover"
                                width="auto"
                                height={238}
                            />
                        </figure>
                    </div>
                ))}
            </div>
            <FsLightbox
                toggler={toggler}
                type="image"
                slide={slide}
                sources={items}
            />

            <style jsx>{`
                .photo-carousel {
                    background-color: var(--color-purple);
                    padding: 5rem;
                }
                .thumbnail {
                    background: var(--color-white);
                    padding: 0.5rem;
                    margin-top: 1rem;
                    border: 1px solid;
                    height: 16rem;
                    width: 16rem;
                }
                .thumbnail:hover {
                    cursor: pointer;
                }
            `}</style>
        </section>
    )
}

PhotoCarousel.propTypes = {
    photos: PropTypes.object
}

export default PhotoCarousel
