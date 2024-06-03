import React from "react";
import Bg from "../assets/img/bg.jpg";
import HnM from "../assets/img/hnm-logo.png";
import Bench from "../assets/img/bench-logo.png";
import Oxgn from "../assets/img/oxgn-logo.png";
import Penshoppe from "../assets/img/penshoppe-logo.png";
import Uniqlo from "../assets/img/uniqlo-logo.png";

import MenTop from "../assets/img/men-top.png";
import MenBottom from "../assets/img/men-bottom.png";
import WomenTop from "../assets/img/women-top.png";
import WomenBottom from "../assets/img/women-bottom.png";

import BestSeller1 from "../assets/img/best-seller-1.png";
import BestSeller2 from "../assets/img/best-seller-2.png";
import BestSeller3 from "../assets/img/best-seller-3.png";
import BestSeller4 from "../assets/img/best-seller-4.png";

function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url('${Bg}')` }}
        className="h-screen bg-cover bg-center"
      >
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button className="px-4 py-2 bg-black text-white rounded">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="my-6 w-10/12 mx-auto">
        <p className="text-center my-2 text-lg font-medium">Available Brands</p>
        <div className="border-black border-solid border-[1px] flex flex-row p-4 items-center justify-evenly">
          <img src={Bench} className="w-60" />
          <img src={Penshoppe} className="w-24" />
          <img src={Oxgn} className="w-28" />
          <img src={Uniqlo} className="w-24" />
          <img src={HnM} className="w-32" />
        </div>
      </div>

      <div className="my-6 w-9/12 mx-auto">
        <p className="text-center my-2 text-lg font-medium">New Arrivals</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-col items-center gap-3">
            <img src={MenTop} className="w-72" />
            <p className="text-gray-400 underline">MEN'S TOP</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={MenBottom} className="w-72" />
            <p className="text-gray-400 underline">MEN'S BOTTOMS</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={WomenTop} className="w-72" />
            <p className="text-gray-400 underline">WOMEN'S TOP</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={WomenBottom} className="w-72" />
            <p className="text-gray-400 underline">WOMEN'S BOTTOMS</p>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        <p className="text-center text-lg font-medium">Best Sellers</p>
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
      </div>
    </>
  );
}

export default Home;
