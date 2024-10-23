import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import logo from '../assets/Logo/13-Photoroom.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'Products', 
      submenu: [
        { name: '', link: '/products/floor-tiles' },
        { name: 'Wall Tiles', link: '/products/wall-tiles' },
        { name: 'Bathroom Tiles', link: '/products/bathroom-tiles' },
      ]
    },
    { 
      name: 'Catalogues', 
      submenu: [
        { name: 'E-Catalogue 2023', link: '/catalogues/2023' },
        { name: 'E-Catalogue 2022', link: '/catalogues/2022' },
        { name: 'E-Catalogue 2021', link: '/catalogues/2021' },
      ]
    },
    { name: 'Where to Buy', link: '/where-to-buy' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <header className="shadow-md bg-bgVariant relative z-50 h-[8vh] flex items-center">
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        <div className="flex items-center h-full py-1">
          <LazyLoad>
            <img src={logo} alt="Logo" className="h-full max-h-[7vh] w-auto object-contain" />
          </LazyLoad>
        </div>
        <nav className="items-center hidden h-full md:flex">
          {menuItems.map((item) => (
            <div key={item.name} className="relative flex items-center h-full mx-2 group">
              {item.submenu ? (
                <>
                  <a href="#" className="flex items-center h-full px-2 text-sm transition duration-300 text-primary hover:text-primaryVariant">
                    {item.name}
                    <FaChevronDown className="w-2 h-2 ml-1" />
                  </a>
                  <div className="absolute left-0 hidden w-56 py-2 top-[8vh] shadow-xl group-hover:block bg-white rounded-b-md">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.link} 
                        className="block px-4 py-2 text-xs transition duration-300 text-primary hover:bg-bg hover:text-primaryVariant"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.link} className="flex items-center h-full px-2 text-sm transition duration-300 text-primary hover:text-primaryVariant">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="transition duration-300 text-primary hover:text-primaryVariant">
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 top-[8vh] z-50 md:hidden bg-white shadow-md">
          <nav className="px-4 py-2 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <a href="#" className="block py-2 text-sm transition duration-300 text-primary hover:text-primaryVariant">{item.name}</a>
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.link} 
                          className="block py-2 text-xs transition duration-300 text-primary hover:text-primaryVariant"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.link} className="block py-2 text-sm transition duration-300 text-primary hover:text-primaryVariant">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
