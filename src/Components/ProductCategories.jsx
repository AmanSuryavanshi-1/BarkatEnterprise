import React from 'react';

const ProductCategories = () => {
    const categories = [
        { name: 'Floor Tiles', image: 'https://via.placeholder.com/300?text=Floor+Tiles' },
        { name: 'Wall Tiles', image: 'https://via.placeholder.com/300?text=Wall+Tiles' },
        { name: 'Bathroom Tiles', image: 'https://via.placeholder.com/300?text=Bathroom+Tiles' },
        { name: 'Kitchen Tiles', image: 'https://via.placeholder.com/300?text=Kitchen+Tiles' },
        { name: 'Outdoor Tiles', image: 'https://via.placeholder.com/300?text=Outdoor+Tiles' },
    ];    

  return (
    <section className="py-16 bg-bgLight">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 font-serif text-3xl font-bold text-center text-primaryLight">Our Product Categories</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.name} className="overflow-hidden rounded-lg shadow-md bg-bgVariant">
              <img src={category.image} alt={category.name} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-primary">{category.name}</h3>
                <a href="#" className="text-primaryLight hover:underline">Explore {category.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;