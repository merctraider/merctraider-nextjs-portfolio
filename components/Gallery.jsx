import React from 'react'


export default function Gallery({ images, cols }) {


    return (

        <div className={`grid grid-cols-1 gap-4 cols-${cols}`}>

            {/* Iterate through the images array and render an image for each item */}
            {images.map((image) => (
                <img src={image.src} alt={image.alt} className="rounded-lg cursor-pointer hover:scale-105" data-lightbox={image.alt} />
            ))}

        </div>

    )
}
