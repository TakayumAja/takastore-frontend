import React from "react";
import { useParams } from "react-router-dom";
import { BiHeart, BiSolidStar } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import { useGetProductsDetailQuery } from "../features/products/productApi";
import { Spinner } from "../components";
import { Shoses1, Shoses2, Shoses3, Shoses4 } from "../assets";
import { useDispatch } from "react-redux";
import { addCart } from "../features/cart/cartSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductsDetailQuery(id);
  const dispactch = useDispatch();

  const handlerCountProducts = (e) => {
    console.log(e.target.value);
  };

  let content;

  if (isLoading) {
    content = (
      <div className="flex flex-1 items-center justify-center">
        <Spinner />
      </div>
    );
  } else {
    content = (
      <div className="container mx-auto flex flex-col lg:flex-row md:gap-[63px] px-4">
        {/* Placeholder Image*/}
        <div className="basis-1/2">
          <div className="mb-4 md:mb-0">
            <img
              src={data.image}
              className="rounded-lg object-cover object-center w-auto h-[310px]md:h-[728px]"
            />
            <ul className="md:flex mt-4 gap-4 hidden">
              <li className="w-[176px] h-[176px] overflow-hidden rounded-lg">
                <img
                  src="https://tsbsankara-e-commerce-yt.netlify.app/images/image-product-2.jpg"
                  className="w-full object-cover"
                />
              </li>
              <li className="w-[176px] h-[176px] overflow-hidden rounded-lg">
                <img
                  src="https://tsbsankara-e-commerce-yt.netlify.app/images/image-product-2.jpg"
                  className="w-full object-cover"
                />
              </li>
              <li className="w-[176px] h-[176px] overflow-hidden rounded-lg">
                <img
                  src="https://tsbsankara-e-commerce-yt.netlify.app/images/image-product-2.jpg"
                  className="w-full object-cover"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* Product Info*/}
        <div className="basis-1/2">
          {/* Info */}
          <div className="space-y-4 pb-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2.5">
              <div className="flex text-base gap-0.5">
                <BiSolidStar className="text-natural-700 h-4 w-4" />
                <BiSolidStar className="text-natural-700 h-4 w-4" />
                <BiSolidStar className="text-natural-700 h-4 w-4" />
                <BiSolidStar className="text-natural-700 h-4 w-4" />
              </div>
              <p className="text-natural-700 text-sm font-normal leading-5">
                {data.rating.rate} Riviews
              </p>
            </div>
            <h1 className="text-4xl text-natural-700 font-medium">
              {data.title}
            </h1>
            <p className="font-normal text-base text-natural-400 leading-[26px]">
              {data.description}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[28px] font-medium leading-[34px] text-natural-700">
                ${data.price}
              </p>
              <p className="text-xl leading-[28px] font-medium text-natural-400 line-through">
                $400
              </p>
            </div>
          </div>

          {/* Product Timer */}
          <div className="py-6 border-y border-y-natural-300 space-y-3">
            <p className="text-natural-500 font-normal text-[26px]">
              Offer expires in:
            </p>
            <ul className="flex gap-4">
              <li className="text-center">
                <p className="text-[34px] bg-natural-200 text-natural-700 p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-natural-400">
                  Days
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-natural-200 text-natural-700 p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-natural-400">
                  Hours
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-natural-200 text-natural-700 p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-natural-400">
                  Minutes
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-natural-200 text-natural-700 p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-natural-400">
                  Seconds
                </p>
              </li>
            </ul>
          </div>

          {/* Product Examples*/}
          <div className="py-6">
            <p className="text-natural-400 font-semibold text-base leading-[26px] mb-2">
              Measurements
            </p>
            <p className="leading-[32px] text-lg mb-6 text-natural-700">
              17 1/2x20 5/8
            </p>
            <button className="flex items-center gap-1 leading-[26px] font-semibold text-base text-natural-400 mb-2">
              <span>Choose Color</span>
              <IoIosArrowForward className="h-6 w-4" />
            </button>
            <p className="leading-[32px] text-lg font-normal text-natural-700">
              Black
            </p>
            <div className="flex gap-4">
              <div className="h-[72px] w-[72px] border">
                <img
                  src={Shoses1}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="h-[72px] w-[72px] border">
                <img
                  src={Shoses3}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="h-[72px] w-[72px] border">
                <img
                  src={Shoses4}
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="h-[72px] w-[72px] border">
                <img
                  src={Shoses2}
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          {/* Proudct Cart*/}
          <div className="py-6">
            <div className="flex gap-2 mb-4">
              <div className="flex items-center justify-between border gap-6 px-4">
                <button className="text-xl">+</button>
                <input
                  onChange={handlerCountProducts}
                  value={1}
                  className="w-5 text-center"
                />
                <button className="text-xl">-</button>
              </div>
              <p className="grow py-2.5 rounded-lg flex items-center border justify-center gap-2 font-medium">
                <BiHeart className="h-5 w-5" />
                <span className="text-lg">Wishlist</span>
              </p>
            </div>
            <button
              onClick={() => dispactch(addCart())}
              className="w-full flex items-center justify-center px-10 py-3 border rounded-lg bg-black text-white font-medium text-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Proudct Stock & Category*/}
          <div className="py-6 space-y-2">
            <p className="flex text-xs leading-5">
              <span className="basis-1/4 text-natural-400">SKU</span>
              <span className="grow text-natural-700">{data.rating.count}</span>
            </p>
            <p className="flex text-xs leading-5">
              <span className="basis-1/4 text-natural-400">CATEGORY</span>
              <span className="grow text-natural-700">{data.category}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <section className="py-10 flex flex-1">{content}</section>;
};

export default DetailProduct;
