import React from "react";
import back from "../assets/images/back.png";
import next from "../assets/images/next.png";
import voice from "../assets/images/voice.png";
import info from "../assets/images/info.png";
import chevdown from "../assets/images/chev-down.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="flex w-11/12 justify-between gap-6 items-center p-4">
        <button>
          <img src={voice} alt="voice button"></img>
        </button>
        <div className="flex justify-center gap-1">
          <Link to="/">
            <img src={back} alt="back Link"></img>
          </Link>
          <div className="bg-[#CD3F97] my-[2px] rounded-lg flex items-center justify-between">
            <p className="py-2 px-4 font-short-stack text-white text-xl">1</p>
            <div className="flex h-full">
              <div className="bg-[#ED75C0] w-[2px] h-full"></div>

              <div className="bg-[#AA1070] w-[2px] h-full"></div>
            </div>
            <img src={chevdown} alt="chev down" className="py-2 px-4 w-11" />
          </div>
          <button>
            <img src={next} alt="next button"></img>
          </button>
        </div>
        <button>
          <img src={info} alt="info button"></img>
        </button>
      </div>
    </>
  );
};
