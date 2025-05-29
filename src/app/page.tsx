export default function Home() {
  return (
    <>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="font-['Pacifico'] text-2xl text-primary">
              logo
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="font-medium text-gray-900 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Men
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Women
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Electronics
              </a>
              <a
                href="#"
                className="font-medium text-gray-500 hover:text-primary transition-colors"
              >
                Sale
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                  <i className="ri-search-line ri-lg"></i>
                </button>
                <div className="hidden absolute right-0 top-full mt-2 w-72 bg-white shadow-lg rounded p-2">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                      placeholder="Search products..."
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
                      <i className="ri-search-line"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="relative">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                  <i className="ri-shopping-bag-line ri-lg"></i>
                  <span className="absolute top-0 right-0 h-5 w-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* User */}
              <div className="relative">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                  <i className="ri-user-line ri-lg"></i>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
                <i className="ri-menu-line ri-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
              Discover the latest trends in fashion and electronics with our new summer collection.
              Up to 40% off on selected items.
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

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Category */}
            <div className="group relative h-80 overflow-hidden rounded-lg shadow-md">
              <div
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=handsome%20male%20model%20wearing%20stylish%20casual%20menswear%2C%20clean%20minimal%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20modern%20mens%20fashion%20showcase&width=600&height=800&seq=2&orientation=portrait')",
                }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              ></div>
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
              <div
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=elegant%20female%20model%20wearing%20stylish%20womens%20fashion%2C%20clean%20minimal%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20modern%20womens%20fashion%20showcase&width=600&height=800&seq=3&orientation=portrait')",
                }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              ></div>
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
              <div
                style={{
                  backgroundImage:
                    "url('https://readdy.ai/api/search-image?query=modern%20electronic%20devices%20including%20smartphone%2C%20headphones%2C%20and%20smartwatch%20on%20minimal%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20tech%20showcase&width=600&height=800&seq=4&orientation=portrait')",
                }}
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              ></div>
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

      {/* Latest Products Section */}
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=minimalist%20white%20sneakers%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20footwear%20showcase&width=500&height=500&seq=5&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=premium%20wireless%20headphones%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=6&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=elegant%20womens%20summer%20dress%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20clothing%20showcase&width=500&height=500&seq=7&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=modern%20smartwatch%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=8&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=stylish%20mens%20casual%20shirt%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20clothing%20showcase&width=500&height=500&seq=9&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=premium%20tablet%20device%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20electronics%20showcase&width=500&height=500&seq=10&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=elegant%20womens%20handbag%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20accessory%20showcase&width=500&height=500&seq=11&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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
                <div
                  style={{
                    backgroundImage:
                      "url('https://readdy.ai/api/search-image?query=stylish%20mens%20watch%20on%20clean%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high-end%20fashion%20accessory%20showcase&width=500&height=500&seq=12&orientation=squarish')",
                  }}
                  className="product-img h-72 bg-cover bg-center"
                ></div>
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center text-primary mb-4">
                <i className="ri-truck-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50. International shipping available.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center text-primary mb-4">
                <i className="ri-refresh-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                30 days return policy. No questions asked, hassle-free returns.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center text-primary mb-4">
                <i className="ri-secure-payment-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Multiple secure payment options. Your data is always protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest products, exclusive offers, and fashion tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 font-medium !rounded-button whitespace-nowrap hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="font-['Pacifico'] text-2xl mb-4">logo</h3>
              <p className="text-gray-400 mb-4">
                Your one-stop destination for fashion and electronics. Quality products at
                affordable prices.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-primary transition-colors"
                >
                  <i className="ri-pinterest-fill"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Returns &amp; Exchanges
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400 mr-2 mt-1">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <span className="text-gray-400">123 Fashion Street, New York, NY 10001, USA</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400 mr-2">
                    <i className="ri-phone-line"></i>
                  </div>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400 mr-2">
                    <i className="ri-mail-line"></i>
                  </div>
                  <span className="text-gray-400">support@fashionstore.com</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center text-gray-400 mr-2">
                    <i className="ri-time-line"></i>
                  </div>
                  <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 Fashion &amp; Electronics Store. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-6 flex items-center justify-center">
                  <i className="ri-visa-fill ri-lg"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center">
                  <i className="ri-mastercard-fill ri-lg"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center">
                  <i className="ri-paypal-fill ri-lg"></i>
                </div>
                <div className="w-10 h-6 flex items-center justify-center">
                  <i className="ri-apple-fill ri-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
