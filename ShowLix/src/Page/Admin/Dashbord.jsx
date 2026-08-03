import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets'
import Loading from '../../Component/Loding'
import Tital from '../../Component/admin/Tital'
// import { dateFormat } from '../../Library/dateFormat'
import dateFormat from '../../Library/dateFormat'   // no curly braces
const Dashbord = () => {
    const currency = '₹'
    const [dashbord, setDashbord] = useState({
        totalBookings: 0,
        totalRevenue: 0,
        activeShows: [],
        totalUsers: 0
    })
    const [loading, setLoading] = useState(true)
    const dashborCard = [
        { tital: 'Total Bookings', value: dashbord.totalBookings || "0", icon: <i className="ri-line-chart-line"></i> },
        { tital: 'Total Revenue', value: `${currency}${dashbord.totalRevenue || "0"}`, icon: <i class="ri-money-rupee-circle-line"></i> },
        { tital: 'Active Shows', value: dashbord.activeShows.length || "0", icon: <i className="ri-tv-line"></i> },
        { tital: 'Total Users', value: dashbord.totalUsers || "0", icon: <i className="ri-group-fill"></i> }
    ]
    const fetchDashbordData = async () => {
        setDashbord(dummyDashboardData)
        setLoading(false)
    }
    useEffect(() => {
        fetchDashbordData()
    }, [])
    // console.log(show.movie)
    return !loading ? (
        <>
            <Tital text1="Admin" text2="Dashbord" />
            <div className='relative flex flex-wrap gap-4 mt-6'>
                <div className='flex flex-wrap gap-4 w-full'>
                    {dashborCard.map((card, index) => {
                        return (
                            <div key={index} className='flex items-center justify-between px-4 py-3 bg-(--primary)/10
                            border border-(--primary)/20 rounded-md max-w-50 w-full'>
                                <div>
                                    <h1 className='text-xl'>{card.tital}</h1>
                                    <p className='text-xl font-medium mt-1'>{card.value}</p>
                                </div>
                                {/* <card.icon className='text-2xl' /> */}
                                <span className='text-2xl'>{card.icon}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <p className='mt-10 text-lg font-medium'>Active Shows</p>
            <div className='relative flex flex-wrap gap-6 mt-4 max-w-5xl'>
                {dashbord.activeShows.map((show) => (
                    <div key={show._id} className='w-55 rounded-lg overflow-hidden h-full pb-3 bg-(--primary)/10
                    border border-(--primary)/20 hover:-translate-y-1 transition duration-300'>
                        <img src={show.movie.poster_path} className='h-60 w-full object-cover' />
                        <p className='font-bold p-3 truncate'>{show.movie.title}</p>
                        <div className='flex items-center justify-between px-2 gap-10'>
                            <p className='text-lg font-medium'>
                                {currency} {show.showPrice}
                            </p>
                            <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
                                <i className="ri-star-fill text-(--primary) text-xm" />
                                {show.movie.vote_average.toFixed(1)}
                            </p>
                        </div>
                        <p className='px-2 pt-2 text-sm text-gray-500'>{dateFormat(show.showDateTime)}</p>
                    </div>
                ))}
            </div>
        </>
    ) : <Loading />
}

export default Dashbord