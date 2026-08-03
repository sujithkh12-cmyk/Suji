import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const DateTime = ({ date, id }) => {
  const [selectedDate, setSelectedDate] = React.useState(null)
  const navigate = useNavigate()

  const handleDateSelect = () => {
    if (!selectedDate) {
      toast.error('Please select a date before booking.', {
        style: { background: '#1f1f1f', color: '#fff', border: '1px solid #333' }
      })
      return
    }
    navigate(`/movie/${id}/${selectedDate}`)
    scrollTo(0, 0)
  }

  const dates = Object.keys(date)

  if (dates.length === 0) {
    return (
      <div id='dateSelect' className='pt-8'>
        <div className='text-center py-12 bg-gray-800/50 border border-gray-700/50 rounded-xl'>
          <i className="ri-calendar-line text-4xl text-gray-500 mb-4" aria-hidden="true" />
          <p className='text-gray-400'>No showtimes available for this movie.</p>
        </div>
      </div>
    )
  }

  return (
    <section id='dateSelect' aria-labelledby="showtimes-heading">
      <div className='bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 md:p-8'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
          <div className='lg:flex-1 min-w-0'>
            <h3 className='text-lg font-semibold text-white mb-4'>Choose Date</h3>
            <div className='relative'>
              {/* Scroll indicators */}
              <div className='absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none' aria-hidden="true" />
              <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none' aria-hidden="true" />

              <div className='overflow-x-auto no-scrollbar pb-2' role="listbox" aria-label="Available dates">
                <div className='flex gap-3 min-w-max px-2' role="group">
                  {dates.map((dateKey) => {
                    const dateObj = new Date(dateKey)
                    const isToday = dateObj.toDateString() === new Date().toDateString()
                    const isSelected = selectedDate === dateKey

                    return (
                      <button
                        key={dateKey}
                        onClick={() => setSelectedDate(dateKey)}
                        className={`flex flex-col items-center gap-1 px-5 py-4 min-w-[80px] rounded-xl transition-all duration-200 flex-shrink-0 ${isSelected
                            ? 'bg-(--primary) text-white shadow-lg shadow-(--primary)/30 ring-2 ring-(--primary)/50'
                            : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-600/50 hover:bg-gray-800'
                          } ${isToday ? 'ring-1 ring-(--primary)/50' : ''}`}
                        role="option"
                        aria-selected={isSelected}
                        aria-label={isToday ? `Today, ${dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}` : dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                      >
                        <span className={`text-xs font-medium ${isToday ? 'text-(--primary)' : 'text-gray-400'}`}>
                          {isToday ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                        </span>
                        <span className='text-2xl font-bold'>{dateObj.getDate()}</span>
                        <span className='text-xs font-medium text-gray-400'>{dateObj.toLocaleDateString('en-US', { month: 'short' })}</span>
                        {isToday && <span className='text-xs text-(--primary) font-medium'>Today</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className='lg:flex-shrink-0 w-full lg:w-auto'>
            <button
              onClick={handleDateSelect}
              disabled={!selectedDate}
              className={`btn-primary-lg btn-full lg:btn-full w-full lg:w-auto px-6 py-4 text-base font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${selectedDate
                  ? 'hover:scale-105 active:scale-[0.98]'
                  : 'bg-gray-700/50 text-gray-500 cursor-not-allowed hover:scale-100 active:scale-100'
                }`}
              aria-disabled={!selectedDate}
            >
              {selectedDate ? (
                <>
                  Book Now for {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </>
              ) : (
                'Select a Date'
              )}
            </button>

            {selectedDate && (
              <p className='text-xs text-gray-400 mt-2 text-center lg:text-right'>
                {dates.length} date{selectedDate ? '' : 's'} available
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DateTime