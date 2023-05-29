import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'


interface GalleryI {
    images?: String[];
}

const Gallery: FC<GalleryI> = ({ images }) => {

    return (
        <div className='flex flex-wrap gap-4 justify-center pb-9'>
            {images?.map((picture, idx) => {
                return (
                    <div key={idx}>
                        <Image className='rounded-md' src={`${picture}`} width={280} height={280} alt='...' />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery