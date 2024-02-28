import React from "react";
import GradientButton from "./GradientButton";

const DemoRequest = () => {
  return (
    <div className="font-montserrat w-full py-12">
      <div className="flex flex-row h-[129px] bg-[#84BE35] p-10">
        <h1 className="font-bold lg:text-3xl leading-4 text-white md:text-xs sm:text-xs xs:text-sm ss:text-sm text-center pr-4">
          We'd love to show you how our solution works
        </h1>
        <div className="mx-auto">
          {" "}
          <GradientButton value="REQUEST A DEMO" />
        </div>
      </div>
    </div>
  );
};

export default DemoRequest;
