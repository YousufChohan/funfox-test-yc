import React from "react";
import logo from "./assets/images/logo.png";
import { LeftIcons } from "./components/LeftIcons";
import { RightIcons } from "./components/RightIcons";
import { NavBar } from "./components/NavBar";

export default function Page2() {
  return (
    <section
      className="flex bg-[#F8D1E0] sm:flex-col flex-col sm:min-h-screen items-center min w-full pt-4"
      // style={{
      //   backgroundImage: `url(${logo})`,
      // }}
    >
      <div className="flex gap-x-8 ml-4 w-full justify-start">
        <img src={logo} alt="FunFox Logo"></img>
      </div>
      <div className="flex w-full h-full">
        <LeftIcons />
        {/* Main Box */}
        <div className="flex bg-[#F7F9FE] w-full rounded-2xl flex-col gap-6 items-center p-4">
          {/* First Paragraph */}
          <div className="font-normal w-full text-left text-[32px] text-black font-short-stack leading-[29px]">
            Can you figure out the definition of setting from the following
            examples?
          </div>
          {/* Second small Paragraph */}
          <div className="font-normal w-full text-left text-[24px] text-black font-short-stack leading-[29px]">
            (take a minute to think about this) examples?
          </div>
          {/* Second small Paragraph */}
          <div className="font-normal w-full text-left text-[24px] text-black font-short-stack leading-[29px]">
            So, what do you think the definition of setting is?
          </div>
          {/* Second (Boxed) Paragraph with picture */}
          <div className="w-full bg-[#25A3A1]">
            <div className="relative flex flex-col sm:flex-row  justify-between items-center border-[#A4FDFB] border-4 border-dashed px-2">
              <div className="font-normal text-[24px] leading-[29px] text-white font-short-stack my-2 w-full">
                Setting is the time and place of a story. It often answers the
                questions: when? and where?
              </div>
            </div>
          </div>
          {/* Second small Paragraph */}
          <div className="font-normal w-full text-left text-[24px] text-black font-short-stack leading-[29px]">
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </div>
        </div>
        <RightIcons />
      </div>
      <NavBar />
    </section>
  );
}
