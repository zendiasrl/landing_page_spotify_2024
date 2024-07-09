import React from "react";

const Player = () => {
  return (
    <div className="h-[9%] w-[99%] flex justify-between items-center mx-auto bg-gradient-to-r from-purple-600 from-30% to-blue-400 to-90% text-white px-4">
      <div className="flex flex-col items-start">
        <p className="font-bold text-sm">Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <div className="flex items-center h-[80%] w-[11%] bg-white rounded-3xl text-black cursor-pointer">
        <p className="mx-auto font-bold ">Sign up free</p>
      </div>
    </div>
  );
};

export default Player;
