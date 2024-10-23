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
    <header className="shadow-md h-[10vh] bg-bgVariant relative z-50">
      <div className="container flex items-center justify-between py-1 mx-2">
        <div className="flex items-center">
          <LazyLoad>
            <img src={logo} alt="Logo" className="h-12" />
          </LazyLoad>
        </div>
        <nav className="hidden space-x-6 md:flex">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <a href="#" className="flex items-center text-primary hover:text-primaryLight">
                    {item.name}
                    <FaChevronDown className="w-4 h-4 ml-1" />
                  </a>
                  <div className="absolute left-0 hidden w-48 py-2 mt-2 shadow-md group-hover:block bg-bgLight">
                    {item.submenu.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.link} 
                        className="block px-4 py-2 text-sm text-primary hover:bg-bg hover:text-primaryLight"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.link} className="text-primary hover:text-primaryLight">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="w-6 h-6 text-primary" /> : <FaBars className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 md:hidden bg-bgVariant">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <a href="#" className="block py-2 text-primary hover:text-primaryLight">{item.name}</a>
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          to={subItem.link} 
                          className="block py-1 text-sm text-primary hover:text-primaryLight"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.link} className="block py-2 text-primary hover:text-primaryLight">
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