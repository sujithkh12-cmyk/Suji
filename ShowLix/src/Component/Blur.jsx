import React from 'react'

const Blur = ({ top = "auto", left = "auto", right = "auto", bottom = "auto" }) => {
    return (
        <div className='absloute -z-50 h-58 w-58 aspect-square rounded-full bg-(--primary) blur-3xl'
            style={{ top: top, left: left, right: right, bottom: bottom }}
        >

        </div>
    )
}

export default Blur