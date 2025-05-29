import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-['Pacifico'] text-2xl mb-4">logo</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for fashion and electronics. Quality products at affordable
              prices.
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
  );
}

export default Footer;
