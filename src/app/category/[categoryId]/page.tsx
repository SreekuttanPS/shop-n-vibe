import { CategoryType, Product } from "@/helpers/sharedTypes";
import ProductCard from "@/Components/LatestProducts/ProductCard";

type Params = Promise<{ categoryId: string }>;

type Props = {
  params: Params;
};

const baseUrl = process.env.BACKEND_API;

export default async function Categories(props: Props) {
  const params = await props?.params;
  const allProducts: Product[] = await fetch(`${baseUrl}/api/products?category=${params.categoryId as CategoryType}`)
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
