import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../Context/FavoritesContext'
import time from '../Library/time'

const Card = ({ movie, variant = 'default' }) => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const movieId = movie._id || movie.id
  const isFav = isFavorite(movieId)

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    toggleFavorite(movie)
  }

  const handleCardClick = () => {
    navigate(`/movie/${movieId}`)
    scrollTo(0, 0)
  }

  // Variant-based styling
  const variantStyles = {
    default: 'w-full',
    compact: 'w-full',
    featured: 'w-80 md:w-96'
  }

  const imageHeight = {
    default: 'h-52',
    compact: 'h-40',
    featured: 'h-64 md:h-72'
  }

  return (
    <article className={`flex flex-col justify-between gap-7 p-3 bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative overflow-hidden border border-gray-700/50 hover:border-gray-600/50 ${variantStyles[variant]}`}>
      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className={`absolute top-2 right-2 z-10 p-2 rounded-full bg-black/60 backdrop-blur-sm text-gray-300 hover:text-(--primary) hover:bg-black/80 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-gray-900 ${isFav ? 'text-(--primary) fill-(--primary) animate-heart-beat' : ''}`}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
        aria-pressed={isFav}
      >
        <i className={`ri-heart-line text-xl ${isFav ? 'ri-heart-fill' : ''}`} />
      </button>

      {/* Movie Poster */}
      <div className='relative overflow-hidden rounded-xl' onClick={handleCardClick}>
        <img
          src={movie.backdrop_path || movie.poster_path}
          alt={`${movie.title} poster`}
          className={`${imageHeight[variant]} w-full object-cover transition-transform duration-500 group-hover:scale-105`}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        {movie.vote_average && (
          <div className='absolute top-2 left-2 bg-(--primary)/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg'>
            {movie.vote_average.toFixed(1)}
            <i className="ri-star-fill ml-1 text-yellow-300" />
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className='pt-2'>
        <h3 className='font-semibold truncate text-white group-hover:text-(--primary) transition-colors duration-200' title={movie.title}>
          {movie.title}
        </h3>
        <p className='text-xs text-gray-400 mt-1 truncate'>
          {new Date(movie.release_date).getFullYear()} &middot; {movie.genres?.slice(0, 2).map(g => g.name).join(' &middot; ') || 'N/A'} &middot; {time(movie.runtime)}
        </p>
      </div>

      {/* Action Buttons */}
      <div className='flex items-center justify-between mt-4 pt-3 border-t border-gray-700/50'>
        <button
          onClick={handleCardClick}
          className='btn-primary-sm flex-1 min-w-0'
        >
          Buy Tickets
        </button>
      </div>
    </article>
  )
}

export default Card