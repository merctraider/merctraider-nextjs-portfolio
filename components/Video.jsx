import React from 'react'

export default function Video({src}) {
    return (
        <iframe className='w-full' width="1280" height="720" src={`https://www.youtube.com/embed/${src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
