import React from 'react'

const Tital = ({ text1, text2 }) => {
    return (
        <div className='gap-3'>
            <h1 className='font-bold text-2xl'>
                {text1} <span className='underline text-(--primary)'> {text2}</span>
            </h1>
        </div>
    )
}

export default Tital