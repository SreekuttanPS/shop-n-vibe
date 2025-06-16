import React from "react";

import CategoryCard from "@/Components/CategorySection/CategoryCard";

import { AllProducts } from "@/helpers/sharedTypes";

function CategoriesSection({ allProducts }: { allProducts: AllProducts }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(allProducts || {}).map(([categoryName, { image }]) => (
            <CategoryCard key={categoryName} categoryImage={image} categoryName={categoryName} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
