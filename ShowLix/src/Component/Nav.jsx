import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { useClerk, UserButton, useUser } from '@clerk/react'
import SL from '../assets/Micon.png'
const Nav = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setIsOpened(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path) => {
    navigate(path)
    scrollTo(0, 0)
    setIsOpened(false)
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/movie', label: 'Movies' },
    { path: '/', label: 'Theaters' },
    { path: '/', label: 'Releases' },
    { path: '/fav', label: 'Favorites' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' : 'bg-transparent'}`}>
      <nav className='flex items-center justify-between px-6 md:px-16 lg:px-40 xl:px-44 h-16 md:h-20' aria-label="Main navigation">

        {/* Logo */}
        <Link
          to='/'
          onClick={() => { scrollTo(0, 0); setIsOpened(false) }}
          className='flex-shrink-0 flex items-center w-38 h-auto'
          aria-label="ShowLex Home"
        >
          <img src={SL} />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6 flex-1 justify-center'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`relative px-3 py-2 text-xl font-medium hover:scale-105 hover:text-(--primary) transition-all duration-200 rounded-lg ${location.pathname === link.path
                ? ''
                : ''
                }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-(--primary) rounded-full' aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className='flex items-center gap-4 flex-shrink-0'>

          {/* Search Button */}
          <button
            className='hidden md:flex p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-gray-800/50'
            aria-label="Search movies"
          >
            <i className="ri-search-line text-xl" aria-hidden="true" />
          </button>

          {/* Auth */}
          {!user ? (
            <button
              onClick={openSignIn}
              className='hidden md:inline-flex items-center justify-center gap-2 px-5 py-2 bg-(--primary) hover:bg-(--dull) text-white font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-(--primary) focus:ring-offset-2 focus:ring-offset-gray-900'
            >
              {/* <i className="ri-user-line w-3 h-3 " aria-hidden="true" /> */}
              Login
            </button>
          ) : (
            <UserButton
              afterSignOutUrl="/"
              className='relative'
            >
              <UserButton.Trigger className='flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-800/50 transition-colors'>
                <UserButton.UserIdentity className='flex items-center gap-2'>
                  <UserButton.Avatar className='w-8 h-8' />
                  <UserButton.UserName className='hidden md:block text-sm font-medium' />
                </UserButton.UserIdentity>
                <i className="ri-arrow-down-s-line w-4 h-4 text-gray-400" aria-hidden="true" />
              </UserButton.Trigger>
              <UserButton.Menu className='rounded-xl border border-gray-700/50 bg-gray-900 shadow-xl'>
                <UserButton.MenuItems>
                  <UserButton.Action
                    label='My Bookings'
                    labelIcon={<i className="ri-coupon-3-fill w-5 h-5" aria-hidden="true" />}
                    onClick={() => navigate('/booking')}
                    className='px-4 py-2 text-gray-100 hover:bg-gray-800/50'
                  />
                  <UserButton.Action
                    label='Favorites'
                    labelIcon={<i className="ri-heart-fill w-5 h-5 text-(--primary)" aria-hidden="true" />}
                    onClick={() => navigate('/fav')}
                    className='px-4 py-2 text-gray-100 hover:bg-gray-800/50'
                  />
                  <UserButton.Action
                    label='Sign Out'
                    labelIcon={<i className="ri-logout-box-r-line w-5 h-5" aria-hidden="true" />}
                    className='px-4 py-2 text-gray-100 hover:bg-gray-800/50'
                  />
                </UserButton.MenuItems>
              </UserButton.Menu>
            </UserButton>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpened(!isOpened)}
            className='md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50'
            aria-label={isOpened ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpened}
            aria-controls="mobile-menu"
          >
            <i className={`text-2xl ${isOpened ? 'ri-close-large-line' : 'ri-menu-2-line'}`} aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/98 backdrop-blur-xl border-l border-gray-800/50 flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out z-50 ${isOpened ? 'translate-x-0' : 'translate-x-full'}`}
        role="navigation"
        aria-label="Mobile menu"
      >
        <div className='flex items-center justify-between p-4 border-b border-gray-800/50'>
          <Link
            to='/'
            onClick={() => { scrollTo(0, 0); setIsOpened(false) }}
            className='flex items-center'
            aria-label="ShowLex Home"
          >
            <img src={SL} />
          </Link>
          <button
            onClick={() => setIsOpened(false)}
            className='p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50'
            aria-label="Close menu"
          >
            <i className="ri-close-large-line text-2xl" aria-hidden="true" />
          </button>
        </div>

        <nav className='flex-1 px-4 py-6 space-y-2' aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${location.pathname === link.path
                ? 'bg-(--primary)/20 text-(--primary) border border-(--primary)/30'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              <i className={`w-6 h-6 ${link.path === '/' ? 'ri-home-line' :
                link.path === '/movie' ? 'ri-film-line' :
                  link.path === '/fav' ? 'ri-heart-line' :
                    'ri-map-pin-line'
                }`} aria-hidden="true" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Auth */}
        <div className='p-4 border-t border-gray-800/50 space-y-3'>
          {!user ? (
            <button
              onClick={openSignIn}
              className='w-full py-3 bg-(--primary) hover:bg-(--dull) text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2'
            >
              <i className="ri-user-line" aria-hidden="true" />
              Login / Sign Up
            </button>
          ) : (
            <div className='space-y-2'>
              <button
                onClick={() => { navigate('/booking'); setIsOpened(false) }}
                className='w-full py-3 text-left px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors flex items-center gap-3'
              >
                <i className="ri-coupon-3-fill w-6 h-6 text-(--primary)" aria-hidden="true" />
                My Bookings
              </button>
              <button
                onClick={() => { navigate('/fav'); setIsOpened(false) }}
                className='w-full py-3 text-left px-4 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors flex items-center gap-3'
              >
                <i className="ri-heart-fill w-6 h-6 text-(--primary)" aria-hidden="true" />
                Favorites
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpened && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40'
          onClick={() => setIsOpened(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Nav