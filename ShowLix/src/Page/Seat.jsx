import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { assets, dummyDateTimeData, dummyShowsData } from '../assets/assets'
import Loding from '../Component/Loding'
import TimeFormat from '../Library/TimeFormat'
import Blur from '../Component/Blur'
const Seat = () => {
    const { id, date } = useParams()
    const [selectedSeats, setSelectedSeats] = React.useState([])
    const [selectedTime, setSelectedTime] = React.useState(null)
    const [show, setShow] = React.useState(null)
    const navigate = useNavigate()
    const group = [['A', 'B'], ['C', 'D'], ['E', 'F'], ['G', 'H'], ['I', 'J']]
    const getShow = async () => {
        const show = dummyShowsData.find(
            (show) => show._id === id
        )
        if (show) {
            setShow({
                movie: show,
                dateTime: dummyDateTimeData
            })
        }
    }

    const paymentHandler = () => {
        if (!selectedTime || selectedSeats.length === 0) {
            return alert("Please select a time and seats before proceeding to payment.");
        }
        else {
            navigate('/booking', { state: { show, selectedSeats, selectedTime, date } })
        }
    }

    const handleSeatClick = (seatId) => {
        if (!selectedTime) {
            return alert("Please select a time before selecting seats.");
        }
        if (!selectedSeats.includes(seatId) && selectedSeats.length >= 5) {
            return alert("You can select a maximum of 5 seats.");
        } else {
            // setSelectedSeats(prevSelectedSeats => { prevSelectedSeats.includes(seatId) ? prevSelectedSeats.filter(seat => seat !== seatId) : [...prevSelectedSeats, seatId] })
            setSelectedSeats(prevSelectedSeats =>
                prevSelectedSeats.includes(seatId)
                    ? prevSelectedSeats.filter(seat => seat !== seatId)
                    : [...prevSelectedSeats, seatId]
            )
        }
    }

    // const seats = (row, count = 9) => {
    //     return (
    //         <div key={row} className='flex gap-3 mt-3'>
    //             <div className='flex flex-wrap items-center justify-center item-center gap-3'>
    //                 {Array.from({ length: count }, (_, index) => {
    //                     const seatId = `${row}${index + 1}`;
    //                     return (
    //                         <button key={seatId} onClick={() => handleSeatClick(seatId)} className={`w-8 h-8 rounded border border-(--primary)/60 cursor-pointer ${selectedSeats.includes(seatId) && 'bg-(--primary) text-white'}`}>
    //                             {seatId}
    //                         </button>
    //                     )
    //                 })}
    //             </div>

    //         </div>
    //     )
    // }
    const seats = (row, count = 9) => (

        <div key={row} className="flex items-center gap-3">
            <span className="w-8 text-center font-bold">{row}</span>

            {Array.from({ length: count }, (_, index) => {
                const seatId = `${row}${index + 1}`;

                return (
                    <button
                        key={seatId}
                        onClick={() => handleSeatClick(seatId)}
                        className={`w-10 h-10 rounded border hover:bg-(--primary) transition duration-200 hover:scale-105 border-(--primary)/60 cursor-pointer 
                            ${selectedSeats.includes(seatId) && 'bg-(--primary) text-white'}`}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );


    useEffect(() => {
        getShow()
    }, [id])

    return show ? (
        <div className='flex flex-col mt-7 md:flex-row px-5 md:px-16 lg:px-40 py-30'>
            {/* {time} */}
            <div className='w-50 bg-(--primary)/10 border border-(--primary)/20 rounded-lg py-10 h-max md:sticky md:top-30'>
                <p className='text-lg font-semibold px-6'>Available Times</p><hr className='border-(--primary)/20 mt-3' />
                <div className='mt-5 space-y-1'>
                    {show.dateTime[date].map((item) => (
                        <div key={item.time} className={`flex items-center gap-2 px-6 py-3 w-max rounded-r-md cursor-pointer transition duration-300 
                        ${selectedTime?.time === item.time ? 'bg-(--primary) text-white' : ' hover:bg-gray-900'}`}
                            onClick={() => setSelectedTime(item)}>
                            <i className="ri-time-fill text-lg"></i>
                            <p>{TimeFormat(item.time)}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* {seat layout} */}
            <div className='relative flex-1 flex-col flex items-center max-md:mt-10 md:ml-10'>
                <h1 className='text-2xl font-semibold mb-4'>Select your seat</h1>
                <img src={assets.screenImage} alt="screen" />
                <p className='text-gray-300 text-sm mb-6'>SCREEN SIDE</p>
                <div className='flex flex-col  items-center gap-3 mt-10 text-xs text-gray-300'>

                    <div className='flex flex-col gap-3 mb-6'>
                        {
                            group[0].map((row) => (
                                seats(row)
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-10">

                        <div className="flex gap-16">
                            <div className="flex flex-col gap-3">
                                {['C', 'D'].map(row => seats(row))}
                            </div>

                            <div className="flex flex-col gap-3">
                                {['E', 'F'].map(row => seats(row))}
                            </div>
                        </div>

                        <div className="flex gap-16">
                            <div className="flex flex-col gap-3">
                                {['G', 'H'].map(row => seats(row))}
                            </div>

                            <div className="flex flex-col gap-3">
                                {['I', 'J'].map(row => seats(row))}
                            </div>
                        </div>

                    </div>
                </div>
                <button
                    className='flex items-center mt-20 gap-2 px-8 font-semibold py-2 cursor-pointer bg-(--primary) hover:bg-(--dull)
                 text-white transition duration-300 rounded-full active:scale-105'
                    onClick={paymentHandler}>
                    For payment
                    <i className="ri-arrow-right-long-fill text-2xl"></i>
                </button>
            </div>

        </div>
    ) : (
        <Loding />
    )
}

export default Seat