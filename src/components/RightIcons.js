import React from "react";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";

export const RightIcons = () => {
  return (
    <>
      {/* Side Icons */}
      <div className="flex flex-col justify-between items-center my-12">
        <img src={one} alt="Pencil"></img>
        <img src={two} alt="Bag"></img>
        <img src={three} alt="Book"></img>
      </div>
    </>
  );
};
