import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { Shoses1 } from "../../assets";

const CartModal = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium mt-4">Cart</h1>
      <div id="cardlist" className="">
        <div id="card" className="py-6 border-b border-b-gray-200 mb-6">
          <div className="flex gap-4">
            <img
              className="w-20 h-24 rounded-lg p-2 object-contain object-center bg-gray-200"
              src={Shoses1}
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold">Tray Table</p>
                <p className="text-xs text-gray-500">Color: Black</p>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    aria-label="Minus Item"
                    className="px-3 py-2 leading-normal"
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="text-sm">1</p>
                  <button
                    type="button"
                    aria-label="Add Item"
                    className="px-3 py-1.5 leading-normal"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">$19.19</p>
                <button className="">
                  <AiOutlineClose className="text-lg ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="py-6 border-b border-b-gray-200 mb-6">
          <div className="flex gap-4">
            <img
              className="w-20 h-24 rounded-lg p-2 object-contain object-center bg-gray-200"
              src={Shoses1}
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold">Tray Table</p>
                <p className="text-xs text-gray-500">Color: Black</p>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    aria-label="Minus Item"
                    className="px-3 py-2 leading-normal"
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="text-sm">1</p>
                  <button
                    type="button"
                    aria-label="Add Item"
                    className="px-3 py-1.5 leading-normal"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">$19.19</p>
                <button className="">
                  <AiOutlineClose className="text-lg ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="card" className="py-6 border-b border-b-gray-200 mb-6">
          <div className="flex gap-4">
            <img
              className="w-20 h-24 rounded-lg p-2 object-contain object-center bg-gray-200"
              src={Shoses1}
            />
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-between">
                <p className="text-sm font-semibold">Tray Table</p>
                <p className="text-xs text-gray-500">Color: Black</p>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    aria-label="Minus Item"
                    className="px-3 py-2 leading-normal"
                  >
                    <AiOutlineMinus />
                  </button>
                  <p className="text-sm">1</p>
                  <button
                    type="button"
                    aria-label="Add Item"
                    className="px-3 py-1.5 leading-normal"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold">$19.19</p>
                <button className="">
                  <AiOutlineClose className="text-lg ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
