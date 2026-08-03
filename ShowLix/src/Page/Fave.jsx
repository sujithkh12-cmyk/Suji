// import React from 'react'
// import { useFavorites } from '../Context/FavoritesContext'
// import Card from '../Component/Card'
// import { Link } from 'react-router-dom'

// const Fave = () => {
//   const { favorites, isLoaded, count, clearFavorites } = useFavorites()

//   if (!isLoaded) {
//     return (
//       <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] flex items-center justify-center'>
//         <div className='flex flex-col items-center gap-4'>
//           <div className='w-12 h-12 border-4 border-(--primary) border-t-transparent rounded-full animate-spin' />
//           <p className='text-gray-400'>Loading your favorites...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
//       {/* Header Section */}
//       <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-gray-700/50'>
//         <div>
//           <h1 className='text-2xl md:text-3xl font-bold text-white'>Your Favorites</h1>
//           <p className='text-gray-400 mt-1'>{count} movie{count !== 1 ? 's' : ''} saved</p>
//         </div>
//         {count > 0 && (
//           <button
//             onClick={clearFavorites}
//             className='px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 flex items-center gap-2 border border-gray-600/50'
//           >
//             <i className="ri-delete-bin-line" />
//             Clear All
//           </button>
//         )}
//       </div>

//       {/* Favorites Grid */}
//       {count > 0 ? (
//         <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
//           {favorites.map((movie) => (
//             <Card key={movie._id || movie.id} movie={movie} variant="default" />
//           ))}
//         </div>
//       ) : (
//         {/* Empty State */}
//         <div className='flex flex-col items-center justify-center h-[60vh] text-center px-6'>
//           <div className='w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700/50'>
//             <i className="ri-heart-line text-4xl text-gray-600" />
//           </div>
//           <h2 className='text-2xl font-bold text-white mb-2'>No Favorites Yet</h2>
//           <p className='text-gray-400 mb-8 max-w-sm'>
//             Start exploring movies and click the heart icon to save your favorites for later.
//           </p>
//           <Link
//             to="/movie"
//             className='px-6 py-3 bg-(--primary) hover:bg-(--dull) text-white font-medium rounded-full transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-gray-900'
//           >
//             Browse Movies
//             <i className="ri-arrow-right-line ml-2" />
//           </Link>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Fave
import React from 'react'
import { useFavorites } from '../Context/FavoritesContext'
import Card from '../Component/Card'
import { Link } from 'react-router-dom'

const Fave = () => {
    const {
        favorites = [],
        isLoaded,
        count,
        clearFavorites
    } = useFavorites()

    if (!isLoaded) {
        return (
            <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh] flex items-center justify-center'>
                <div className='flex flex-col items-center gap-4'>
                    <div className='w-12 h-12 border-4 border-(--primary) border-t-transparent rounded-full animate-spin' />
                    <p className='text-gray-400'>Loading your favorites...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

            {/* Header */}
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b border-gray-700/50'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-white'>
                        Your Favorites
                    </h1>
                    <p className='text-gray-400 mt-1'>
                        {count} movie{count !== 1 ? 's' : ''} saved
                    </p>
                </div>

                {count > 0 && (
                    <button
                        onClick={clearFavorites}
                        className='px-4 py-2 text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 flex items-center gap-2 border border-gray-600/50'
                    >
                        <i className='ri-delete-bin-line'></i>
                        Clear All
                    </button>
                )}
            </div>

            {count > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6'>
                    {favorites.map((movie) => (
                        <Card
                            key={movie._id || movie.id}
                            movie={movie}
                            variant='default'
                        />
                    ))}
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center h-[60vh] text-center px-6'>
                    <div className='w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700/50'>
                        <i className='ri-heart-line text-4xl text-gray-600'></i>
                    </div>

                    <h2 className='text-2xl font-bold text-white mb-2'>
                        No Favorites Yet
                    </h2>

                    <p className='text-gray-400 mb-8 max-w-sm'>
                        Start exploring movies and click the heart icon to save your favorites for later.
                    </p>

                    <Link
                        to='/movie'
                        className='btn-primary-lg'
                    >
                        Browse Movies
                        <i className='ri-arrow-right-line ml-2'></i>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Fave