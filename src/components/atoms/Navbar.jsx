import React, { useState } from "react";
import { BiCart, BiMenu, BiSearch, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/products", name: "Products" },
    { path: "/contacts", name: "Contact Us" },
  ];

  return (
    <header className="h-20 flex sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-[#3758F9]">
          <img src={Logo} className="w-auto h-6 sm:h-7" />
        </Link>
        <nav>
          <ul
            className={`absolute md:static ${
              toggle ? "left-0 right-0" : "-left-full"
            } top-20 flex-col gap-y-5 items-center py-5 flex md:flex-row transition-all ease-linear bg-white  gap-[40px] font-medium text-[#637381]`}
          >
            {menu.map((items, index) => (
              <li key={index} onClick={() => setToggle(!toggle)}>
                <Link to={items.path}>{items.name}</Link>
              </li>
            ))}{" "}
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
