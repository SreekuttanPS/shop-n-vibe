import Image from "next/image";

import AddToCartButton from "@/Components/AddToCartButton";

import { Product } from "@/helpers/sharedTypes";

import BuyButton from "@/Components/Products/BuyButton";

type Params = Promise<{ productId: string }>;

type Props = {
  params: Params;
};

const baseUrl = process.env.BACKEND_API;

export default async function Products(props: Props) {
  const { productId } = await props?.params;
  const product: Product = await fetch(`${baseUrl}/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => data);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12 md:hidden">{product?.name}</h2>
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-6">
        <Image src={product?.imageUrl} alt={product?.name} width={400} height={533} />
        <div className="w-[50%]">
          <h2 className="text-3xl font-bold text-center mb-12  hidden md:block">{product?.name}</h2>
          <div className="mt-3 font-medium text-gray-900">{product?.description}</div>
          <div className="flex flex-row gap-4 mt-5">
            <AddToCartButton product={product} />
            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
}
