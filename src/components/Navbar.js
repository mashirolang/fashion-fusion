import React, { useState, useEffect } from "react";
import LogoDefault from "../assets/img/logo.png";
import LogoScrolled from "../assets/img/logo-red.png";
import { Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full ${scrolled ? "fixed bg-white" : "absolute"} z-50`}>
      <div
        className={`flex flex-row justify-between items-center ${
          scrolled ? "mx-28 my-4" : "mx-12 my-6"
        }`}
      >
        <div className="flex flex-row items-center gap-10">
          <img
            src={scrolled ? LogoScrolled : LogoDefault}
            className={`mr-2 ${scrolled ? "w-44" : "w-72"}`}
            alt="FashionFusion Logo"
          />
          <div
            className={`flex flex-row gap-10 items-center ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <p className={`font-semibold ${scrolled ? "text-[0.8rem]" : ""}`}>
              MEN
            </p>
            <p className={`font-semibold ${scrolled ? "text-[0.8rem]" : ""}`}>
              WOMEN
            </p>
            <p className={`font-semibold ${scrolled ? "text-[0.8rem]" : ""}`}>
              SALE
            </p>
            <p className={`font-semibold ${scrolled ? "text-[0.8rem]" : ""}`}>
              BRANDS
            </p>
          </div>
        </div>
        <div
          className={`flex flex-row gap-4 items-center ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Search size={scrolled ? 17 : 20} />
          <User size={scrolled ? 17 : 20} />
          <ShoppingCart size={scrolled ? 17 : 20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
