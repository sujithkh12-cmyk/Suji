import React, { useEffect, useState } from 'react'
import Loading from '../../Component/Loding'
import Tital from '../../Component/admin/Tital'
import { dummyShowsData } from '../../assets/assets'
import dateFormat from '../../Library/dateFormat'
const ListShow = () => {
    const currency = '₹'
    const [shows, setShow] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllShows = async () => {
        try {
            setShow([{
                movie: dummyShowsData[0],
                showDateTime: '2025-06-30T02:30:00.000Z',
                showPrice: 200,
                occupiedSeats: {
                    A1: "user_1",
                    B1: "user_2",
                    C1: "user_3"
                }
            }])
            setLoading(false)
        }
        catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getAllShows()
    }, [])
    return !loading ? (
        <>
            <Tital text1='List of' text2='Shows' />
            <div className='max-w-4xl mt-6 overflow-x-auto'>
                <table className='w-full border-collapse rounded-md overflow-hidden'>
                    <thead>
                        <tr className='bg-(--primary)/20 text-left text-white'>
                            <th className='p-2 font-medium pl-5'>Movie Name</th>
                            <th className='p-2 font-medium'>Show Time</th>
                            <th className='p-2 font-medium'>Total Booking</th>
                            <th className='p-2 font-medium'>Earnings</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light'>
                        {shows.map((show, index) => (
                            <tr key={index} className='border-b border-(--primary)/10 bg-(--primary)/5 even:bg-(--primary)/10'>
                                <td className='p-2 font-medium pl-5'>{show.movie.title}</td>
                                <td className='p-2'>{dateFormat(show.showDateTime)}</td>
                                <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                                <td className='p-2'>{currency}{Object.keys(show.occupiedSeats).length * show.showPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    ) : <Loading />
}

export default ListShow