import React from "react";
import Link from "next/link";

import GoToCartButton from "@/Components/HeaderSection/GoToCartButton";
// import SearchBar from "@/Components/HeaderSection/SearchBar";
// import UserButton from "@/Components/HeaderSection/UserButton";
import Toast from "@/Components/Toast";

import MenuIcon from "@/assets/svg/MenuIcon";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-['Pacifico'] text-2xl text-primary">
            Shop N Vibe
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium text-gray-900 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/category/clothing_men" className="font-medium text-gray-500 hover:text-primary transition-colors">
              Men
            </Link>
            <Link href="/category/electronics" className="font-medium text-gray-500 hover:text-primary transition-colors">
              Electronics
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* <SearchBar /> */}
            <GoToCartButton />
            {/* <UserButton /> */}

            {/* Mobile Menu Button */}
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      <Toast />
    </header>
  );
}

export default Header;
