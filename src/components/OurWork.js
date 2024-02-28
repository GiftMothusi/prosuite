import React from "react";

import GradientButton from "./GradientButton";

const OurWork = () => {
  return (
    <div className="py-8 container mx-auto lg:h-[80vh] md:h-[200vh] sm:h-[125vh] ss:h-[100vh] xs:h-[160vh]">
      <div className="items-center justify-center text-left text-[#B5B5B6]">
        <div className="flex justify-center items-center">
          <div className="border-r w-[6px] h-[42px] top-30 left-[482] bg-[#91BC4D] mr-2" />
          <h1 className="text-gradient font-bold text-4xl leading-[96.5px] ">
            Our{" "}
            <span className="text-2xl ml-1 font-normal text-gradient">
              Solutions
            </span>
          </h1>
        </div>
        {/**GRID LAYER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/**CARD 1 */}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Asset Management{" "}
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Gain control of your asset with Software that helps you keep
                track of your physical assets.
              </p>
              <div className="font-montserrat py-5">
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>

          {/**CARD 2*/}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Risk Management
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Identify, capture and monitor enterprise risks with ease.
              </p>
              <div
                className="font-montserrat py-5
              "
              >
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>
          {/**CARD 3 */}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Documents Management
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Easy-to-use solution that enables your firm to convert paper
                into electronic files.
              </p>
              <div className="font-montserrat py-5">
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>
          {/**CARD 4 */}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Perfomance Management
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Achieve business stragetic goals with a solution ensuring
                organizations are running effenciently
              </p>
              <div className="font-montserrat py-5">
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>
          {/**CARD 5 */}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Audit
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Streamline your audit processes and comply with regulations or
                internal policies.
              </p>
              <div className="font-montserrat py-5">
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>
          {/**CARD 6 */}
          <div className="">
            <div className="p-5 flex flex-col">
              <h5 className="font-sans font-semibold text-2xl leading-4 md:text-xl text-gradient p-4">
                Compliance Management
              </h5>
              <p className="font-sans font-normal leading-6 text-base mt-3">
                Manage and meet legal requirements and comply with applicable
                laws and regulations.
              </p>
              <div className="font-montserrat py-5">
                <GradientButton value="LEARN MORE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
