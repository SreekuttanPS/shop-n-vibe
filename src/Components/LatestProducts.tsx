import Image from "next/image";
import React from "react";

import latestProduct1 from "../assets/images/latestproduct-1.jpg";
import latestProduct2 from "../assets/images/latestproduct-2.jpg";
import latestProduct3 from "../assets/images/latestproduct-3.jpg";
import latestProduct4 from "../assets/images/latestproduct-4.jpg";
import latestProduct5 from "../assets/images/latestproduct-5.jpg";
import latestProduct6 from "../assets/images/latestproduct-6.jpg";
import latestProduct7 from "../assets/images/latestproduct-7.jpg";
import latestProduct8 from "../assets/images/latestproduct-8.jpg";

function LatestProducts() {
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
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct1} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Minimalist Sneakers</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$89.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct2} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Wireless Headphones</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$129.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct3} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Summer Dress</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$59.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct4} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Smart Watch</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$199.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct5} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Casual Shirt</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$45.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct6} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Tablet Pro</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$349.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
            </div>
          </div>

          {/* Product 7 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct7} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Designer Handbag</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$159.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>
            </div>
          </div>

          {/* Product 8 */}
          <div className="product-card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="product-img h-72 bg-cover bg-center">
                <Image src={latestProduct8} alt="Tester" />
              </div>
              <button className="quick-add absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-md hover:bg-primary hover:text-white transition-colors whitespace-nowrap">
                <i className="ri-add-line ri-lg mr-1"></i> Quick Add
              </button>
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Luxury Watch</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-medium">$249.99</span>
              <div className="flex text-yellow-400">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
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
