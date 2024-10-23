import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import crousel1 from '../assets/Products/Carousel WEBP/1.webp';
import crousel2 from '../assets/Products/Carousel WEBP/2.webp';
import crousel3 from '../assets/Products/Carousel WEBP/3.webp';
import crousel10 from '../assets/Products/Carousel WEBP/4.webp';
import crousel4 from '../assets/Products/Carousel WEBP/9.webp';
import crousel5 from '../assets/Products/Carousel WEBP/10.webp';
import crousel6 from '../assets/Products/Carousel WEBP/11.webp';
import crousel7 from '../assets/Products/Carousel WEBP/12.webp';
import crousel8 from '../assets/Products/Carousel WEBP/13.webp';
import crousel9 from '../assets/Products/Carousel WEBP/14.webp';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const images = [
    crousel1,
    crousel2,
    crousel3,
    crousel4,
    crousel5,
    crousel6,
    crousel7,
    crousel8,
    crousel9,
    crousel10,
    // "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    // "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    // "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTextVisible(false);
    const timer = setTimeout(() => setTextVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-[90vh] bg-bg overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-center z-10 transition-all duration-500 ${
          textVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className={`mb-4 font-serif text-6xl font-bold text-primary ${styles.heroTitle}`}>
            Welcome to Barkat Enterprises
          </h1>
          <p className={`mb-8 text-xl md:text-2xl lg:text-3xl ${styles.heroSubtitle}`}>
            Discover the Beauty of Premium Tiles
          </p>
          <button className="px-8 py-3 text-lg font-semibold rounded-full bg-[#ff6b6b] text-white shadow-md hover:bg-[#ff8787] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-in-out">
            Explore Now
          </button>
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute left-0 right-0 flex justify-center bottom-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
              index === currentSlide ? 'bg-primary' : 'bg-primaryLight'
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
