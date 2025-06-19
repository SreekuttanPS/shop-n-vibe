export default function Loading() {
  return (
    <div className="animate-pulse">
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="product-card group">
              <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
                <div className="product-img h-72 bg-cover bg-center bg-gray-200"></div>
              </div>
              <h3 className="font-medium text-gray-900 mb-1 w-45 h-8 bg-gray-200"></h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-medium w-45 h-8 bg-gray-200"></span>
              </div>
            </div>
            <div className="product-card group">
              <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
                <div className="product-img h-72 bg-cover bg-center bg-gray-200"></div>
              </div>
              <h3 className="font-medium text-gray-900 mb-1 w-45 h-8 bg-gray-200"></h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-medium w-45 h-8 bg-gray-200"></span>
              </div>
            </div>
            <div className="product-card group">
              <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
                <div className="product-img h-72 bg-cover bg-center bg-gray-200"></div>
              </div>
              <h3 className="font-medium text-gray-900 mb-1 w-45 h-8 bg-gray-200"></h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-medium w-45 h-8 bg-gray-200"></span>
              </div>
            </div>
            <div className="product-card group">
              <div className="relative overflow-hidden rounded-lg cursor-pointer mb-4">
                <div className="product-img h-72 bg-cover bg-center bg-gray-200"></div>
              </div>
              <h3 className="font-medium text-gray-900 mb-1 w-45 h-8 bg-gray-200"></h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-medium w-45 h-8 bg-gray-200"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
