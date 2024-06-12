import React, { useState } from "react";
import Bg1 from "../assets/img/women-bg-1.png";
import Bg2 from "../assets/img/women-bg-2.png";

import BestSeller1 from "../assets/img/best-seller-1.png";
import BestSeller2 from "../assets/img/best-seller-2.png";
import BestSeller3 from "../assets/img/best-seller-3.png";
import BestSeller4 from "../assets/img/best-seller-4.png";

import WomenTop from "../assets/img/women-page-top.png";
import WomenBottom from "../assets/img/women-page-bottom.png";
import WomenUnder from "../assets/img/women-page-underwear.png";
import WomenAccessories from "../assets/img/women-page-acc.png";

import HnM from "../assets/img/hnm-logo.png";
import Bench from "../assets/img/bench-logo.png";
import Oxgn from "../assets/img/oxgn-logo.png";
import Penshoppe from "../assets/img/penshoppe-logo.png";
import Uniqlo from "../assets/img/uniqlo-logo.png";
import { Link } from "react-router-dom";

const logos = [
  <img src={Bench} className="w-60" />,
  <img src={Penshoppe} className="w-24" />,
  <img src={Oxgn} className="w-28" />,
  <img src={Uniqlo} className="w-24" />,
  <img src={HnM} className="w-32" />,
];

function Women() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleLogos = logos.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < logos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div
          style={{ backgroundImage: `url('${Bg1}')` }}
          className="bg-cover bg-center relative"
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link to="/shop/women">
              <button className="px-4 py-2 underline font-bold lg:text-xl text-white rounded">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url('${Bg2}')` }}
          className="bg-cover bg-center relative"
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link to="/shop/women">
              <button className="px-4 py-2 underline font-bold lg:text-xl text-white rounded">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-6 w-10/12 mx-auto">
        <p className="text-center my-2 text-lg font-medium">Shop By Brands</p>
        <div className="flex flex-row p-4 items-center justify-evenly">
          <img src={Bench} className="w-60" />
          <img src={Penshoppe} className="w-24" />
          <img src={Oxgn} className="w-28" />
          <img src={Uniqlo} className="w-24" />
          <img src={HnM} className="w-32" />
        </div>
      </div>

      <div className="my-6 w-10/12 mx-auto">
        <div className="flex flex-row gap-3 text-sm">
          <p className="font-semibold">New Arrivals</p>
          <div className="border-[1px] border-solid border-black"></div>
          <p>Best Sellers</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 justify-items-center">
          <div className="flex flex-col items-start">
            <img src={BestSeller1} className="w-64" />
            <div className="w-10/12">
              <p className="text-gray-600">
                Oversized Striped Half Sleeve T-Shirt
              </p>
              <p className="text-sm text-gray-400">₱290.00</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src={BestSeller2} className="w-64" />
            <div className="w-10/12">
              <p className="text-gray-600">
                Oversized Striped Half Sleeve T-Shirt
              </p>
              <p className="text-sm text-gray-400">₱290.00</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src={BestSeller3} className="w-64" />
            <div className="w-10/12">
              <p className="text-gray-600">
                Oversized Striped Half Sleeve T-Shirt
              </p>
              <p className="text-sm text-gray-400">₱290.00</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <img src={BestSeller4} className="w-64" />
            <div className="w-10/12">
              <p className="text-gray-600">
                Oversized Striped Half Sleeve T-Shirt
              </p>
              <p className="text-sm text-gray-400">₱290.00</p>
            </div>
          </div>
        </div>

        <Link to="/shop/women">
          <div className="flex justify-center items-center my-6">
            <p className="py-2 px-16 border-black border-[1px] hover:bg-black hover:text-white cursor-pointer text-center inline-block">
              SEE MORE
            </p>
          </div>
        </Link>

        <div className="mb-6 mt-12 w-11/12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <Link to="/shop/women">
              <div className="flex flex-col items-center gap-3 hover:scale-105">
                <img src={WomenTop} className="w-72" />
                <p className="text-gray-400 underline">Tops</p>
              </div>
            </Link>
            <Link to="/shop/women">
              <div className="flex flex-col items-center gap-3 mt-10 hover:scale-105">
                <img src={WomenBottom} className="w-72" />
                <p className="text-gray-400 underline">Bottoms</p>
              </div>
            </Link>
            <Link to="/shop/women">
              <div className="flex flex-col items-center gap-3 hover:scale-105">
                <img src={WomenUnder} className="w-72" />
                <p className="text-gray-400 underline">
                  Underwear & Loungewear
                </p>
              </div>
            </Link>
            <Link to="/shop/women">
              <div className="flex flex-col items-center gap-3 mt-10 hover:scale-105">
                <img src={WomenAccessories} className="w-72" />
                <p className="text-gray-400 underline">Accessories</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Women;
