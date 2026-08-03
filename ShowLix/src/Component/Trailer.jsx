import React, { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import ReactPlayer from 'react-player'

const Trailer = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

  return (
    <section className='px-6 md:px-16 lg:px-40 xl:px-44 section-spacing'>
      {/* Section Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-white'>Trailers</h2>
          <p className='text-gray-500 text-sm mt-1'>Watch the latest movie trailers</p>
        </div>
      </div>

      {/* Main Video Player */}
      <div className='relative mb-8 rounded-xl overflow-hidden bg-gray-900'>
        <div className='aspect-video w-full'>
          <ReactPlayer
            src={currentTrailer.videoUrl}
            controls={true}
            width='100%'
            height='100%'
            className='rounded-xl'
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0,
                  rel: 0,
                  modestbranding: 1
                }
              }
            }}
          />
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {dummyTrailers.map((trailer, index) => (
          <button
            key={trailer.image}
            onClick={() => setCurrentTrailer(trailer)}
            className={`relative aspect-video rounded-xl overflow-hidden transition-all duration-300 group ${
              currentTrailer.image === trailer.image
                ? 'ring-2 ring-(--primary) scale-105 z-10'
                : 'hover:scale-105 hover:ring-1 hover:ring-gray-600/50'
            }`}
            aria-label={`Watch trailer ${index + 1}`}
            aria-current={currentTrailer.image === trailer.image ? 'true' : 'false'}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1} thumbnail`}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              loading="lazy"
            />
            {/* Play icon overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center'>
              <i className="ri-play-circle-fill text-5xl md:text-7xl text-white/90 hover:text-white transition-colors drop-shadow-lg" aria-hidden="true" />
            </div>
            {/* Active indicator */}
            {currentTrailer.image === trailer.image && (
              <div className='absolute top-2 right-2 bg-(--primary) text-white text-xs px-2 py-1 rounded-full font-medium'>
                Now Playing
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Trailer