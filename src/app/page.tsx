import CategoriesSection from "@/Components/CategoriesSection";
import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import LatestProducts from "@/Components/LatestProducts";
import NewsLetterSection from "@/Components/NewsLetterSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <LatestProducts />
      <Features />
      <NewsLetterSection />
      <Footer />
    </>
  );
}
