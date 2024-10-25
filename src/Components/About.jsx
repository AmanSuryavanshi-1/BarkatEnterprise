import React from 'react';
import img from '../../public/assets/Barkat Enterprise Business Card PNG/1.png'
const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img src={img} alt="About Barkat Enterprise" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-primaryLight">About Barkat Enterprise</h2>
            <p className="mb-4 text-primary">
              Barkat Enterprise specializes in tiles and marbles, providing high-quality products to meet the needs of our customers. With a commitment to excellence, we ensure that our offerings are both stylish and durable.
            </p>
            <p className="mb-6 text-primary">
              Located at Kalindri Bus Stand, Dharampur, Malda, we are dedicated to customer satisfaction and strive to be a trusted name in the industry.
            </p>
            <button className="px-6 py-2 text-lg font-semibold transition duration-300 rounded-full bg-primary text-bg hover:bg-primaryLight">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
