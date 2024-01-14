import React from "react";
import ProductCard from "../atoms/ProductCard";
import Spinner from "../atoms/Spinner";
import { useGetProductsQuery } from "../../features/products/productApi";

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto px-4 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10 md:gap-x-[30px]">
          {data?.map((item, index) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductList;
