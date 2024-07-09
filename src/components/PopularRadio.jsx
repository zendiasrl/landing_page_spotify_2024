import React from "react";
import { assets } from "../assets/assets";

const PopularRadio = ({ image, name, desc, id }) => {
  return (
    <div className="flex mx-auto mt-4">
      <div className="relative h-58 w-40 cursor-pointer">
        <img
          src={image}
          alt=""
          className="h-36 w-36 rounded-md mx-auto z-0 object-cover"
        />
        <div className="absolute transition hover:ease-in-out delay-150 inset-0 flex ms-28 opacity-0 hover:opacity-100 items-center justify-center">
          <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
            <img src={assets.Play} alt="" className="w-7 h-7" />
          </div>
        </div>
        <div className="ms-2 mt-2 truncate ...">
          <p className="">{name}</p>
          <p className="text-slate-400 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularRadio;
