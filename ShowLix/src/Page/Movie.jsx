import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Card from '../Component/Card'

const Movie = () => {
  return (
    <div className='px-6 md:px-16 lg:px-40 xl:px-44 section-spacing min-h-[80vh]'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
        <div>
          <h1 className='text-xl md:text-2xl font-bold text-white'>Now Showing</h1>
          <p className='text-gray-500 text-sm mt-1'>Discover the latest movies in theaters near you</p>
        </div>
        <div className='flex items-center gap-3'>
          <select className='px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent appearance-none cursor-pointer'>
            <option value='all'>All Movies</option>
            <option value='action'>Action</option>
            <option value='comedy'>Comedy</option>
            <option value='drama'>Drama</option>
            <option value='horror'>Horror</option>
            <option value='family'>Family</option>
          </select>
          <select className='px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-transparent appearance-none cursor-pointer'>
            <option value='popular'>Sort by Popularity</option>
            <option value='rating'>Sort by Rating</option>
            <option value='date'>Sort by Release Date</option>
            <option value='title'>Sort by Title</option>
          </select>
        </div>
      </div>

      {/* Movie Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 stagger-entrance'>
        {dummyShowsData.map((movie) => (
          <Card key={movie._id} movie={movie} />
        ))}
      </div>

      {/* Empty State */}
      {dummyShowsData.length === 0 && (
        <div className='flex flex-col items-center justify-center h-[60vh] text-center px-6'>
          <div className='w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700/50'>
            <i className="ri-film-line text-4xl text-gray-600" />
          </div>
          <h2 className='text-2xl font-bold text-white mb-2'>No Movies Available</h2>
          <p className='text-gray-400 mb-8 max-w-sm'>
            Check back soon for new releases and showtimes.
          </p>
        </div>
      )}
    </div>
  )
}

export default Movie