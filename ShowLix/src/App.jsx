import React from 'react'
import Nav from './Component/Nav'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Page/Home'
import Movie from './Page/Movie'
import Details from './Page/Details'
import Seat from './Page/Seat'
import Booking from './Page/Booking'
import Fave from './Page/Fave'
import { Toaster } from 'react-hot-toast'
import Footer from './Component/Footer'
import Layout from './Page/Admin/Layout'
import Dashbord from './Page/Admin/Dashbord'
import AddMovie from './Page/Admin/AddMovie'
import ListShow from './Page/Admin/ListShow'
import ListBooking from './Page/Admin/ListBooking'
import { FavoritesProvider } from './Context/FavoritesContext'

const App = () => {
  const isAdmin = useLocation().pathname.startsWith('/admin')
  return (
    <FavoritesProvider>
      <>
        <Toaster />
        {!isAdmin && <Nav />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/movie/:id' element={<Details />} />
          <Route path='/movie/:id/:date' element={<Seat />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/fav' element={<Fave />} />
          <Route path='/admin/*' element={<Layout />}>
            <Route index element={<Dashbord />} />
            <Route path='add-show' element={<AddMovie />} />
            <Route path='list-show' element={<ListShow />} />
            <Route path='list-booking' element={<ListBooking />} />
          </Route>
        </Routes>
        {!isAdmin && <Footer />}
      </>
    </FavoritesProvider>
  )
}

export default App