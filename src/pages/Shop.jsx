import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ProductList } from "../components";
import { useGetProductsQuery } from "../features/products/productApi";

const Shop = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();

  console.log("data: ", data);
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full h-[308px] md:h-[392px] bg-[url('/Banner1.png')] bg-no-repeat bg-cover rounded-lg overflow-hidden">
          <p className="flex gap-2 items-center">
            <span className="">Home</span>
            <IoIosArrowForward className="h-4 w-4" />
            <span>Shop</span>
          </p>
          <h1 className="md:text-5xl text-3xl font-medium">Shop Page</h1>
          <p className="text-base md:text-lg text-gray-700 text-center">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <ProductList data={data} />
      </div>
    </section>
  );
};

export default Shop;
