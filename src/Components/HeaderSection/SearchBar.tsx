"use client";
import SearchIcon from "@/assets/svg/SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative">
      <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
        <SearchIcon />
      </button>
      <div className="absolute right-0 top-full mt-2 w-72 bg-white shadow-lg rounded p-2">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            placeholder="Search products..."
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-400">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
