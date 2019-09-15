import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import _ from 'lodash'

const PhotoCarousel = ({
    photos
}) => (
    <section className="photo-carousel">
        <Carousel
            heightMode="current"
            autoplay
            enableKeyboardControls
        >
            {_.map(photos.items, (photo, index) => (
                <img src={`/static/images/photos/${photo}`} alt={photo} key={index} height={100 * (index + 1)} />
            ))}
        </Carousel>

        <style jsx>{`
            .photo-carousel {
                background-color: var(--color-purple);
                height: 50rem;
            }
        `}</style>
    </section>
)

PhotoCarousel.propTypes = {
    photos: PropTypes.object
}

export default PhotoCarousel
