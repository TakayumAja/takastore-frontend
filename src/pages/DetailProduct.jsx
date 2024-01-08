import React from "react";
import { BiHeart, BiSolidStar } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Shoses1, Shoses2, Shoses3, Shoses4 } from "../assets";

const DetailProduct = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col lg:flex-row md:gap-[63px] px-4">
        <div className="basis-1/2">
          <div className="mb-4 md:mb-0">
            <img
              src="https://tsbsankara-e-commerce-yt.netlify.app/images/image-product-2.jpg"
              className="rounded-lg object-cover object-center h-[311px]md:h-[728px]"
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
        <div className="basis-1/2">
          <div className="space-y-4 pb-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2.5">
              <div className="flex text-base gap-0.5">
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
                <BiSolidStar />
              </div>
              <p className="text-[#1417178] text-sm font-normal leading-5">
                11 Riviews
              </p>
            </div>
            <h1 className="text-4xl font-medium">
              Fall Limited Edition Sneakers
            </h1>
            <p className="font-normal text-base text-[#6C7275] leading-[26px]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[28px] font-medium leading-[34px]">$199.000</p>
              <p className="text-xl leading-[28px] font-medium text-[#6C7275] line-through">
                $400
              </p>
            </div>
          </div>

          <div className="py-6 border-y border-y-[##E8ECEF] space-y-3">
            <p className="text-[#343839] font-normal text-[26px]">
              Offer expires in:
            </p>
            <ul className="flex gap-4">
              <li className="text-center">
                <p className="text-[34px] bg-[#F3F5F7] text-black p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-[#6C7275]">
                  Days
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-[#F3F5F7] text-black p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-[#6C7275]">
                  Hours
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-[#F3F5F7] text-black p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-[#6C7275]">
                  Minutes
                </p>
              </li>
              <li className="text-center">
                <p className="text-[34px] bg-[#F3F5F7] text-black p-3 font-medium leading-[#38px] tracking-[-0.0375em]">
                  02
                </p>
                <p className="text-xs font-normal leading-5 text-[#6C7275]">
                  Seconds
                </p>
              </li>
            </ul>
          </div>

          <div className="py-6">
            <p className="text-[#6C7275] font-semibold text-base leading-[26px] mb-2">
              Measurements
            </p>
            <p className="leading-[32px] text-lg mb-6">17 1/2x20 5/8</p>
            <button className="flex items-center gap-1 leading-[26px] font-semibold text-base text-[#6C7275] mb-2">
              <span>Choose Color</span>
              <IoIosArrowForward className="h-6 w-4" />
            </button>
            <p className="leading-[32px] text-lg font-normal">Black</p>
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

          <div className="py-6">
            <div className="flex gap-2 mb-4">
              <div className="flex items-center justify-between border gap-6 px-4">
                <button className="text-xl">+</button>
                <input value={1} className="w-5 text-center" />
                <button className="text-xl">-</button>
              </div>
              <p className="grow py-2.5 rounded-lg flex items-center border justify-center gap-2 font-medium">
                <BiHeart className="h-5 w-5" />
                <span className="text-lg">Wishlist</span>
              </p>
            </div>
            <p className="flex items-center justify-center px-10 py-3 border rounded-lg bg-black text-white font-medium text-lg">
              Add to Cart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
