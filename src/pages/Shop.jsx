import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Shop = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6 w-full h-[392px] bg-[url('/Banner1.png')] bg-no-repeat bg-cover rounded-lg overflow-hidden">
          <p className="flex gap-2 items-center">
            <span className="">Home</span>
            <IoIosArrowForward className="h-4 w-4" />
            <span>Shop</span>
          </p>
          <h1 className="text-5xl font-medium">Shop Page</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shop;
