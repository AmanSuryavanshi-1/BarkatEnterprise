import React from 'react';
import { categories, sampleTiles } from '../Utils/ProductData'; // Import categories and sample tiles

const ProductCategories = () => {
    return (
        <section className="py-16 bg-bgLight">
            <div className="justify-center px-8 mx-auto">
                <h2 className="mb-12 font-serif text-3xl font-bold text-center text-primaryLight">Our Product Categories</h2>
                <div className="grid grid-cols-1 gap-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
                    {categories.map((category) => (
                        category.subcategories.map((subcategory) => {
                            // Find the first tile that matches the category and subcategory
                            const firstTile = sampleTiles.find(tile => 
                                tile.subcategory === subcategory
                            );
                              console.log(firstTile);
                            return (
                                <div key={`${category.name}-${subcategory}`} className="overflow-hidden rounded-lg shadow-md bg-bgVariant">
                                    {firstTile && (
                                        <img src={firstTile.image} alt={subcategory} className="object-cover w-full h-56" />
                                    )}
                                    <div className="p-4">
                                        <h3 className="mb-2 text-xl font-semibold text-primary">{`${category.name} - ${subcategory}`}</h3>
                                        <a href={`/product-page?subcategory=${subcategory}`} className="text-primaryLight hover:underline">Explore More</a>
                                    </div>
                                </div>
                            );
                        })
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
