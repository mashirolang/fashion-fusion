import React from "react";
import Logo from "../assets/img/logo.png";
import { Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
  return (
    <div className="absolute w-full">
      <div className="mx-12 my-6 flex flex-row justify-between items-center">
        <img src={Logo} className="w-72" alt="FashionFusion Logo" />
        <div className="flex flex-row text-white gap-10 items-center">
          <p className="font-semibold">MEN</p>
          <p className="font-semibold">WOMEN</p>
          <p className="font-semibold">SALE</p>
          <p className="font-semibold">BRANDS</p>
        </div>

        <div className="flex flex-row text-white gap-4 items-center">
          <Search size={20} />
          <User size={20} />
          <ShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
