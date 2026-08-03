import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets'
import time from '../Library/time'
import DateTime from '../Component/DateTime'
import Card from '../Component/Card'
import Loding from '../Component/Loding'
import { useFavorites } from '../Context/FavoritesContext'

const Details = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()

  const getShow = () => {
    const movie = dummyShowsData.find(movie => movie._id === id)

    if (movie) {
      setShow({
        movie,
        dateTime: dummyDateTimeData
      })
    }
  }

  useEffect(() => {
    getShow()
  }, [id])

  if (!show) {
    return <Loding />
  }

  const movieId = show.movie._id || show.movie.id
  const isFav = isFavorite(movieId)

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    toggleFavorite(show.movie)
  }

  return (
    <div className='px-6 md:px-16 lg:px-40 xl:px-44 section-spacing min-h-screen pt-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12'>
          {/* Poster */}
          <div className='lg:w-2/5 flex-shrink-0'>
            <div className='relative aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src={show.movie.poster_path}
                alt={`${show.movie.title} poster`}
                className='w-full h-full object-cover'
                loading="eager"
              />
              {/* Gradient overlay for ratings */}
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent'>
                <div className='flex items-center gap-3'>
                  <div className='bg-(--primary) text-white px-3 py-1 rounded-full font-bold text-lg'>
                    {show.movie.vote_average.toFixed(1)}
                    <i className="ri-star-fill ml-1 text-yellow-300" />
                  </div>
                  <span className='text-gray-300 text-sm'>{show.movie.vote_count.toLocaleString()} votes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Movie Info */}
          <div className='lg:w-3/5 flex flex-col justify-between'>
            <div>
              <span className='inline-block px-3 py-1 bg-(--primary)/20 text-(--primary) text-sm font-medium rounded-full mb-4'>
                {show.movie.original_language.toUpperCase()}
              </span>

              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
                {show.movie.title}
              </h1>

              {/* Meta Info */}
              <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base mb-6'>
                <span className='flex items-center gap-1'>
                  <i className="ri-time-line" aria-hidden="true" />
                  {time(show.movie.runtime)}
                </span>
                {show.movie.genres.map((genre) => (
                  <span key={genre.id} className='px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm'>
                    {genre.name}
                  </span>
                ))}
                <span className='flex items-center gap-1'>
                  <i className="ri-calendar-line" aria-hidden="true" />
                  {show.movie.release_date.split('-')[0]}
                </span>
              </div>

              {/* Overview */}
              <p className='text-gray-300 leading-relaxed mb-6 max-w-2xl'>
                {show.movie.overview}
              </p>

              {/* Tagline */}
              {show.movie.tagline && (
                <p className='text-(--primary) italic text-lg mb-6 max-w-xl'>
                  "{show.movie.tagline}"
                </p>
              )}

              {/* Action Buttons */}
              <div className='flex flex-wrap gap-4'>
                <button className='btn-primary-lg flex items-center gap-2'>
                  <i className="ri-play-fill" aria-hidden="true" />
                  Watch Trailer
                </button>
                <a
                  href="#dateSelect"
                  className='btn-secondary-lg flex items-center gap-2'
                >
                  <i className="ri-ticket-fill" aria-hidden="true" />
                  Buy Tickets
                </a>
                <button
                  onClick={handleFavoriteClick}
                  className={`btn-secondary-lg flex items-center gap-2 ${isFav ? 'bg-(--primary)/20 border-(--primary)/50 text-(--primary)' : ''}`}
                  aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  aria-pressed={isFav}
                >
                  <i className={isFav ? 'ri-heart-fill' : 'ri-heart-line'} aria-hidden="true" />
                  {isFav ? 'Favorited' : 'Favorite'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <section className='mb-12' aria-labelledby="cast-heading">
          <h2 id="cast-heading" className='text-xl md:text-2xl font-bold text-white mb-6'>Cast & Crew</h2>
          <div className='relative'>
            <div className='overflow-x-auto no-scrollbar pb-4'>
              <div className='flex gap-4 items-start w-max px-4'>
                {show.movie.casts.slice(0, 12).map((castMember, index) => (
                  <article key={index} className='flex flex-col items-center gap-2 text-center flex-shrink-0 w-28'>
                    <div className='relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-gray-700/50 hover:ring-(--primary)/50 transition-colors'>
                      <img
                        src={castMember.profile_path}
                        alt={castMember.name}
                        className='w-full h-full object-cover'
                        loading="lazy"
                      />
                    </div>
                    <p className='text-white font-medium text-sm max-w-[7rem] truncate'>{castMember.name}</p>
                  </article>
                ))}
              </div>
            </div>
            {/* Gradient fade on right */}
            <div className='absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none' aria-hidden="true" />
          </div>
        </section>

        {/* Showtimes Section */}
        <section className='mb-12' aria-labelledby="showtimes-heading">
          <div className='flex items-center justify-between mb-6'>
            <h2 id="showtimes-heading" className='text-xl md:text-2xl font-bold text-white'>Showtimes</h2>
            <span className='text-gray-400 text-sm'>{show.movie.title}</span>
          </div>
          <DateTime date={show.dateTime} id={id} />
        </section>

        {/* Related Movies */}
        <section aria-labelledby="related-heading">
          <div className='flex items-center justify-between mb-6'>
            <h2 id="related-heading" className='text-xl md:text-2xl font-bold text-white'>Related Movies</h2>
            <button
              onClick={() => navigate('/movie')}
              className='text-sm text-(--primary) hover:text-white font-medium flex items-center gap-1'
            >
              View All
              <i className="ri-arrow-right-line" aria-hidden="true" />
            </button>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 stagger-entrance'>
            {dummyShowsData.filter(m => m._id !== id).slice(0, 5).map((movie) => (
              <Card key={movie._id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Details