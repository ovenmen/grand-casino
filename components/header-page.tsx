import React, { FC } from 'react'
import Image from 'next/image'

interface IHeaderPageProps {
    header: string,
    headerImage: string
}

const HeaderPage: FC<IHeaderPageProps> = ({
    header,
    headerImage
}) => (
    <div className="header-page">
        <div className="grid-x">
            <div className="cell small-12 medium-12 large-12">
                <Image
                    src={`/images/${headerImage}`}
                    className="header-page-image"
                    alt={headerImage}
                    layout="fill"
                    objectFit="cover"
                />
                <h1 className="text-center color-white font-bold">{header}</h1>
            </div>
        </div>

        <style jsx>{`
            .header-page {
                position: relative;
                padding: 2.5vw;
            }
            .header-page-image {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: -1;
                object-fit: cover;
            }
            h1 {
                position: relative;
                z-index: 1000;
            }
        `}</style>
    </div>
)

export default HeaderPage