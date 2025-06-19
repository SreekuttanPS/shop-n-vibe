export default function Loading() {
  return (
    <div className="animate-pulse">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-gray-300"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-full md:w-1/2 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4">Summer Collection 2025</h1>
            <p className="text-lg text-gray-200 mb-8 max-w-md">
              Discover the latest trends in fashion and electronics with our new summer collection. Up to 40% off on selected items.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors cursor-wait">
                Shop Now
              </button>
              <button className="bg-white text-gray-200 px-6 py-3 font-medium border border-gray-200 !rounded-button whitespace-nowrap transition-colors cursor-wait">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 mt-5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
            <div className="bg-gray-200 h-[400px]"></div>
          </div>

          <div className="text-center mt-12">
            <button
              disabled
              className="bg-white text-gray-200 px-6 py-3 font-medium border border-gray-200 !rounded-button whitespace-nowrap transition-colors cursor-wait"
            >
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
