import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FsLightbox from 'fslightbox-react'
import _ from 'lodash'

const PhotoCarousel = ({
    photos
}) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0
    })

    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        })
    }

    return (
        <section className="photo-carousel">
            <div className="grid-x">
                {_.map(photos.items, (photo, index) => (
                    <div className="cell small-12 medium-3 large-2" key={index}>
                        <figure>
                            <img src={photo} alt={photo} className="thumbnail" onClick={() => openLightboxOnSlide(index + 1)} />
                        </figure>
                    </div>
                ))}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                type="image"
                slide={lightboxController.slide}
                sources={photos.items}
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
                    object-fit: cover;
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
