import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductList = () => {
  return (
    <section>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10 md:gap-x-[30px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductList;
