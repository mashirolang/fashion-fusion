import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

function Home() {
  const [menItems, setMenItems] = useState([]);
  const [womenItems, setWomenItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const menResponses = await fetch(
          "https://fashion-fusion-api-ng16.onrender.com/api/men"
        ).then((x) => x.json());
        const womenResponses = await fetch(
          "https://fashion-fusion-api-ng16.onrender.com/api/women"
        ).then((x) => x.json());

        const menSeperated = [];
        const womenSeperated = [];

        const categories = ["Tops", "Bottoms", "Underwear", "Accessories"];
        const brands = ["H&M", "Bench", "Oxgn", "Penshoppe", "Uniqlo"];

        const getRandomBrand = () =>
          brands[Math.floor(Math.random() * brands.length)];

        // Assuming menResponses and womenResponses are arrays of arrays
        for (let col = 0; col < menResponses[0].length; col++) {
          for (let row = 0; row < menResponses.length; row++) {
            const item = {
              ...menResponses[row][col],
              category: categories[row],
              brand: getRandomBrand(),
            };
            menSeperated.push(item);
          }
        }

        for (let col = 0; col < womenResponses[0].length; col++) {
          for (let row = 0; row < womenResponses.length; row++) {
            const item = {
              ...womenResponses[row][col],
              category: categories[row],
              brand: getRandomBrand(),
            };
            womenSeperated.push(item);
          }
        }

        setMenItems(menSeperated);
        setWomenItems(womenSeperated);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

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
          <Link to="/shop/men">
            <div className="flex flex-col items-center gap-3 hover:scale-105">
              <img src={MenTop} className="w-72" />
              <p className="text-gray-400 underline">MEN'S TOP</p>
            </div>
          </Link>
          <Link to="/shop/men">
            <div className="flex flex-col items-center gap-3 hover:scale-105">
              <img src={MenBottom} className="w-72" />
              <p className="text-gray-400 underline">MEN'S BOTTOMS</p>
            </div>
          </Link>
          <Link to="/shop/women">
            <div className="flex flex-col items-center gap-3 hover:scale-105">
              <img src={WomenTop} className="w-72" />
              <p className="text-gray-400 underline">WOMEN'S TOP</p>
            </div>
          </Link>
          <Link to="/shop/women">
            <div className="flex flex-col items-center gap-3 hover:scale-105">
              <img src={WomenBottom} className="w-72" />
              <p className="text-gray-400 underline">WOMEN'S BOTTOMS</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-9/12 mx-auto">
        <p className="text-center text-lg font-medium">Best Sellers</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 justify-items-center">
          {menItems.length > 0 &&
            menItems.slice(0, 6).map((x) => (
              <div className="flex flex-col items-center">
                <Link
                  to={`/details/${x.details.replace(
                    "https://shop.bench.com.ph/",
                    ""
                  )}`}
                >
                  <img
                    src={x.image}
                    className="w-64 hover:scale-105 cursor-pointer"
                  />
                </Link>
                <div className="w-10/12">
                  <Link
                    to={`/details/${x.details.replace(
                      "https://shop.bench.com.ph/",
                      ""
                    )}`}
                  >
                    <p className="text-gray-600 hover:text-red-400 cursor-pointer">
                      {x.name}
                    </p>
                  </Link>
                  <div className="flex flex-row gap-2">
                    <p className="text-sm text-gray-400">{x.price}</p>
                    <p className="text-xs text-red-500 line-through">
                      {x.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          {womenItems.length > 0 &&
            womenItems.slice(0, 6).map((x) => (
              <div className="flex flex-col items-center">
                <Link
                  to={`/details/${x.details.replace(
                    "https://shop.bench.com.ph/",
                    ""
                  )}`}
                >
                  <img
                    src={x.image}
                    className="w-64 hover:scale-105 cursor-pointer"
                  />
                </Link>
                <div className="w-10/12">
                  <Link
                    to={`/details/${x.details.replace(
                      "https://shop.bench.com.ph/",
                      ""
                    )}`}
                  >
                    <p className="text-gray-600 hover:text-red-400 cursor-pointer">
                      {x.name}
                    </p>
                  </Link>
                  <div className="flex flex-row gap-2">
                    <p className="text-sm text-gray-400">{x.price}</p>
                    <p className="text-xs text-red-500 line-through">
                      {x.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Home;
