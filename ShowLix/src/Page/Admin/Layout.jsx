import React from 'react'
import Navebar from '../../Component/admin/Navebar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Component/admin/Sidebar'
const Layout = () => {
    return (
        <>
            <Navebar />
            <div className='flex '>
                <Sidebar />
                <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout