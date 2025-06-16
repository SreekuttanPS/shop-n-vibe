import { CategoryType, Product } from "@/helpers/sharedTypes";
import ProductCard from "@/Components/LatestProducts/ProductCard";

type Props = {
  params: {
    categoryId: CategoryType;
  };
};

const baseUrl = process.env.BACKEND_API;

export default async function Categories({ params }: Props) {
  const allProducts: Product[] = await fetch(`${baseUrl}/api/products?category=${params.categoryId}`)
    .then((response) => response.json())
    .then((data) => data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {allProducts.slice(0, 8)?.map((product) => (
        <ProductCard product={product} key={product?._id} />
      ))}
    </div>
  );
}
