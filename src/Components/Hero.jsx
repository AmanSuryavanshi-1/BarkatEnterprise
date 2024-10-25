import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const images = [
  '/assets/Products/Carousel WEBP/1.webp',
  '/assets/Products/Carousel WEBP/2.webp',
  '/assets/Products/Carousel WEBP/3.webp',
  '/assets/Products/Carousel WEBP/4.webp',
  '/assets/Products/Carousel WEBP/9.webp',
  '/assets/Products/Carousel WEBP/10.webp',
  '/assets/Products/Carousel WEBP/11.webp',
  '/assets/Products/Carousel WEBP/12.webp',
  '/assets/Products/Carousel WEBP/13.webp',
  '/assets/Products/Carousel WEBP/14.webp',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTextVisible(false);
    const timer = setTimeout(() => setTextVisible(true), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center z-10 transition-all duration-500 px-4 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="mt-12 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
            BARKAT ENTERPRISES
          </h1>
          <p className="mt-4 mb-8 text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl text-bgVariant drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            Elevate Your Space with Premium Tiles
          </p>
          <Link to="products">
            <button className="relative mt-2 w-[17rem] px-8 py-2 overflow-hidden text-lg font-semibold  text-white transition-all duration-300 ease-in-out transform border-[3px] rounded-full shadow-lg bg-bgVariant/70 group hover:shadow-xl">
              <span className="flex items-center justify-center w-full transition-all duration-300 transform group-hover:translate-x-full ease">
                <FaRocket className="mr-2 text-2xl" />
                Explore Collection
              </span>
              <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-bgVariant group-hover:translate-x-0 ease">
                <FaArrowRight className="text-3xl text-white" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute left-0 right-0 flex justify-center gap-2 bottom-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-bgVariant' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
