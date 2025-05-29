import React from "react";

function NewsLetterSection() {
  return (
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
  );
}

export default NewsLetterSection;
