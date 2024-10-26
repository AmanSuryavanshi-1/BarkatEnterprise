import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { IoBusinessOutline, IoTimeOutline, IoRibbonOutline } from 'react-icons/io5';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[92vh] px-4 py-6 font-sans bg-white sm:px-8">
      <div className="w-full rounded-3xl max-w-[58rem] shadow-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
          {/* Image and Introduction Section */}
          <div className="flex flex-col px-6 py-6 sm:px-12 bg-[#F7CE3E] text-[#0A1612] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <h2 className="font-serif text-2xl font-bold text-center text-[#0A1612] sm:text-3xl">About Us</h2>
            <div className="flex flex-col justify-center flex-grow space-y-7">
              <div className="relative p-2 overflow-hidden bg-white shadow-md rounded-xl group">
                <img 
                  src="/assets/Barkat Enterprise Business Card PNG/1.png" 
                  alt="About Barkat Enterprise" 
                  className="object-cover w-full h-48 transition-transform duration-300 rounded-md group-hover:scale-105"
                />
                <a 
                  href="/assets/Barkat Enterprise Business Card PNG/Barkat Enterprise Business Card.pdf" 
                  download="Barkat_Enterprise_Business_Card.pdf"
                  className="absolute inset-0 flex items-center justify-center text-lg text-white transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100"
                >
                   <FaDownload className='mr-3 text-3xl text-bgVariant'/> <p className='font-serif text-2xl font-semibold text-bgVariant'> Download </p>
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#1A2930]">
                Barkat Enterprise is your premier destination for high-quality tiles and marbles. 
                We take pride in offering exceptional products that combine elegance with durability.
              </p>
            </div>
          </div>

          {/* Features and Details Section */}
          <div className="flex flex-col px-6 py-6 bg-white sm:px-12 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
            <h2 className="mb-6 font-serif text-2xl font-bold text-center text-[#0A1612] sm:text-3xl">Why Choose Us</h2>
            <div className="flex flex-col justify-center flex-grow space-y-3">
              <FeatureCard
                icon={<IoBusinessOutline />}
                title="Premium Quality"
                description="We source the finest tiles and marbles to ensure lasting beauty & durability"
              />
              <FeatureCard
                icon={<IoTimeOutline />}
                title="Experience"
                description="Years of expertise in providing top-notch building materials"
              />
              <FeatureCard
                icon={<IoRibbonOutline />}
                title="Customer Satisfaction"
                description="Dedicated to exceeding customer expectations with superior service"
              />
              
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2 mx-16 mt-4 font-semibold transition-all duration-300 border-2 rounded-full text-[#0A1612] bg-[#F7CE3E] hover:bg-[#1A2930] hover:text-white border-[#F7CE3E] hover:border-[#1A2930]"
              >
                Contact Us
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-start p-3 space-x-3 transition-all duration-300 bg-[#F7CE3E] shadow-md sm:p-4 sm:space-x-4 rounded-xl hover:shadow-lg hover:transform hover:scale-105">
    <div className="p-2 m-1 text-2xl rounded-full sm:p-3 text-[#0A1612] bg-white">
      {icon}
    </div>
    <div>
      <h4 className="text-base font-semibold sm:text-lg text-[#0A1612]">{title}</h4>
      <p className="text-xs text-[#1A2930] sm:text-sm">{description}</p>
    </div>
  </div>
);

export default About;
