// eslint-disable-next-line no-unused-vars
import React from "react";

const SearchForm = () => {
  return (
    <form className="max-w-md mx-auto">
     
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border  rounded-full dark:placeholder-gray-400 dark:text-black "
          placeholder="Find things to do..."
          required
        />
       
      </div>
    </form>
  );
};

export default SearchForm;
