import React from "react";
import GradientButton from "./GradientButton";

const DemoRequest = () => {
  return (
    <div className="font-montserrat w-full py-10">
      <div className="flex flex-row h-[129px] bg-[#84BE35] p-10">
        <h1 className="font-bold text-3xl leading-4 text-white lg:text-3xl sm:text-lg xs:text-sm ss:text-sm text-center pr-4">
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
