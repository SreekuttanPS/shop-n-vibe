import React from "react";

function HeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=modern%20fashion%20e-commerce%20hero%20image%20with%20stylish%20models%20on%20the%20right%20side%20and%20clean%20empty%20space%20on%20the%20left%20side%20for%20text%2C%20high-end%20fashion%20photography%20with%20soft%20lighting%20and%20minimalist%20aesthetic%2C%20professional%20product%20showcase&width=1920&height=800&seq=1&orientation=landscape')",
        }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full md:w-1/2 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Summer Collection 2025
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Discover the latest trends in fashion and electronics with our new summer collection. Up
            to 40% off on selected items.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors">
              Shop Now
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 font-medium border border-gray-200 !rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
