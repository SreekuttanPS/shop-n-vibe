import React from "react";

function Features() {
  return (
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
              Free shipping on all orders over ₹50. International shipping available.
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
  );
}

export default Features;
