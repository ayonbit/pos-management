"use client";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-gray-50 focus-within:ring-blue-400 transition-all">
      <CiSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search ..."
        className="w-37.5 lg:w-50 p-2 bg-transparent outline-none text-sm"
      />
    </div>
  );
};

export default SearchBar;
