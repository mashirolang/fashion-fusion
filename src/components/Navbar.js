import React, { useState, useEffect } from "react";
import LogoDefault from "../assets/img/logo.png";
import LogoScrolled from "../assets/img/logo-red.png";
import { Search, ShoppingCart, User } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isShopRoute = location.pathname.includes("/shop");

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
    <div
      className={`w-full ${
        scrolled || isShopRoute ? "fixed bg-white" : "absolute"
      } z-50`}
    >
      <div
        className={`flex flex-row justify-between items-center ${
          scrolled ? "mx-28 my-4" : "mx-12 my-6"
        }`}
      >
        <div className="flex flex-row items-center gap-10">
          <img
            src={scrolled || isShopRoute ? LogoScrolled : LogoDefault}
            className={`mr-2 ${scrolled || isShopRoute ? "w-44" : "w-72"}`}
            alt="FashionFusion Logo"
          />
          <div
            className={`flex flex-row gap-10 items-center ${
              scrolled || isShopRoute ? "text-black" : "text-white"
            }`}
          >
            <p
              className={`font-semibold ${
                scrolled || isShopRoute ? "text-[0.8rem]" : ""
              }`}
            >
              MEN
            </p>
            <p
              className={`font-semibold ${
                scrolled || isShopRoute ? "text-[0.8rem]" : ""
              }`}
            >
              WOMEN
            </p>
            <p
              className={`font-semibold ${
                scrolled || isShopRoute ? "text-[0.8rem]" : ""
              }`}
            >
              SALE
            </p>
            <p
              className={`font-semibold ${
                scrolled || isShopRoute ? "text-[0.8rem]" : ""
              }`}
            >
              BRANDS
            </p>
          </div>
        </div>
        <div
          className={`flex flex-row gap-4 items-center ${
            scrolled || isShopRoute ? "text-black" : "text-white"
          }`}
        >
          <Search size={scrolled || isShopRoute ? 17 : 20} />
          <User size={scrolled || isShopRoute ? 17 : 20} />
          <ShoppingCart size={scrolled || isShopRoute ? 17 : 20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
