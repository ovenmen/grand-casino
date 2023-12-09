import React, { FC, useState } from 'react'
import FsLightbox from 'fslightbox-react'
import Image from 'next/image'

import { PhotoCarouselProps } from '../types/photo-carousel'

const PhotoCarousel: FC<PhotoCarouselProps> = ({
    photos = {
        header: '',
        items: [],
    }
}) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0,
    })

    const openLightboxOnSlide = (number: number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number,
        })
    }

    const targetPhotos = photos.items.map((photo) => `/images/photos/${photo}`)

    return (
        <section className="photo-carousel">
            <div className="grid-x">
                <div className="cell small-12 medium-12 large-12">
                    <h2 className="text-center color-white header">{photos.header}</h2>
                </div>
            </div>
            <div className="grid-x">
                {targetPhotos.map((photo, index) => (
                    <div className="cell small-12 medium-3 large-2" key={index}>
                        <figure className="thumbnail">
                            <Image
                                src={photo}
                                alt={photo}
                                width={500}
                                height={500}
                                onClick={() => openLightboxOnSlide(index + 1)}
                                style={{ objectFit: 'cover', height: '100%' }}
                                loading="lazy"
                            />
                        </figure>
                    </div>
                ))}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                type="image"
                slide={lightboxController.slide}
                sources={targetPhotos}
            />

            <style jsx>{`
                .photo-carousel {
                    background-color: var(--color-purple);
                    padding: 5rem;
                    padding-top: 0;
                }
                .thumbnail {
                    background: var(--color-white);
                    padding: 0.5rem;
                    border: 1px solid;
                    height: 100%;
                    position: relative;
                }
                .thumbnail img {
                    height: 100;
                    object-fit: cover;
                }
                .thumbnail:hover {
                    cursor: pointer;
                }
                .header {
                    margin-top: 2rem;
                }
            `}</style>
        </section>
    )
}

export default PhotoCarousel
