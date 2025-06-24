import Image from "next/image";
import React from "react";

// import heroImage from "@/assets/images/Main-optimized.webp";
import heroImage from "@/assets/images/hero_image.webp";

function HeroSection() {
  return (
    <section className="flex bg-[#FCFAF6] justify-center relative">
      <div className="w-[90%] py-6 px-5 bg-[#ffffffc7] md:bg-transparent rounded-xl flex flex-col items-center justify-center absolute left-[50%] bottom-0 md:static md:top-[50%] transform translate-x-[-50%] md:translate-none">
        <h1 className="text-center text-xl md:text-4xl font-bold text-gray-900 mb-4">Summer Collection 2025</h1>
        <p className="text-sm md:text-lg text-gray-600 w-[250px] md:w-[400px] lg:w-[500px] text-center mb-5">
          Discover the latest trends in fashion and electronics with our new summer collection. Up to 40% off on selected items.
        </p>
        <div className="flex">
          <button className="text-[12px] cursor-pointer md:text-lg rounded bg-green-300 px-4 md:py-3 mg:mx-2 mx-1 py-1">Shop Now</button>
          <button className="text-[12px] cursor-pointer md:text-lg rounded bg-green-300 px-4 md:py-3 mg:mx-2 mx-1 py-1">View Lookbook</button>
        </div>
      </div>

      <div className="">
        <Image alt="Hero Section Image" src={heroImage} />
      </div>
    </section>
  );
}

export default HeroSection;
