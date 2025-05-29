import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-['Pacifico'] text-2xl text-primary">
            logo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-medium text-gray-900 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-primary transition-colors">
              Men
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-primary transition-colors">
              Women
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-primary transition-colors">
              Electronics
            </a>
            <a href="#" className="font-medium text-gray-500 hover:text-primary transition-colors">
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
  );
}

export default Header;
