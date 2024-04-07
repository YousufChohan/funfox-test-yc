import React from "react";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";

export const LeftIcons = () => {
  return (
    <>
      {/* Side Icons */}
      <div className="flex flex-col justify-between items-center my-12">
        <img src={four} alt="ruler"></img>
        <img src={five} alt="book"></img>
        <img src={six} alt="cap"></img>
      </div>
    </>
  );
};
