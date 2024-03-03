import React, { useRef } from "react";
import backgroundImage from "./assets/images/girlinspecss.jpg";
import Categorybg from "./assets/images/category-glasses.png";
import backgroundImage3 from "./assets/images/aboutbetibg.png";
import backgroundImage2 from "./assets/images/pole-bg.png"; // Replace with the actual path to your image
// import Button from "./components/Button";
import grid1 from "../src/assets/images/grid1.png";
import grid2 from "../src/assets/images/grid2.png";
import grid3 from "../src/assets/images/grid3.png";
import grid4 from "../src/assets/images/grid4.png";
import grid5 from "../src/assets/images/grid5.png";
import grid6 from "../src/assets/images/grid6.png";
import intro from "../src/assets/images/intro.png";
import { ToastContainer } from "react-toastify";
// import { useSelector } from "react-redux";
import Map from "./components/Map";

export default function App() {
  const cardsWrapperRef = useRef(null);

  // const handleReadMoreClick = () => {
  //   // Scroll to the cards-wrapper div when "Read More" is clicked
  //   cardsWrapperRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const { userData } = useSelector((state) => state.auth);

  return (
    <>
      {/* <div
        className="flex flex-col items-center justify-center w-full pb-4 pt-20 sm:h-screen bg-cover bg-no-repeat bg-center px-2 gap-6 bg-opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="text-primary sm:text-[80px] leading-tight text-4xl font-bold line text-center mb-[10px] ">
          Lorem Ipsum Dolor
        </h1>
        <p className="text-black sm:text-xl text-sm font-normal text-center max-w-[600px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerpitationtation
        </p>
        <button
          onClick={handleReadMoreClick}
          className="bg-primary md:px-10 md:py-3 py-2 px-4 md:text-md text-sm rounded-lg font-normal text-white hover:bg-white hover:text-black transition duration-300"
        >
          Read More
        </button>
      </div> */}

      <section
        className="flex bg-[#fed557] md:bg-cover bg-top bg-contain bg-fixed md:bg-local bg-no-repeat md:flex-row flex-col  md:h-screen w-full px-1 gap-x-4"
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        // }}
      >
        <div className="md:w-5/12 w-full text-center md:text-right pt-20 md:pt-0 flex flex-col items-center md:items-end justify-center">
          <h1 className="text-white md:text-6xl text-xl font-bold ">
            Welcome to EYOON
          </h1>

          <h2 className="text-black md:text-4xl text-lg font-bold ">
            where Vision Inspires.{" "}
          </h2>
          <p className="text-black md:text-base text-xs md:ml-20 font-semibold mt-2 md:mb-0 mb-4 w-8/12 md:w-full ">
            Join us in a vibrant community, blending perspectives to illuminate
            your path and enhance your vision.
          </p>
        </div>
        <div className="md:w-7/12 md:ml-0 w-full flex justify-end items-end">
          <img src={backgroundImage} className="w-11/12" alt="Girl in specs" />
        </div>
      </section>

      <div
        ref={cardsWrapperRef}
        className="flex flex-col items-center w-full px-1 bg-contain bg-no-repeat bg-bottom"
        // style={{
        //   backgroundImage: `url(${backgroundImage3})`,
        // }}
      >
        <div className="h-[1px] bg-gray-300 sm:w-10/12 mb-2 w-full" />

        <h1 className="text-primary md:text-5xl text-2xl font-bold text-center ">
          Shop by Category
        </h1>
        <p className="text-base font-medium text-center max-w-[900px] mt-5 text-gray-700">
          Whether you're in search of the perfect pair of glasses to complement
          your style or seeking the trendiest shades for your next adventure,
          Eyoon is your go-to destination.
        </p>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-2/3">
          {/* Column 1 */}
          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Men's Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 2 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 3 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 4 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 5 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 6 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 7 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 8 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 9 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 10 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>
          {/* Column 11 */}

          <div
            className="bg-cover border border-gray-500 hover:-translate-y-2 hover:shadow-primary hover:shadow-lg shadow-md shadow-gray-500 rounded-lg transition duration-400  p-2 gap-3 flex-col flex justify-end items-center sm:items-center"
            style={{
              backgroundImage: `url(${Categorybg})`,
            }}
          >
            <div className="Group8  h-16 ">
              {/* <img src={grid1} alt="Engineering Solutions" /> */}
            </div>
            <div className="text-black text-base font-semibold font-['General Sans'] bg-white bg-opacity-75 p-1 md:p-3 rounded-3xl">
              Glasses
            </div>
            {/* <div className=" text-black  text-sm font-normal font-['General Sans text-center sm:text-left	']">
              Emphasizing a holistic approach to project management and
              engineering solutions.
            </div> */}
          </div>

          {/* Grid closing div below this comment  */}
        </div>
      </div>
    </>
  );
}
