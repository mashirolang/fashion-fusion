import { ChevronDown, ChevronRight, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  let { code } = useParams();
  const [data, setData] = useState({});

  const [dropdownVisible, setDropdownVisible] = useState({
    details: true,
    shipping: false,
    payments: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const details = await fetch(
        "https://fashion-fusion-api-ng16.onrender.com/api/product-details?code=" +
          code
      ).then((x) => x.json());

      setData(details);
      console.log(details);
    };

    fetchData();
  }, []);

  const handleDropdownToggle = (dropdown) => {
    setDropdownVisible({
      ...dropdownVisible,
      [dropdown]: !dropdownVisible[dropdown],
    });
  };

  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div className="mb-4">
        <p>
          Home {"> "} {data.name}
        </p>
      </div>

      <div className="border border-gray-300 flex flex-row max-md:flex-col">
        <div className="w-1/2 max-md:w-full p-8">
          <img src={data.image} />
        </div>
        <div className="w-1/2 max-md:w-full px-4 py-8">
          <p className="text-3xl font-semibold mb-2">{data.name}</p>
          <p className="text-xs text-gray-400">SKU {data.sku}</p>

          <div className="mt-4 mb-6 flex flex-row gap-4 items-center">
            <p className="text-xl">{data.price}</p>
            <p className="text-red-500 line-through text-sm">{data.oldPrice}</p>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-sm mb-1">SIZE</p>
            <div className="flex flex-row gap-2">
              <button
                className={`px-4 py-2 text-xs border  ${
                  true ? "bg-black text-white" : "bg-gray-300"
                }`}
              >
                S
              </button>

              <button className={`px-4 py-2 text-xs border bg-gray-300`}>
                M
              </button>

              <button className={`px-4 py-2 text-xs border bg-gray-300`}>
                L
              </button>

              <button className={`px-4 py-2 text-xs border bg-gray-300`}>
                XL
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold text-sm mb-1">QUANTITY</p>
            <div class="relative w-32">
              <span class="absolute inset-y-0 left-0 flex items-center cursor-pointer px-4 text-gray-700 text-2xl hover:bg-black hover:text-white">
                &#8722;
              </span>
              <input
                type="number"
                class="w-full px-12 py-2 border rounded-md text-center hide-arrow"
                placeholder="1"
              />
              <span class="absolute inset-y-0 right-0 flex items-center cursor-pointer px-4 text-gray-700 text-2xl hover:bg-black hover:text-white">
                &#43;
              </span>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-sm text-green-500 mb-1">Available</p>
            <div className="flex flex-row justify-center items-center gap-5 w-4/5">
              <div className="bg-black cursor-pointer text-white py-2 w-full hover:text-black hover:bg-white border border-black">
                <p className="text-center font-semibold h-full">ADD TO CART</p>
              </div>
              <div className="px-4 border border-black py-3 hover:text-red-500 cursor-pointer">
                <Heart size={16} />
              </div>
            </div>
          </div>

          <div>
            <div className="border-b border-t border-gray-300 py-4">
              <div
                onClick={() => handleDropdownToggle("details")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span className="font-semibold">DETAILS</span>
                {dropdownVisible.details ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.details && (
                <div className="mt-2">
                  {data.description &&
                    data.description.map((x) => <p className="text-sm">{x}</p>)}
                </div>
              )}
            </div>

            <div className="border-b border-t border-gray-300 py-4">
              <div
                onClick={() => handleDropdownToggle("shipping")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span className="font-semibold">SHIPPING</span>
                {dropdownVisible.shipping ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.shipping && (
                <p className="text-sm text-gray-500 mt-2">
                  Delivery within Metro Manila shall take three (3) to seven (7)
                  business days. Provincial area deliveries will have duration
                  of five (5) to ten (10) business days. All periods shall
                  commence from the day of pick-up from our warehouse.
                </p>
              )}
            </div>

            <div className="mb-4 border-b border-t border-gray-300 py-4">
              <div
                onClick={() => handleDropdownToggle("payments")}
                className="cursor-pointer text-sm flex justify-between items-center"
              >
                <span className="font-semibold">PAYMENTS</span>
                {dropdownVisible.payments ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>
              {dropdownVisible.payments && (
                <div>
                  <p className="text-sm mt-2">
                    We offer a variety of payment options:
                  </p>
                  <ul className="list-disc text-sm text-gray-500 px-10 py-1">
                    <li>Cash On Delivery</li>
                    <li>Bank Transfer</li>
                    <li>Gcash</li>
                    <li>Maya</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
