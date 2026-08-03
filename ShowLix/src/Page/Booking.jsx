import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import Loding from '../Component/Loding'
// import TimeFormat from '../Component/TimeFormat'
import time from '../Library/time'
import dateFormat from '../Library/dateFormat'

const Booking = () => {
    const currency = import.meta.env.VITE_CURRENCY
    const [booking, setBooking] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getBooking = async () => {
        setIsLoading(false)
        setBooking(dummyBookingData)
    }
    useEffect(() => {
        getBooking()
    }, [])

    return !isLoading ? (
        <div className='relative px-4 md:px-8 lg:px-16 xl:px-20 pt-8 lg:pt-16 pb-8 min-h-[80vh]'>
            <h1 className='text-2xl lg:text-3xl font-bold mb-4'>My Bookings</h1>
            <hr className='border-(--primary) mt-3 mb-6' />
            {booking.length === 0 ? (
                <div className='flex flex-col items-center justify-center h-[60vh] text-center px-6'>
                    <div className='w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-6 border border-gray-700/50'>
                        <i className="ri-ticket-line text-4xl text-gray-600" />
                    </div>
                    <h2 className='text-2xl font-bold text-white mb-2'>No Bookings Yet</h2>
                    <p className='text-gray-400 mb-8 max-w-sm'>
                        Your booked tickets will appear here.
                    </p>
                </div>
            ) : (
                <div className='space-y-4 max-w-5xl mx-auto'>
                    {booking.map((item, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4 md:gap-6 bg-gray-900/50 border border-gray-700/50 rounded-2xl p-4 md:p-6'>
                            <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start flex-1 min-w-0'>
                                <img src={item.show.movie.poster_path} className='w-full sm:w-40 md:w-48 aspect-[2/3] object-cover rounded-xl shrink-0' alt={`${item.show.movie.title} poster`} />
                                <div className='flex flex-col gap-2 flex-1 min-w-0'>
                                    <h2 className='text-lg md:text-xl font-semibold text-white truncate'>{item.show.movie.title}</h2>
                                    <p className='text-sm text-gray-400'>{time(item.show.movie.runtime)}</p>
                                    <p className='text-sm text-gray-400'>{dateFormat(item.show.showDateTime)}</p>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row items-center justify-center gap-15 w-full sm:w-auto'>
                                <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-4'>
                                    <p className='text-xl font-semibold text-white'>Amount: {currency}{item.amount.toFixed(2)}</p>
                                    {!item.isPaid && (
                                        <button className='bg-(--primary) ml-3 text-center cursor-pointer w-30 h-10 rounded-full hover:bg-(--dull) active:scale-105 '>
                                            Pay Now
                                        </button>
                                    )}
                                </div>
                                <div className='text-sm text-gray-300 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6'>
                                    <p>
                                        <span className='font-semibold text-gray-400'>Total Tickets:</span> {item.bookedSeats.length}
                                    </p>
                                    <p>
                                        <span className='font-semibold text-gray-400'>Seats:</span> {item.bookedSeats.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    ) : <Loding />
}

export default Booking