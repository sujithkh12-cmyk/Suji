import React, { useState, useEffect } from 'react'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../Component/Loding'
import Tital from '../../Component/admin/Tital'
import { K } from '../../Library/K'
const AddMovie = () => {
    const currency = '₹'
    const [nowPlaying, setNowPlaying] = useState([])
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [dateTime, setDateTime] = useState({})
    const [dateTimeInput, setDateTimeInput] = useState("")
    const [showPrice, setShowPrice] = useState("")

    const fetchPlayingMovie = async () => {
        setNowPlaying(dummyShowsData)
    }
    const handeldateTime = () => {
        if (!dateTimeInput) return
        const [date, time] = dateTimeInput.split('T')
        if (!date || !time) return
        setDateTime((prev) => {
            const times = prev[date] || []
            if (!times.includes(time)) {
                return { ...prev, [date]: [...times, time] }
            }
            return prev
        })
    }
    const handleRemoveTime = (date, time) => {
        setDateTime((prev) => {
            const filteredTimes = prev[date].filter((t) => t !== time)
            if (filteredTimes.length === 0) {
                const { [date]: _, ...rest } = prev
                return rest
            }
            return {
                ...prev,
                [date]: filteredTimes
            }
        })
    }
    useEffect(() => {
        fetchPlayingMovie()
    }, [])

    return nowPlaying.length > 0 ? (
        <>
            <Tital text1="Add" text2="Movie" />
            <p className='mt-10 text-lg font-medium'>Now Playing Movies</p>
            <div className='overflow-x-auto pb-4 no-scrollbar'>
                <div className='group flex flex-wrap gap-4 mt-4 w-max'>
                    {nowPlaying.map((movie) => (
                        <div
                            key={movie.id}
                            className={`w-48 rounded-lg cursor-pointer hover:scale-105 active:opacity-40 transition duration-300 ${selectedMovie === movie ? 'border-2 border-(--primary)' : ''}`}
                            onClick={() => setSelectedMovie(movie)}
                        >
                            <div className='relative rounded-lg overflow-hidden'>
                                <img src={movie.poster_path} className='w-full object-cover brightness-95' />

                                {/* rating + votes bar */}
                                <div className='text-sm w-full flex items-center justify-between p-2 bg-black/70 absolute bottom-0 left-0'>
                                    <p className='flex items-center gap-1 text-gray-400'>
                                        <i className="ri-star-fill w-4 h-4 text-(--primary) fill-(--primary)" />
                                        {movie.vote_average.toFixed(1)}
                                    </p>
                                    <p className='text-gray-300'>
                                        {K(movie.vote_count)} Votes
                                    </p>
                                </div>
                            </div>

                            {/* title + release date, below poster */}
                            <div className='p-2 flex flex-col gap-1'>
                                <p className='font-medium truncate'>{movie.title}</p>
                                <p className='text-gray-400 text-sm'>{movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* for price */}
            <div className='mt-10'>
                <label className='block text-xl font-medium mb-2'>Show Price</label>
                <div className='inline-flex items-center gap-2 border border-gray-600 rounded-lg px-3 py-2'>
                    <p>{currency}</p>
                    <input
                        min={0}
                        type="number"
                        value={showPrice}
                        onChange={(e) => setShowPrice(e.target.value)}
                        placeholder="Enter show price"
                        className="outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent"
                    />
                </div>
            </div>
            {/* for date */}
            <div className='mt-6'>
                <label className='block text-xl font-medium mb-2'>Select Date And Time</label>
                <div className='inline-flex gap-5 border border-gray-600 p-2 pl-2 rounded-lg'>
                    <input
                        type="datetime-local"
                        value={dateTimeInput}
                        onChange={(e) => setDateTimeInput(e.target.value)}
                        className='outline-none rounded-md'
                    />
                    <button onClick={handeldateTime}
                        className='bg-(--primary)/80 text-white px-3 py-2 text-sm rounded-full hover:bg-(--primary) cursor-pointer'>Add Time</button>
                </div>
            </div>
            {/* {selected time} */}
            {Object.keys(dateTime).length > 0 && (
                <div className='mt-6'>
                    <h2 className='mb-2'>Selected Date-Time</h2>
                    <ul className='space-y-3'>
                        {Object.entries(dateTime).map(([date, times]) => (
                            <li key={date}>
                                <div className='font-medium gap-4'>{date}</div>
                                <div className='flex flex-wrap gap-2 mt-1  text-sm text-gray-400'>
                                    {times.map((time) => (
                                        <div key={time}
                                            className='border border-(--primary) px-2 py-1 flex items-center rounded'>
                                            <span>{time}</span>
                                            <i className="ri-delete-bin-line ml-2 text-red-500 hover:text-red-600 text-2xl cursor-pointer " onClick={() => handleRemoveTime(date, time)} />
                                        </div>
                                    ))}

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <button className='bg-(--primary) text-white px-8 py-2 mt-6 rounded hover:bg-(--primary)/90 transition-all cursor-pointer'>Add Show</button>
        </>
    ) : <Loading />
}


export default AddMovie