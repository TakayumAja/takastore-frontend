import React from "react";
import ProductCard from "../atoms/ProductCard";

const ProductList = (props) => {
  const { data } = props;
  return (
    <section>
      <div className="container mx-auto px-4 my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-y-10 md:gap-x-[30px]">
        {data?.map((item, index) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
