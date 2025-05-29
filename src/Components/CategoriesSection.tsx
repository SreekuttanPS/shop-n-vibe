import Image from "next/image";
import React from "react";

function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Men's Category */}
          <div className="group relative h-80 overflow-hidden rounded-lg shadow-md">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src={
                  "https://readdy.ai/api/search-image?query=handsome%20male%20model%20wearing%20stylish%20casual%20menswear%2C%20clean%20minimal%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20modern%20mens%20fashion%20showcase&width=600&height=800&seq=2&orientation=portrait"
                }
                alt="Tester"
                fill={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Men&apos;s Fashion</h3>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-primary transition-colors"
              >
                <span>Shop Collection</span>
                <i className="ri-arrow-right-line ri-lg ml-2"></i>
              </a>
            </div>
          </div>

          {/* Women's Category */}
          <div className="group relative h-80 overflow-hidden rounded-lg shadow-md">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src={
                  "https://readdy.ai/api/search-image?query=elegant%20female%20model%20wearing%20stylish%20womens%20fashion%2C%20clean%20minimal%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20modern%20womens%20fashion%20showcase&width=600&height=800&seq=3&orientation=portrait"
                }
                alt="Tester"
                fill={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Women&apos;s Fashion</h3>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-primary transition-colors"
              >
                <span>Shop Collection</span>
                <i className="ri-arrow-right-line ri-lg ml-2"></i>
              </a>
            </div>
          </div>

          {/* Electronics Category */}
          <div className="group relative h-80 overflow-hidden rounded-lg shadow-md">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500">
              <Image
                src={
                  "https://readdy.ai/api/search-image?query=modern%20electronic%20devices%20including%20smartphone%2C%20headphones%2C%20and%20smartwatch%20on%20minimal%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20tech%20showcase&width=600&height=800&seq=4&orientation=portrait"
                }
                alt="Tester"
                fill={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Electronics</h3>
              <a
                href="#"
                className="inline-flex items-center text-white hover:text-primary transition-colors"
              >
                <span>Shop Collection</span>
                <i className="ri-arrow-right-line ri-lg ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
