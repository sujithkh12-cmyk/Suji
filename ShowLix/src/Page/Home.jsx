import React from 'react'
import Hero from '../Component/Hero'
import Featur from '../Component/Featur'
import Trailer from '../Component/Trailer'

const Home = () => {
    return (
        <div className='flex flex-col justify-between gap-5 m-10'>
            <Hero />
            <Featur />
            <Trailer />
        </div>
    )
}

export default Home