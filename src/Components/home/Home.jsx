// eslint-disable-next-line no-unused-vars
import React from "react";
import { Nav } from "../nav/Nav";
import { Header } from "../header/Header";
import { Category } from "../category/Category";
import SearchForm from "../searchForm/SearchForm";
import { Card } from "../card/Card";
import { Recommended } from "../card/Recommended/recommended";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-screen-lg p-2">
        <div>
          <Nav />
        </div>
        <div>
          <Header />
        </div>
        <div className="mt-4">
          <SearchForm />
        </div>
        <div className="mt-5">
          <Category />
        </div>
        <div className="mt-7">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Popular</p>
            <p className=" font-bold text-blue-500">See all</p>
          </div>
          <div>
            <Card />
          </div>
        </div>

        <div className="mt-7">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">Recommended</p>
            <p className=" font-bold text-blue-500">See all</p>
          </div>
          <div>
            <Recommended />
          </div>
        </div>
      </div>
    </div>
  );
};
