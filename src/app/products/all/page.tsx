import ProductCard from "@/Components/Products/ProductCard";

import { Product } from "@/helpers/sharedTypes";

const baseUrl = process.env.BACKEND_API;

export default async function Products() {
  const allProducts: Product[] = await fetch(`${baseUrl}/api/products`)
    .then((response) => response.json())
    .then((data) => data);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Product 1 */}
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
