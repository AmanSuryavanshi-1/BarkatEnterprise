import React, { useState, useEffect } from 'react';

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
import { FaArrowRight } from 'react-icons/fa';


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
    <section className="relative h-[92vh] overflow-hidden bg-bg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Tile showcase ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-40">
        <div className={`text-center z-10 transition-all duration-500 ${
          textVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`}>
          <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl drop-shadow-lg">
            Barkat Enterprises
          </h1>
          <p className="mb-8 text-xl font-semibold md:text-2xl lg:text-3xl text-bgVariant drop-shadow">
            Elevate Your Space with Premium Tiles
          </p>
          <div className="flex justify-center">
            <button className="group relative px-8 py-3 text-lg font-bold rounded-md 
              bg-bgVariant text-primary 
              shadow-lg hover:shadow-xl
              hover:bg-white 
              transform hover:-translate-y-0.5 active:translate-y-0.5
              transition-all duration-300 ease-in-out
              overflow-hidden flex items-center justify-center space-x-2">
              <span className="relative z-10">Explore Collection</span>
              <FaArrowRight className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* ... existing navigation buttons ... */}
      
      <div className="absolute left-0 right-0 flex justify-center bottom-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
              index === currentSlide ? 'bg-bgVariant w-6' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
