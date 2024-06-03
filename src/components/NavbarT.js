import React from "react";
import Logo from "../assets/img/logo-red.png";
import { Search, ShoppingCart, User } from "lucide-react";

function NavbarT() {
  return (
    <div className="fixed bg-white w-full">
      <div className="mx-28 my-4 flex flex-row justify-between items-center">
        <div className="flex flex-row text-black gap-10 items-center">
          <img src={Logo} className="w-44 mr-2" alt="FashionFusion Logo" />
          <p className="text-[0.8rem] font-semibold">MEN</p>
          <p className="text-[0.8rem] font-semibold">WOMEN</p>
          <p className="text-[0.8rem] font-semibold">SALE</p>
          <p className="text-[0.8rem] font-semibold">BRANDS</p>
        </div>

        <div className="flex flex-row text-black gap-6 items-center">
          <Search size={17} />
          <User size={17} />
          <ShoppingCart size={17} />
        </div>
      </div>
    </div>
  );
}

export default NavbarT;
