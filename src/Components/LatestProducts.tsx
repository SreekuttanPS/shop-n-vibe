import Image from "next/image";
import React from "react";

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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=minimalist%20white%20sneakers%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20footwear%20showcase&width=500&height=500&seq=5&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=premium%20wireless%20headphones%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=6&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=elegant%20womens%20summer%20dress%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20clothing%20showcase&width=500&height=500&seq=7&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=modern%20smartwatch%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=8&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=stylish%20mens%20casual%20shirt%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20clothing%20showcase&width=500&height=500&seq=9&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=premium%20tablet%20device%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=10&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=elegant%20womens%20handbag%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20accessory%20showcase&width=500&height=500&seq=11&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
                <Image
                  src={
                    "https://readdy.ai/api/search-image?query=stylish%20mens%20watch%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20accessory%20showcase&width=500&height=500&seq=12&orientation=squarish"
                  }
                  alt="Tester"
                  fill={true}
                />
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
