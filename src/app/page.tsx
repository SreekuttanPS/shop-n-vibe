import CategoriesSection from "@/Components/CategorySection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import LatestProducts from "@/Components/LatestProducts";
import NewsLetterSection from "@/Components/NewsLetterSection";
import { Product } from "@/helpers/sharedTypes";
import { categorizeProductData } from "@/helpers/utils";

export default async function Home() {
  const response: Product[] = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => data);

  const categorizedProducts = categorizeProductData(response);

  console.log("response: ", response);
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection allProducts={categorizedProducts} />
      <LatestProducts />
      <Features />
      <NewsLetterSection />
      <Footer />
    </>
  );
}
