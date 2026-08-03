import React from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyShowsData } from '../assets/assets'
import Card from './Card'

const Featur = () => {
  const navigate = useNavigate()

  return (
    <section className='px-6 md:px-16 lg:px-40 xl:px-44 section-spacing'>
      {/* Section Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
        <div>
          <h2 className='text-xl md:text-2xl font-bold text-white'>Now Showing</h2>
          <p className='text-gray-500 text-sm mt-1'>Discover the latest movies in theaters near you</p>
        </div>
        <button
          onClick={() => { navigate('/movie'); scrollTo(0, 0); }}
          className='btn-ghost-sm'
        >
          View All
          <i className="ri-arrow-right-line w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Movie Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 stagger-entrance'>
        {dummyShowsData.slice(0, 4).map((movie) => (
          <Card key={movie._id} movie={movie} />
        ))}
      </div>

      {/* Show More Button */}
      <div className='flex justify-center mt-12'>
        <button
          onClick={() => { navigate('/movie'); scrollTo(0, 0); }}
          className='btn-primary-lg'
        >
          Show More Movies
          <i className="ri-arrow-right-line" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default Featur