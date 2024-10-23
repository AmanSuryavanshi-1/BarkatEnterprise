import React, { useState, useEffect } from 'react';
import { categories, sampleTiles } from '../Utils/ProductData';
import { FaSearch, FaThLarge, FaChevronRight, FaHome, FaTags, FaRegImage } from 'react-icons/fa';

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Lemon 1 X 1.5');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Types');
  const [filteredTiles, setFilteredTiles] = useState(sampleTiles);

  useEffect(() => {
    const newFilteredTiles = sampleTiles.filter(tile => 
      (tile.category === selectedCategory || selectedCategory === 'Lemon 1 X 1.5') && 
      (selectedSubcategory === 'All Types' || tile.subcategory === selectedSubcategory)
    );
    setFilteredTiles(newFilteredTiles);
  }, [selectedCategory, selectedSubcategory]);

  return (
    <div className="flex h-screen font-sans bg-bg">
      {/* Sidebar */}
      <div className="min-h-screen p-6 overflow-y-auto text-white w-72 bg-primary">
        <div className="sticky top-0 pb-6">
          <div className="flex items-center justify-center p-4 mb-6 text-bgVariant bg-primaryVariant rounded-xl">
            <FaSearch className="w-6 h-6 mr-3" />
            <h2 className="font-serif text-2xl">Categories</h2>
          </div>

          {/* All Types Button */}
          <button 
            className={`w-full flex items-center p-3 mb-4 rounded-lg transition-all ${
              selectedSubcategory === 'All Types' 
                ? 'bg-bgVariant text-primary font-semibold shadow-lg'
                : 'hover:bg-primaryVariant text-white'
            }`}
            onClick={() => setSelectedSubcategory('All Types')}
          >
            <FaThLarge className="w-5 h-5 mr-3" />
            <span>All Types</span>
          </button>

          {/* Categories List */}
          <div className="space-y-4">
            {categories.map(category => (
              <div key={category.name} className="pb-4">
                <button
                  className={`w-full flex items-center p-2 rounded-lg transition-all ${
                    selectedCategory === category.name
                      ? 'bg-primaryVariant text-bgVariant font-semibold'
                      : 'hover:bg-primaryVariant/50'
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <FaTags className="w-4 h-4 mr-3" />
                  <span>{category.name}</span>
                </button>

                <div className="mt-2 ml-4 space-y-1">
                  {category.subcategories.map(subcat => (
                    <button
                      key={subcat}
                      className={`w-full flex items-center p-2 rounded-lg transition-all text-sm ${
                        selectedSubcategory === subcat
                          ? 'bg-bgVariant text-primary font-semibold'
                          : 'hover:bg-primaryVariant/50'
                      }`}
                      onClick={() => setSelectedSubcategory(subcat)}
                    >
                      <FaChevronRight className="w-3 h-3 mr-2" />
                      <span>{subcat}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-8 overflow-y-auto">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="p-6 mb-8 bg-white shadow-lg rounded-xl">
            <h1 className="font-serif text-4xl text-center text-primary">
              <span className="font-bold">{selectedCategory}</span>
              {selectedSubcategory !== 'All Types' && (
                <span className="text-primaryVariant"> - {selectedSubcategory}</span>
              )}
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTiles.map(tile => (
              <div 
                key={tile.id} 
                className="overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-102 hover:translate-y--1"
              >
                <div className="relative h-64">
                  {tile.image ? (
                    <img 
                      src={tile.image} 
                      alt={tile.name} 
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100">
                      <FaRegImage className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-primary">{tile.name}</h3>
                  <p className="text-primaryVariant">{tile.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;