import React from "react";
import { BiSolidCartAdd, BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/cart/cartSlice";

const ProductCard = (props) => {
  const { id, price, title, rating, image } = props.data;
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(addCart({ id, price, title, rating, image }));
  };

  return (
    <div
      id="card"
      className="flex flex-col justify-between group w-max-sm border border-gray-200 rounded-lg shadow overflow-hidden"
    >
      <div className="relative overflow-hidden w-[80%] mx-auto h-[200px] lg:h-[250px] p-4">
        <img
          src={image}
          alt="Shoes 1"
          className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex flex-col gap-1.5 p-4">
        <Link
          to={`/shop/${id}`}
          className="line-clamp-2 text-sm lg:text-lg font-semibold text-natural-700 hover:underline"
        >
          {title}
        </Link>
        <p className="text-sm md:text-base flex items-center gap-1 text-natural-400">
          {rating.count} reviews | {rating.rate}
          <BiSolidStar className="text-natural-500" />
        </p>
      </div>
      <p className="text-natural-700 p-4 text-lg flex items-center justify-between font-medium lg:mt-2.5">
        <span>$ {price}</span>
        <button
          className="bg-second-green p-2 rounded-lg text-white"
          onClick={handleAddCart}
        >
          <BiSolidCartAdd />
        </button>
      </p>
    </div>
  );
};

export default ProductCard;
