import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-bgVariant text-primary">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-primaryLight">About Kajaria</h3>
            <p className="text-primary">Kajaria Ceramics is India's leading tile manufacturer, offering a wide range of premium tiles for all your needs.</p>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-primaryLight">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary hover:text-primaryLight">Home</a></li>
              <li><a href="#" className="text-primary hover:text-primaryLight">Products</a></li>
              <li><a href="#" className="text-primary hover:text-primaryLight">Where to Buy</a></li>
              <li><a href="#" className="text-primary hover:text-primaryLight">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-primaryLight">Contact Info</h3>
            <p className="text-primary">J-1/B-1 (Extn.), Mohan Co-operative Industrial Estate, Mathura Road, New Delhi - 110044</p>
            <p className="mt-2 text-primary">Phone: +91-11-26946409</p>
            <p className="text-primary">Email: info@kajariaceramics.com</p>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-primaryLight">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primaryLight"><FaFacebookF /></a>
              <a href="#" className="text-primary hover:text-primaryLight"><FaTwitter /></a>
              <a href="#" className="text-primary hover:text-primaryLight"><FaInstagram /></a>
              <a href="#" className="text-primary hover:text-primaryLight"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-bgLight">
          <p className="text-primary">&copy; {new Date().getFullYear()} Kajaria Ceramics Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;