import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-bg">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-8 md:w-1/2 md:mb-0">
            <img src="https://images.unsplash.com/photo-1573055627303-8740cb6a59bf" alt="About Kajaria" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-primaryLight">About Kajaria Ceramics</h2>
            <p className="mb-4 text-primary">
              Kajaria Ceramics is India's largest manufacturer of ceramic and vitrified tiles. With a legacy spanning over three decades, we have been at the forefront of innovation and design in the tile industry.
            </p>
            <p className="mb-6 text-primary">
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted name in homes and businesses across the country.
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