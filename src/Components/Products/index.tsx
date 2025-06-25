import React from "react";
import Link from "next/link";

import ProductCard from "@/Components/Products/ProductCard";

import { Product } from "@/helpers/sharedTypes";

function LatestProducts({ allProducts }: { allProducts: Product[] }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Product 1 */}
          {allProducts.slice(0, 8)?.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products/all"
            className="bg-white text-gray-900 px-6 py-3 font-medium border border-gray-200 !rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;
