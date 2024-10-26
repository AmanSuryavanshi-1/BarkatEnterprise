import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaHome,
  FaBox,
  FaBook,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaPhoneAlt,
  FaAngleUp
} from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', link: '/', icon: FaHome },
    { name: 'Products', link: '/products', icon: FaBox },
    { name: 'Catalogues',link: '/catalogues', icon: FaBook },
    { name: 'Where to Buy', link: '/where-to-buy', icon: FaMapMarkerAlt },
    { name: 'About Us', link: '/about', icon: FaInfoCircle },
    { name: 'Contact Us', link: '/contact', icon: FaPhoneAlt },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[8vh] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg'
        : 'bg-bgVariant'
    }`}>
      <div className="container h-full mx-auto">
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo */}
          <div className="flex items-center h-full py-2">
            <img 
              src="/assets/Logo/13-Photoroom.png" 
              alt="Logo" 
              className="object-contain w-auto h-[8vh]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden h-full lg:flex">
            {menuItems.map((item) => (
              <div key={item.name} className="relative flex items-center h-full group">
                {item.submenu ? (
                  <div className="flex items-center h-full">
                    <button className="flex items-center h-full px-4 transition-all duration-200 text-primary hover:bg-primaryVariant hover:text-white group">
                      <item.icon className="w-4 h-4 mr-2" />
                      <span className="font-sans text-sm font-medium">{item.name}</span>
                      <FaChevronDown className="w-3 h-3 ml-1 transition-transform duration-200 transform group-hover:-rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute left-0 invisible w-48 transition-all duration-200 transform translate-y-2 opacity-0 top-full group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      <div className="py-2 mt-1 bg-white border border-gray-100 rounded-lg shadow-xl">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.link}
                            className="block px-4 py-2 text-sm transition-colors duration-200 text-primary hover:bg-primaryVariant hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="flex items-center h-full px-4 transition-all duration-200 text-primary hover:bg-primaryVariant hover:text-white"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span className="font-sans text-sm font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 transition-colors duration-200 rounded-md lg:hidden text-primary hover:bg-primaryVariant hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isOpen ? 'max-h-[calc(100vh-5rem)]' : 'max-h-0'
          } overflow-hidden`}
        >
          <nav className="px-4 py-2">
            {menuItems.map((item) => (
              <div key={item.name} className="py-1">
                {item.submenu ? (
                  <div className="space-y-1">
                    <button 
                      className="flex items-center justify-between w-full px-3 py-2 text-left transition-colors duration-200 rounded-md text-primary hover:bg-primaryVariant hover:text-white"
                      onClick={() => {
                        // Toggle submenu visibility
                      }}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        <span className="font-sans text-sm font-medium">{item.name}</span>
                      </div>
                      <FaChevronDown className="w-3 h-3 transition-transform duration-200" />
                    </button>
                    <div className="pl-8 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.link}
                          className="block px-3 py-2 text-sm transition-colors duration-200 rounded-md text-primary hover:bg-primaryVariant hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    className="flex items-center px-3 py-2 transition-colors duration-200 rounded-md text-primary hover:bg-primaryVariant hover:text-white"
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span className="font-sans text-sm font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed p-3 text-white transition-all duration-200 rounded-full shadow-lg bottom-6 right-6 bg-primary hover:bg-primaryVariant focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Scroll to top"
        >
          <FaAngleUp className="w-6 h-6" />
        </button>
      )}
    </header>
  )
}