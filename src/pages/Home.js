import React from "react";
import Bg from "../assets/img/bg.jpg";
import HnM from "../assets/img/hnm-logo.png";
import Bench from "../assets/img/bench-logo.png";
import Oxgn from "../assets/img/oxgn-logo.png";
import Penshoppe from "../assets/img/penshoppe-logo.png";
import Uniqlo from "../assets/img/uniqlo-logo.png";

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
    </>
  );
}

export default Home;
