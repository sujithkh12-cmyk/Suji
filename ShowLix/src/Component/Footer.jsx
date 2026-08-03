import React from 'react'
import { assets } from '../assets/assets'
import SL from '../assets/Micon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Refund Policy', href: '/refund' },
      { label: 'Accessibility', href: '/accessibility' }
    ],
    legal: [
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Licensing', href: '/licensing' },
      { label: 'Careers', href: '/careers' }
    ]
  }

  const socialLinks = [
    { icon: 'ri-facebook-fill', href: '#', label: 'Facebook' },
    { icon: 'ri-twitter-fill', href: '#', label: 'Twitter' },
    { icon: 'ri-instagram-fill', href: '#', label: 'Instagram' },
    { icon: 'ri-youtube-fill', href: '#', label: 'YouTube' }
  ]

  return (
    <footer className='relative px-6 md:px-16 lg:px-40 xl:px-44 w-full text-gray-300 bg-gray-950/50 border-t border-gray-800/50'>
      {/* Background pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5' aria-hidden="true" />

      <div className='relative py-16 md:py-24'>
        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12'>
          {/* Brand Column */}
          <div className='lg:col-span-2'>
            <Link to='/' className='flex items-center gap-3 mb-2' aria-label="ShowLex Home">
              <img src={SL} alt="" className='w-full h-full' aria-hidden="true" />
              {/* <span className='text-2xl font-bold text-white'>ShowLex</span> */}
            </Link>
            <p className='text-gray-400 text-sm md:text-base max-w-xs leading-relaxed mb-6'>
              Your ultimate destination for discovering and booking the latest movies. Experience cinema like never before.
            </p>

            {/* App Store Badges */}
            <div className='flex flex-wrap gap-3'>
              <a href='#' className='btn-ghost-sm flex items-center gap-2' aria-label="Download on Google Play">
                <img src={assets.googlePlay} alt="Google Play" className='h-8 w-auto' />
              </a>
              <a href='#' className='btn-ghost-sm flex items-center gap-2' aria-label="Download on App Store">
                <img src={assets.appStore} alt="App Store" className='h-8 w-auto' />
              </a>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 mt-8'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-(--primary) hover:border-(--primary)/50 hover:bg-(--primary)/10 transition-all duration-200'
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`text-xl ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company links">
            <h3 className='font-semibold text-white mb-4'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className='text-sm text-gray-400 hover:text-(--primary) transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support Links */}
          <nav aria-label="Support links">
            <h3 className='font-semibold text-white mb-4'>Support</h3>
            <ul className='space-y-3'>
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className='text-sm text-gray-400 hover:text-(--primary) transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal links">
            <h3 className='font-semibold text-white mb-4'>Legal</h3>
            <ul className='space-y-3'>
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className='text-sm text-gray-400 hover:text-(--primary) transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <hr className='border-gray-800/50 mb-8' />

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Copyright */}
          <p className='text-sm text-gray-500 text-center md:text-left'>
            Copyright &copy; {currentYear} ShowLex. All Rights Reserved.
          </p>

          {/* Contact Info */}
          <div className='flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm text-gray-500'>
            <a href='tel:+91944224' className='hover:text-(--primary) transition-colors flex items-center gap-1'>
              <i className="ri-phone-line w-4 h-4" aria-hidden="true" />
              +91 94444 224
            </a>
            <a href='mailto:sujithkh12@gmail.com' className='hover:text-(--primary) transition-colors flex items-center gap-1'>
              <i className="ri-mail-line w-4 h-4" aria-hidden="true" />
              sujithkh12@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer