import React from 'react'
import { Link } from 'react-router-dom'
// import assets from '../../assets/assets'
import SL from '../../assets/Micon.png'


const Navebar = () => {
    return (
        <div className='flex justify-between items-center px-6 py-2 bg-[#111111] md:px-10 h-16 border-b border-gray-300/20'>
            <Link to='/'>
                <img src={SL} alt="w-36 h-auto" className='w-46 h-auto' />
            </Link>
        </div>
    )
}

export default Navebar