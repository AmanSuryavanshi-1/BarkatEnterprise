'use client'

import * as React from 'react'
import { BsTags } from 'react-icons/bs'
import { MdChevronRight } from 'react-icons/md'
import { FiImage } from 'react-icons/fi'
import { TbGridDots } from 'react-icons/tb'
import { categories, sampleTiles } from '../Utils/ProductData';
import { CgSearch } from 'react-icons/cg'

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('Lemon 1 X 1.5')
  const [selectedSubcategory, setSelectedSubcategory] = React.useState('All Types')
  const [filteredTiles, setFilteredTiles] = React.useState(sampleTiles)
  const [searchQuery, setSearchQuery] = React.useState('')

  React.useEffect(() => {
    const newFilteredTiles = sampleTiles.filter(tile => 
      (tile.category === selectedCategory || selectedCategory === 'Lemon 1 X 1.5') && 
      (selectedSubcategory === 'All Types' || tile.subcategory === selectedSubcategory) &&
      tile.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredTiles(newFilteredTiles)
  }, [selectedCategory, selectedSubcategory, searchQuery])

  return (
    <div className="flex bg-white ">
      {/* Sidebar */}
          <div className="p-4 bg-white">
              <div className="relative mb-4">
                <CgSearch  className="absolute text-xl text-primaryVariant left-3 top-3" />
                <input
                  type="search"
                  placeholder="Search tiles..."
                  className="w-full py-2 pl-10 pr-4 border-2 shadow-md bg-bgVariant/25 rounded-3xl border-primaryVariant text-primary placeholder-primary shadow-bg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* All Types Button */}
              <button 
                className={`w-full flex items-center px-4 py-2 mb-4 rounded-md text-[#0A1612] ${
                  selectedSubcategory === 'All Types' 
                    ? 'bg-bgVariant' 
                    : 'bg-[#F7CE3E] hover:bg-[#F7CE3E]/80'
                }`}
                onClick={() => setSelectedSubcategory('All Types')}
              >
                <TbGridDots className="w-5 h-5 mr-3" />
                <span>All Types</span>
              </button>

              {/* Categories List */}
                {categories.map(category => (
                  <div key={category.name} className="pb-4">
                    <h2
                      className={`w-full flex items-center px-4 py-2 rounded-md text-primary text-xl }`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <BsTags className="mr-3 text-2xl text-bgVariant" />
                      <span>{category.name}</span>
                    </h2>

                    <div className="mt-1 ml-4 space-y-1">
                      {category.subcategories.map(subcat => (
                        <button
                          key={subcat}
                          className={`w-full flex items-center px-3 py-1.5 rounded-md text-primary text-sm ${
                            selectedSubcategory === subcat 
                              ? 'bg-bgVariant' 
                              : 'hover:bg-bgVariant/50'
                          }`}
                          onClick={() => setSelectedSubcategory(subcat)}
                        >
                          <MdChevronRight className="w-3 h-3 mr-2" />
                          <span>{subcat}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
          </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden bg-white">
        <div className="h-full overflow-y-auto">
          <div className="p-8">
            <div className="mx-auto max-w-7xl">
              {/* Header */}
              <div className="py-3 mb-8 shadow-lg bg-bg/20 rounded-xl">
                <h1 className="font-serif text-4xl text-center text-primary">
                  <span className="font-bold">{selectedCategory}</span>
                  {selectedSubcategory !== 'All Types' && (
                    <span className="font-medium text-primaryVariant"> - {selectedSubcategory}</span>
                  )}
                </h1>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredTiles.map(tile => (
                  <div 
                    key={tile.id} 
                    className="overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105"
                  >
                    <div className="relative h-64">
                      {tile.image ? (
                        <img 
                          src={tile.image} 
                          alt={tile.name} 
                          className="object-cover w-full h-full"
                        //   onError={(e) => { e.target.onerror = null; e.target.src = '/src/assets/Logo/13.png'; }} // Fallback image
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-100">
                          <FiImage className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#0A1612] mb-2">{tile.name}</h3>
                      <p className="text-[#1A2930]">{tile.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
