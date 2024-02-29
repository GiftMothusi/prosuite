import React from "react";
import GradientButton from "./GradientButton";

const DemoRequest = () => {
  return (
    <div className="font-montserrat flex h-[129px] justify-between items-center space-x-5 bg-[#84BE35] p-10">
      <h1 className="font-bold lg:text-3xl leading-4 text-white md:text-xs sm:text-xs xs:text-sm ss:text-sm pr-4">
        We'd love to show you how our solution works
      </h1>
      <div className="">
        {" "}
        <GradientButton value="REQUEST A DEMO" />
      </div>
    </div>
  );
};

export default DemoRequest;
