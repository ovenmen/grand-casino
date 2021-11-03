import React, { FC } from 'react'
import Image from 'next/image'

const Loader: FC = () => (
    <div className="loader text-center">
        <Image
            src={'/images/loader.svg'}
            alt="loader.svg"
            width="200"
            height="200"
        />
    </div>
)

export default Loader