import React, { useState, useEffect } from 'react';
import { categories, sampleTiles } from '../Utils/ProductData';
// const categories = [

// const sampleTiles = [

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
    <div className="flex font-sans bg-bg">
      <div className="w-64 p-6 text-white bg-primary">
        {/* <h1>Search for {category}</h1> */}
        <h2 className="mb-6 font-serif text-2xl">Search By Category</h2>
        {categories.map(category => (
          <div key={category.name} className="mb-6">
            <h3 
              className="text-lg font-semibold transition-colors cursor-pointer hover:text-bgVariant"
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </h3>
            {category.subcategories.map(subcat => (
              <div 
                key={subcat} 
                className={`pl-4 py-1 cursor-pointer transition-colors ${
                  selectedSubcategory === subcat 
                    ? 'bg-primaryVariant text-bgVariant' 
                    : 'hover:bg-primaryVariant'
                }`}
                onClick={() => setSelectedSubcategory(subcat)}
              >
                {subcat}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex-1 p-8">
        <h1 className="mb-8 font-serif text-3xl text-primary"> <span className='font-bold'> {selectedCategory} - </span> {selectedSubcategory}</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredTiles.map(tile => (
            <div key={tile.id} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img src={tile.image} alt={tile.name} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary">{tile.name}</h3>
                <p className="text-primaryVariant">{tile.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
