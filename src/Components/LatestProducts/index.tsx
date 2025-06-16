import React from "react";

import ProductCard from "@/Components/LatestProducts/ProductCard";

import { Product } from "@/helpers/sharedTypes";

function LatestProducts({ allProducts }: { allProducts: Product[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <div className="flex space-x-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors">
              <i className="ri-arrow-left-s-line ri-lg"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors">
              <i className="ri-arrow-right-s-line ri-lg"></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Product 1 */}
          {allProducts.slice(0, 8)?.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-gray-900 px-6 py-3 font-medium border border-gray-200 !rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
