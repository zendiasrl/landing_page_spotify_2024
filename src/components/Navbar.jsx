import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="h-[11%] w-[100%] rounded-t-lg bg-[#111111] sticky top-0 z-10">
      <div className="flex justify-between items-center font-semibold h-full">
        <div className="flex items-center my-4 ms-6 gap-2">
          <img
            src={assets.leftIcon}
            alt="Spotify Icon"
            className="w-7 bg-black rounded-full cursor-pointer"
          />
          <img
            src={assets.rightIcon}
            alt="Spotify Icon"
            className="w-7 bg-black rounded-full cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-8 me-6">
          <p className="text-slate-300 hover:text-white cursor-pointer">
            Sign up
          </p>
          <div className="flex items-center cursor-pointer justify-center h-12 w-28 bg-white text-black rounded-full">
            <p>Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
