import React from "react";
import Navbar from "./Navbar";
import Artist from "./Artist";
import {
  dataAlbums,
  dataArtist,
  dataChart,
  dataRadio,
  assets,
} from "../assets/assets";
import PopularAlbums from "./PopularAlbums";
import PopularRadio from "./PopularRadio";
import Chart from "./Chart";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center mt-8 ms-3">
        <p className="font-bold text-2xl cursor-pointer hover:underline">
          Popular artists
        </p>
        <p className="me-4 font-semibold text-sm cursor-pointer hover:underline text-slate-400">
          Show all
        </p>
      </div>
      <div className="flex overflow-hidden">
        {dataArtist.map((item, index) => (
          <Artist
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-16 ms-3">
        <p className="font-bold text-2xl cursor-pointer hover:underline">
          Popular Albums
        </p>
        <p className="me-4 font-semibold text-sm cursor-pointer hover:underline text-slate-400">
          Show all
        </p>
      </div>
      <div className="flex overflow-hidden">
        {dataAlbums.map((item, index) => (
          <PopularAlbums
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-16 ms-3">
        <p className="font-bold text-2xl cursor-pointer hover:underline">
          Popular Radio
        </p>
        <p className="me-4 font-semibold text-sm cursor-pointer hover:underline text-slate-400">
          Show all
        </p>
      </div>
      <div className="flex overflow-hidden">
        {dataRadio.map((item, index) => (
          <PopularRadio
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-16 ms-3">
        <p className="font-bold text-2xl cursor-pointer hover:underline">
          Featured Charts
        </p>
        <p className="me-4 font-semibold text-sm cursor-pointer hover:underline text-slate-400">
          Show all
        </p>
      </div>
      <div className="flex overflow-hidden">
        {dataChart.map((item, index) => (
          <Chart
            key={index}
            name={item.name}
            desc={item.desc}
            id={item.id}
            image={item.image}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="gap-16 flex ms-2">
        <div className="flex flex-col ml-6 mt-20 gap-2 ">
          <p className="font-bold">Company</p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            About
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Jobs
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            For The Record
          </p>
        </div>
        <div className="flex flex-col ml-6 mt-20 gap-2 ">
          <p className="font-bold">Communities</p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            For Artists
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Developers
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Advertising
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Advertising
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Investors
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Vendors
          </p>
        </div>
        <div className="flex flex-col ml-6 mt-20 gap-2 ">
          <p className="font-bold">Useful links</p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Support
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Free Mobile App
          </p>
        </div>
        <div className="flex flex-col ml-6 mt-20 gap-2 ">
          <p className="font-bold">Spotify Plans</p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Premium Individual
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Premium Duo
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Premium Family
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Premium Student
          </p>
          <p className="text-slate-400 hover:underline hover:text-white cursor-pointer">
            Spotify Free
          </p>
        </div>
        <div className="flex ml-auto gap-4 mt-20 me-3">
          <div className="size-10 cursor-pointer hover:bg-slate-400  bg-[#3f3f3f] rounded-full">
            <img src={assets.Ig} alt="" className="size-5 mx-auto my-2.5" />
          </div>
          <div className="size-10 cursor-pointer hover:bg-slate-400  bg-[#3f3f3f] rounded-full">
            <img
              src={assets.Twitter}
              alt=""
              className="size-5 mx-auto my-2.5"
            />
          </div>
          <div className="size-10 cursor-pointer hover:bg-slate-400  bg-[#3f3f3f] rounded-full">
            <img
              src={assets.Facebook}
              alt=""
              className="size-5 mx-auto my-2.5"
            />
          </div>
        </div>
      </div>
      <div className="h-[0.1%] w-[96%] flex mx-auto mt-10 bg-slate-500"></div>
      <div className="ms-5">
        <p className=" text-sm text-slate-400 mt-10 mb-20">© 2024 Spotify AB</p>
      </div>
    </>
  );
};

export default DisplayHome;
