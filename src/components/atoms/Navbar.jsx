import React, { useState } from "react";
import { BiCart, BiMenu, BiSearch, BiX } from "react-icons/bi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="h-20 flex">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="font-bold text-2xl text-[#3758F9]">takastore</p>
        <nav>
          <ul
            className={`absolute md:static ${
              toggle ? "left-0 right-0" : "-left-full"
            } top-20 flex-col gap-y-5 items-center py-5 flex md:flex-row transition-all ease-linear bg-white  gap-[40px] font-medium text-[#637381]`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-3xl text-[#637381]"
          onClick={() => setToggle(!toggle)}
        >
          {!toggle ? <BiMenu /> : <BiX />}
        </button>
        <div className="hidden md:flex items-center gap-[25px]">
          <BiSearch className="text-[#637381] text-2xl" />
          <BiCart className="text-[#637381] text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
