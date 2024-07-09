import React from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[24%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[35%] rounded-lg flex flex-col justify-start">
        {/* logo spotify */}
        <div className="flex items-center gap-0 pl-5 cursor-pointer mt-4">
          <img src={assets.spotifyIcon} alt="Spotify Icon" className="w-7" />
          <p className="font-bold ml-1">Spotify</p>
        </div>
        {/* logo home */}
        <div className="flex items-center gap-0 pl-5 cursor-pointer mt-4 text-slate-400 hover:text-slate-50">
          <img src={assets.homeIcon} alt="Home Icon" className="w-7" />
          <p className="font-bold ml-5">Home</p>
        </div>
        {/* logo search */}
        <div className="flex items-center gap-0 pl-5 cursor-pointer mt-5  text-slate-400 hover:text-slate-50">
          <img src={assets.searchIcon} alt="Search Icon" className="w-7 " />
          <p className="font-bold ml-5">Search</p>
        </div>
      </div>
      {/* section your library */}
      <div className="bg-[#121212] h-[72%] rounded-lg flex flex-col justify-between">
        <div className="flex items-center pl-5 cursor-pointer text-slate-400 hover:text-slate-50 mt-4">
          <img className="w-7" src={assets.libraryIcon} alt="" />
          <p className="font-bold ml-3 me-10">Your Library</p>
          <img className="w-6 ml-20" src={assets.addIcon} alt="" />
        </div>
        {/* section overscroll */}
        <div className="overflow-auto bg-[#121212] h-[32%] w-[97%] mb-auto mx-auto mt-5">
          <div className="bg-[#2e2e2e] h-[100%] w-[99%] rounded-lg flex flex-col mb-auto mx-auto ">
            <p className="pl-5 font-bold mt-4">Create your first playlist</p>
            <p className="text-sm pl-5 mt-2">it's easy, we'll help you</p>
            <div className="mt-5 ms-5 w-[45%] h-[24%] bg-white rounded-2xl cursor-pointer">
              <p className="flex justify-center font-bold text-sm text-[#000000] mt-1.5">
                Create playlist
              </p>
            </div>
          </div>
          <div className="bg-[#2e2e2e] h-[120%] w-[99%] rounded-lg flex flex-col mb-auto mx-auto mt-5 ">
            <p className="pl-5 font-bold mt-4">
              Let's find some podcasts to follow
            </p>
            <p className="text-sm pl-5 mt-2">
              We'll keep you updated on new <br /> episodes
            </p>
            <div className="mt-5 ms-5 w-[47%] h-[21%] bg-white rounded-2xl cursor-pointer">
              <p className="flex justify-center font-bold text-sm text-[#000000] mt-1.5">
                Browse podcast
              </p>
            </div>
          </div>
        </div>
        <div className="flex pl-5 text-xs mt-9 gap-4 ">
          <p className="cursor-pointer">Legal</p>
          <p className="cursor-pointer">Safety & Privacy Center</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
        <div className="flex pl-5 text-xs mt-4 gap-4 ">
          <p className="cursor-pointer">Cookies</p>
          <p className="cursor-pointer">About Ads</p>
          <p className="cursor-pointer">Accesibility</p>
        </div>
        <div className="flex pl-5 text-xs flex-grow mt-4 gap-4">
          <p className="cursor-pointer hover:underline">Cookies</p>
        </div>
        <button className="outline outline-1 hover:outline-2 flex gap-1 justify-center outline-white rounded-2xl ml-5 mb-9 h-[7%] w-[31%]">
          <img className="w-6 mt-0.5 " src={assets.globeIcon} alt="" />
          <p className="font-bold mt-1 text-sm">English</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
