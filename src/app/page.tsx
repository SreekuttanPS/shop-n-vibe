import dotenv from "dotenv";

import CategoriesSection from "@/Components/CategorySection";
import HeroSection from "@/Components/HeroSection";
import LatestProducts from "@/Components/LatestProducts";
import { Product } from "@/helpers/sharedTypes";
import { categorizeProductData } from "@/helpers/utils";

dotenv.config();

const baseUrl = process.env.BACKEND_API;

export default async function Home() {
  const allProducts: Product[] = await fetch(`${baseUrl}/api/products`)
    .then((response) => response.json())
    .then((data) => data);

  const categorizedProducts = categorizeProductData(allProducts);

  return (
    <>
      <HeroSection />
      <CategoriesSection allProducts={categorizedProducts} />
      <LatestProducts allProducts={allProducts} />
    </>
  );
}
