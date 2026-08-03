// import React from 'react'
// import { assets } from '../../assets/assets'
// import { NavLink } from 'react-router-dom'
// const Sidebar = () => {
//     const user = {
//         FirstName: "Sujith",
//         LastName: "Acharya",
//         url: assets.profile,
//     }
//     const Links = [
//         { name: 'Dashbord', path: '/admin', icon: <i className="ri-layout-5-line"></i> },
//         { name: 'Add Show', path: '/admin/add-show', icon: <i className="ri-add-box-line"></i> },
//         { name: 'List Show', path: '/admin/list-show', icon: <i className="ri-menu-2-line"></i> },
//         { name: 'List Booking', path: '/admin/list-booking', icon: <i className="ri-list-check"></i> }
//     ]


//     return (
//         <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60
//             w-full border-r border-gray-300/20 text-sm'>
//             <img src={user.url} className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto' />
//             <p className='mt-2 text-base max-md:hidden'>{user.FirstName} {user.LastName}</p>
//             <div className='w-full'>
//                 {Links.map((link) => (
//                     <NavLink
//                         key={link.name}
//                         to={link.path}
//                         end={link.path === '/admin'}
//                         className={({ isActive }) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5
//                         min-md:pl-10 first:mt-6 text-gray-400 ${isActive && 'bg-(--primary)/15 text-(--primary) group'}`}
//                     >
//                         {({ isActive }) => (
//                             <>
//                                 {link.icon}
//                                 <p className='max-md:hidden'>
//                                     {link.name}
//                                 </p>
//                                 <span className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive && 'bg-(--primary)'}`} />
//                             </>
//                         )}
//                     </NavLink>
//                 ))}
//             </div>
//         </div >
//     )
// }

// export default Sidebar
import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const user = {
        FirstName: "Sujith",
        LastName: "Acharya",
        url: assets.profile,
    }

    const Links = [
        { name: 'Dashbord', path: '/admin', icon: <i className="ri-layout-5-line"></i> },
        { name: 'Add Show', path: '/admin/add-show', icon: <i className="ri-add-box-line"></i> },
        { name: 'List Show', path: '/admin/list-show', icon: <i className="ri-menu-2-line"></i> },
        { name: 'List Booking', path: '/admin/list-booking', icon: <i className="ri-list-check"></i> }
    ]

    return (
        <div className='h-[calc(100vh-64px)] flex flex-col items-center pt-8 max-w-13 md:max-w-60
            w-full border-r border-gray-300/20 text-sm'>

            <img src={user.url} className='h-9 md:h-14 w-9 md:w-14 rounded-full object-cover' />
            <p className='mt-2 text-base max-md:hidden text-center'>{user.FirstName} {user.LastName}</p>

            <div className='w-full'>
                {Links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        end={link.path === '/admin'}
                        className={({ isActive }) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5
                        min-md:pl-10 first:mt-6 text-gray-400 ${isActive && 'bg-(--primary)/15 text-(--primary) group'}`}
                    >
                        {({ isActive }) => (
                            <>
                                {link.icon}
                                <p className='max-md:hidden'>
                                    {link.name}
                                </p>
                                <span className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive && 'bg-(--primary)'}`} />
                            </>
                        )}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Sidebar