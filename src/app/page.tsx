import dotenv from "dotenv";

import CategoriesSection from "@/Components/CategorySection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import LatestProducts from "@/Components/LatestProducts";
import NewsLetterSection from "@/Components/NewsLetterSection";
import { Product } from "@/helpers/sharedTypes";
import { categorizeProductData } from "@/helpers/utils";

dotenv.config();

const baseUrl = process.env.BACKEND_API;

export default async function Home() {
  console.log('baseUrl: ', baseUrl);
  const allProducts: Product[] = await fetch(`http://localhost:8080/api/products`)
    .then((response) => response.json())
    .then((data) => data);

  const categorizedProducts = categorizeProductData(allProducts);

  console.log('categorizedProducts: ', categorizedProducts);

  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection allProducts={categorizedProducts} />
      <LatestProducts allProducts={allProducts} />
      <Features />
      <NewsLetterSection />
      <Footer />
    </>
  );
}
