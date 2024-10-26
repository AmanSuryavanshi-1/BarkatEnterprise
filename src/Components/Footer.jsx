import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaHome, FaInfoCircle, FaBox, FaBook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMailchimp } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 text-bg bg-gradient-to-br from-[#1a2e35] to-[#0d1518]">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-500">About Us</h3>
            <p className="mb-8 text-sm leading-relaxed text-gray-300">
              Barkat Enterprise specializes in high-quality tiles and marbles, providing a wide range of options for all your flooring needs. With years of experience and a commitment to excellence, we're your trusted partner in creating beautiful spaces.
            </p>
            <a
            href="/assets/Barkat Enterprise Business Card PNG/Barkat Enterprise Business Card.pdf" 
            download="Barkat_Enterprise_Business_Card.pdf"
              className="px-6 py-2.5 text-sm font-medium transition-all duration-300 bg-yellow-500 rounded hover:bg-yellow-600 text-gray-900"
            >
              Download Business Card
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="lg:pl-8">
            <h3 className="mb-6 text-xl font-bold text-yellow-500">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { to: "/", icon: <FaHome className="w-4 h-4" />, text: "Home" },
                { to: "/products", icon: <FaBox className="w-4 h-4" />, text: "Products" },
                { to: "/catalogues", icon: <FaBook className="w-4 h-4" />, text: "Catalogues" },
                { to: "/where-to-buy", icon: <FaMapMarkerAlt className="w-4 h-4" />, text: "Where to Buy" },
                { to: "/about", icon: <FaInfoCircle className="w-4 h-4" />, text: "About Us" },
                { to: "/contact", icon: <FaPhoneAlt className="w-4 h-4" />, text: "Contact" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center transition-transform duration-300 group hover:translate-x-1"
                >
                  <span className="mr-3 text-yellow-500 group-hover:text-yellow-400">{link.icon}</span>
                  <span className="text-gray-300 group-hover:text-yellow-400">{link.text}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="lg:pl-8">
            <h3 className="mb-6 text-xl font-bold text-yellow-500">Contact Info</h3>
            <div className="space-y-4">
              <p className="flex items-start group">
                <FaMapMarkerAlt className="flex-shrink-0 w-4 h-4 mt-1 mr-3 text-yellow-500" />
                <span className="text-sm text-gray-300">Kalindri Bus Stand, Dharampur, Malda</span>
              </p>
              <p className="flex items-center group">
                <FaPhoneAlt className="flex-shrink-0 w-4 h-4 mr-3 text-yellow-500" />
                <span className="text-sm text-gray-300">9630678115, 9899826755</span>
              </p>
              <p className="flex items-center group">
                <FaEnvelope className="flex-shrink-0 w-4 h-4 mr-3 text-yellow-500" />
                <span className="text-sm text-gray-300">sk80bali@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="lg:pl-8">
            <h3 className="mb-6 text-xl font-bold text-yellow-500">Follow Us</h3>
            <div className="flex gap-4">
              {[
                // { icon: < className="w-4 h-4" />, href: "#", label: "Facebook" },
                { icon: <BsWhatsapp className="w-4 h-4" />, href: "https://api.whatsapp.com/send?phone=+919630678115&text=Hello%20there!", label: "WhatsApp" },
                { icon: <FaMapMarkerAlt className="w-4 h-4" />, href: "https://www.google.com/maps/place/Barkat+Enterprise/@25.0621466,87.9615841,20z/", label: "Maps" },
                { icon: <FaInstagram className="w-4 h-4" />, href: "#", label: "Instagram" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 text-yellow-500 transition-all duration-300 border rounded-full border-yellow-500/50 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-12 mt-16 border-t border-gray-700">
          <p className="text-sm text-center text-gray-400">
            &copy; {currentYear} Barkat Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}