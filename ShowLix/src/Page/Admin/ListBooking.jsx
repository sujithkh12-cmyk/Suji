import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets'
import Loding from '../../Component/Loding'
import Tital from '../../Component/admin/Tital'
import dateFormat from '../../Library/dateFormat'

const ListBooking = () => {
    const currency = '₹'
    const [booking, setBooking] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllBooking = async () => {
        setBooking(dummyBookingData)
        setLoading(false)
    }

    useEffect(() => {
        getAllBooking()
    }, [])

    return !loading ? (
        <>
            <Tital text1='List of' text2='Booking' />
            <div className='max-w-4xl mt-6 overflow-x-auto'>
                <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
                    <thead>
                        <tr className='bg-(--primary)/20 text-left text-white'>
                            <th className='p-2 font-medium pl-5'>User Name</th>
                            <th className='p-2 font-medium'>Movie Name</th>
                            <th className='p-2 font-medium'>Show Time</th>
                            <th className='p-2 font-medium'>Seats</th>
                            <th className='p-2 font-medium'>Amount</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm font-light'>
                        {booking.map((item, index) => (
                            <tr key={item} className='border-b border-(--primary)/10 bg-(--primary)/5 even:bg-(--primary)/10'>
                                <td className='py-2 px-4'>{item.user.name}</td>
                                <td className='py-2 px-4'>{item.show.movie.title}</td>
                                <td className='py-2 px-4'>{dateFormat(item.show.showDateTime)}</td>
                                <td className='py-2 px-4'>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(',')}</td>
                                <td className='py-2 px-4'>{currency} {item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    ) : <Loding />
}

export default ListBooking