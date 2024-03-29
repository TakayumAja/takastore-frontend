import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ProductList, Spinner } from "../components";

const Shop = () => {
  return (
    <section className="py-10 flex-1 flex">
      <div className="container mx-auto px-4 flex flex-col flex-1">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full h-[308px] md:h-[392px] bg-[url('/Banner1.png')] bg-no-repeat bg-cover rounded-lg overflow-hidden">
          <p className="flex gap-2 text-natural-400 items-center">
            <span className="">Home</span>
            <IoIosArrowForward className="h-4 w-4" />
            <span>Shop</span>
          </p>
          <h1 className="md:text-5xl text-3xl font-medium text-primary">
            Shop Page
          </h1>
          <p className="text-base md:text-lg text-nafultural-500 text-center">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <div className="flex-1 flex items-center">
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default Shop;
