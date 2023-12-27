import React from "react";
import { Shoses1 } from "../../assets";
import { BiSolidCartAdd, BiSolidStar } from "react-icons/bi";

const ProductCard = () => {
  return (
    <div
      id="card"
      className="group w-max-sm border border-gray-200 rounded-lg shadow p-6 overflow-hidden"
    >
      <img
        src={Shoses1}
        alt="Shoes 1"
        className="mb-5 max-w-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="flex flex-col gap-1.5">
        <p className="text-sm lg:text-lg font-semibold">Leather Court Shoes</p>
        <p className="text-sm md:text-base flex items-center gap-1 text-[#637381]">
          14 reviews | <BiSolidStar className="text-yellow-300" />
        </p>
      </div>
      <p className="text-lg flex items-center justify-between font-medium mt-2.5">
        <span>$39.00</span>
        <button className="bg-green-800 p-2 rounded-lg text-white">
          <BiSolidCartAdd />
        </button>
      </p>
    </div>
  );
};

export default ProductCard;
