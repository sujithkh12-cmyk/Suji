import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className='relative min-h-screen flex items-center justify-center px-4 md:px-16 lg:px-36 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-cover bg-center opacity-50 bg-gradient-to-r from-black/90 via-black/70 to-black/40'>
        {/* <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40' /> */}
        <img src={assets.background} alt="BackGround" />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-5xl w-full animate-fade-in'>
        {/* Marvel Logo */}
        <div className='mb-6'>
          <img
            src={assets.marvelLogo}
            alt="Marvel Studios"
            className='max-h-12 lg:h-14 filter drop-shadow-lg'
          />
        </div>

        {/* Movie Title */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white'>
          Guardians <br />
          <span className='text-gradient'>of the Galaxy</span>
        </h1>

        {/* Meta Info */}
        <div className='flex flex-wrap text-center items-center gap-4 mb-6 text-gray-300 text-sm md:text-base'>
          <span className='px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50'>
            Action
          </span>
          <span className='px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50'>
            Adventure
          </span>
          <span className='px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50'>
            Sci-Fi
          </span>
          <div className='flex items-center gap-2 ml-2'>
            <i className="ri-calendar-schedule-line w-4 h-4" aria-hidden="true" />
            <span>2018</span>
          </div>
          <div className='flex items-center gap-2'>
            <i className="ri-time-line w-4 h-4" aria-hidden="true" />
            <span>2h 8m</span>
          </div>
          <div className='flex items-center gap-2 text-(--primary) font-medium'>
            <i className="ri-star-fill w-4 h-4" aria-hidden="true" />
            <span>8.0</span>
          </div>
        </div>

        {/* Description */}
        <p className='text-gray-300 max-w-2xl mb-8 leading-relaxed text-base md:text-lg'>
          Guardians of the Galaxy follows a group of unlikely heroes led by Star-Lord as they travel across the galaxy to protect a powerful artifact. Along the way, they form strong friendships, face dangerous enemies, and learn the value of teamwork while saving the universe from destruction.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-wrap gap-4'>
          <button
            onClick={() => navigate('/movie')}
            className='btn-primary-lg flex items-center gap-2'
          >
            Explore Movies
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </button>
          <button className='btn-secondary-lg flex items-center gap-2'>
            <i className="ri-play-fill" aria-hidden="true" />
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <i className="ri-arrow-down-s-line text-3xl text-gray-500 hover:text-gray-300 transition-colors" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero