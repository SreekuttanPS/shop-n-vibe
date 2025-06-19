import Image from "next/image";
import Link from "next/link";

import AddToCartButton from "@/Components/AddToCartButton";

import { CategoryType, Product } from "@/helpers/sharedTypes";

import CreditCardIcon from "@/assets/svg/CreditCardIcon";

type Props = {
  params: {
    productId: CategoryType;
  };
};

const baseUrl = process.env.BACKEND_API;

export default async function Products({ params }: Props) {
  const { productId } =  await params;
  const product: Product = await fetch(`${baseUrl}/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => data);

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-12 md:hidden">{product?.name}</h2>
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-6">
        <Image src={product?.imageUrl} alt={product?.name} width={400} height={533} />
        <div>
          <h2 className="text-3xl font-bold text-center mb-12  hidden md:block">{product?.name}</h2>
          <div className="mt-3 font-medium text-gray-900">{product?.description}</div>
          <div className="flex flex-row gap-4 mt-5">
            <AddToCartButton product={product} />
            <Link
              href={"/cart"}
              className="text-gray-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg bg-orange-300 whitespace-nowrap cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <div className="flex items-center gap-2">
                <div>
                  <CreditCardIcon />
                </div>
                Buy Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
