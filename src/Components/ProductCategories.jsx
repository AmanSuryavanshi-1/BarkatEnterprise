import React from 'react'
import { FaLemon, FaTag } from 'react-icons/fa'
import { categories, sampleTiles } from '../Utils/ProductData'
import { Link } from 'react-router-dom'

const Button = ({ children, className, ...props }) => (
  <button
    className={`w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primaryVariant transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const descriptions = {
  'Bathroom': [
    'Elegant, Durable and Versatile designs',
    'Polished and Water Resistant Surface'
  ],
  'Black and White': [
    'Water and Fire resistant',
    'Fully polished and high glossy'
  ],
  'Elevation - Outdoor wall': [
    'Wide range of designs available',
    'Sunlight proofing'
  ],
  'Flower Design - Series': [
    'Different and new designs',
    'Water and fire resistant'
  ],
  'Kitchen': [
    'Variety of designs of kitchen',
    'Oil and dust resistant'
  ],
  'Living Room - Hall': [
    'Dust free, water proof and fire resistant',
    'New designs available'
  ],
  'Pooja': [
    'Dust free, water proof and fire resistant',
    'New designs available'
  ],
  'Bathroom Tiles': [
    'Water proof and non slippery',
    'High durability'
  ],
  'Floor Tiles - Hall - Living Room': [
    'Different designs available',
    'High glossy, smooth and dust proof'
  ],
  'Floor': [
    'Different designs available',
    'High glossy, smooth and dust proof'
  ],
  // Add more mappings as needed
};

export default function ProductCategories() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 font-serif text-3xl font-bold text-center text-primary">Our Product Categories</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.flatMap((category) =>
            category.subcategories.map((subcategory) => {
              const firstTile = sampleTiles.find(
                (tile) => tile.subcategory === subcategory
              )
              return (
                <div key={`${category.name}-${subcategory}`} className="flex flex-col overflow-hidden rounded-lg shadow-md bg-bgVariant/50">
                  {firstTile && (
                    <img
                      src={firstTile.image}
                      alt={subcategory}
                      className="object-cover w-full h-64"
                    />
                  )}
                  <div className="flex-grow p-4">
                    <h3 className="mb-2 overflow-hidden font-semibold uppercase text-md text-primary line-clamp-1">{subcategory}</h3>
                    <p className='text-md line-clamp-2'>{descriptions[subcategory]?.join(' | ')}</p> 
                  </div>
                    <div className="flex items-center gap-2 ml-3">
                        <FaTag className="text-primaryVariant" />
                        <span className="px-2 py-[0.2rem] text-sm font-medium rounded text-bgVariant bg-primaryVariant">
                          {firstTile.category}
                        </span>
                      </div>
                  <Link to='/products' onClick={() => window.scrollTo(0, 0)}>
                    <button className="relative w-full p-2 mt-2 overflow-hidden text-white transition-all duration-300 rounded-b-md group bg-primary hover:bg-primaryVariant">
                        <span className="relative z-10 flex items-center justify-center">
                          <FaLemon className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                          Explore More
                        </span>
                        <span className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 bg-bgVariant group-hover:opacity-20"></span>
                        <span className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 bg-bgVariant group-hover:w-full"></span>
                    </button>
                  </Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}
