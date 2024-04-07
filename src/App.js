import React from "react";
import logo from "./assets/images/logo.png";
import week from "./assets/images/week-bg.png";
import one from "./assets/images/1.png";
import two from "./assets/images/2.png";
import three from "./assets/images/3.png";
import four from "./assets/images/4.png";
import five from "./assets/images/5.png";
import six from "./assets/images/6.png";
import kidcartoon from "./assets/images/kidcartoon.png";
import cloud1 from "./assets/images/cloud1.png";
import cloud2 from "./assets/images/cloud2.png";
import cloud3 from "./assets/images/cloud3.png";
import cloud4 from "./assets/images/cloud4.png";
import cloud5 from "./assets/images/cloud5.png";
import paperbg from "./assets/images/paper-bg.png";
import back from "./assets/images/back.png";
import next from "./assets/images/next.png";
import voice from "./assets/images/voice.png";
import info from "./assets/images/info.png";
import chevdown from "./assets/images/chev-down.png";

export default function App() {
  return (
    <section
      className="flex bg-[#F8D1E0] sm:flex-col flex-col sm:min-h-screen items-center min w-full pt-4"
      // style={{
      //   backgroundImage: `url(${logo})`,
      // }}
    >
      <div className="flex gap-x-8 ml-4 w-full justify-start">
        <img src={logo} alt="FunFox Logo"></img>
        <div
          className="bg-no-repeat bg-contain px-8 py-1"
          style={{
            backgroundImage: `url(${week})`,
          }}
        >
          <p className="text-2xl font-normal text-white font-short-stack">
            Week 1
          </p>
        </div>
      </div>
      <div className="flex w-full h-full">
        {/* Side Icons */}
        <div className="flex flex-col justify-between items-center my-12">
          <img src={one} alt="Pencil"></img>
          <img src={two} alt="Bag"></img>
          <img src={three} alt="Book"></img>
        </div>
        {/* Main Box */}
        <div className="flex bg-[#F7F9FE] w-full rounded-2xl flex-col gap-6 items-center p-4">
          {/* Rounded Box Heading */}
          <div className="flex items-center justify-center bg-[#FE6784] rounded-3xl">
            <div className="border-[#FFAEBE] border-4 border-dashed px-6 rounded-3xl">
              <div className="font-normal text-[32px] text-white font-short-stack">
                Elements of Story Writing
              </div>
            </div>
          </div>
          {/* First Paragraph */}
          <div className="font-normal text-[24px] text-black font-short-stack leading-[29px]">
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </div>
          {/* Second (Boxed) Paragraph with picture */}
          <div className="w-full bg-[#25A3A1]">
            <div className="relative flex flex-col sm:flex-row  justify-between items-center border-[#A4FDFB] border-4 border-dashed px-2">
              <div className="font-normal text-[24px] leading-[29px] text-white font-short-stack my-2 w-11/12">
                There are elements which make the foundation for story writing.
                An element is an essential part of something and every fiction
                story has the same key elements:{" "}
              </div>
              <img
                className="w-[110px] h-[135px] z-10 absolute right-0"
                src={kidcartoon}
                alt="Child"
              ></img>
            </div>
          </div>
          {/* Clouds */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-between items-center w-full">
            <li>
              <div
                className="bg-no-repeat bg-contain bg-center py-12"
                style={{
                  backgroundImage: `url(${cloud1})`,
                }}
              >
                <p className="md:text-xl text-lg font-normal text-center text-black font-short-stack">
                  SETTING
                </p>
              </div>{" "}
            </li>
            <li>
              <div
                className="bg-no-repeat bg-contain bg-center py-12"
                style={{
                  backgroundImage: `url(${cloud2})`,
                }}
              >
                <p className="md:text-xl text-lg font-normal text-center text-black font-short-stack">
                  CHARACTERS{" "}
                </p>
              </div>{" "}
            </li>
            <li>
              <div
                className="bg-no-repeat bg-contain bg-center py-12"
                style={{
                  backgroundImage: `url(${cloud3})`,
                }}
              >
                <p className="md:text-xl text-lg font-normal text-center text-black font-short-stack">
                  PLOT{" "}
                </p>
              </div>{" "}
            </li>
            <li>
              <div
                className="bg-no-repeat bg-contain bg-center py-12"
                style={{
                  backgroundImage: `url(${cloud4})`,
                }}
              >
                <p className="md:text-xl text-lg font-normal text-center text-black font-short-stack">
                  PROBLEM
                </p>
              </div>{" "}
            </li>
            <li>
              <div
                className="bg-no-repeat bg-contain bg-center py-12"
                style={{
                  backgroundImage: `url(${cloud5})`,
                }}
              >
                <p className="md:text-xl text-lg font-normal text-center text-black font-short-stack">
                  RESOLUTION{" "}
                </p>
              </div>{" "}
            </li>
          </ul>
          {/* Second Normal Paragraph */}
          <div className="font-normal text-[24px] text-black font-short-stack leading-[29px]">
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </div>
          {/* Third (Boxed) Paragraph in pink */}
          <div className="w-full bg-[#FE6784] p-4">
            <div
              className="flex justify-between items-center p-4 pl-10 bg-cover bg-no-repeat "
              style={{
                backgroundImage: `url(${paperbg})`,
              }}
            >
              <div className="font-normal text-[24px] leading-[29px] text-black font-short-stack my-2 w-11/12">
                For today’s lesson, we will try to understand and practice
                writing the setting for our stories. The setting is an important
                <br></br>
                element of every fiction story.
              </div>
            </div>
          </div>
        </div>
        {/* Side Icons */}
        <div className="flex flex-col justify-between items-center my-12">
          <img src={four} alt="ruler"></img>
          <img src={five} alt="book"></img>
          <img src={six} alt="cap"></img>
        </div>
      </div>
      <div className="flex w-11/12 justify-between gap-6 items-center p-4">
        <button>
          <img src={voice} alt="voice button"></img>
        </button>
        <div className="flex justify-center gap-1">
          <button>
            <img src={back} alt="back button"></img>
          </button>
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
    </section>
  );
}
