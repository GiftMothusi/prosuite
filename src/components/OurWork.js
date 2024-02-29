import React from "react";

import GradientButton from "./GradientButton";

const OurWork = () => {
  return (
    <div class="container mx-auto px-4 mb-10">
      <div className="flex justify-center items-center">
        <div className="border-r w-[6px] h-[42px] top-30 left-[482] bg-[#91BC4D] mr-2" />
        <h1 className="text-gradient font-bold text-4xl leading-[96.5px] ">
          Our{" "}
          <span className="text-2xl ml-1 font-normal text-gradient">
            Solutions
          </span>
        </h1>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/*<!-- Grid Item 1-->*/}
        <div class="p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Asset Management
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Gain control of your asset with Software that helps you keep track
            of your physical assets.
          </p>
          <GradientButton value="LEARN MORE" />
        </div>

        {/*<!-- Grid Item 2 -->*/}
        <div class=" p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Risk Management
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Identify, capture and monitor enterprise risks with ease.
          </p>
          <GradientButton value="LEARN MORE" />
        </div>

        {/*<!-- Grid Item 3-->*/}
        <div class=" p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Documents Management
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Easy-to-use solution that enables your firm to convert paper into
            electronic files.
          </p>
          <GradientButton value="LEARN MORE" />
        </div>

        {/*<!-- Grid Item 4-->*/}
        <div class=" p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Perfomance Management
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Achieve business stragetic goals with a solution ensuring
            organizations are running effenciently
          </p>
          <GradientButton value="LEARN MORE" />
        </div>
        {/*<!-- Grid Item 5 -->*/}
        <div class=" p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Audit
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Streamline your audit processes and comply with regulations or
            internal policies.
          </p>
          <GradientButton value="LEARN MORE" />
        </div>

        {/*<!-- Grid Item 6 -->*/}
        <div class=" p-4 rounded-lg">
          <h1 class="font-sans font-semibold text-2xl leading-4 text-gradient mb-2 pb-2 pt-2">
            Compliance Management
          </h1>
          <p class="font-sans font-normal leading-6 text-base mb-4 text-[#B5B5B6]">
            Manage and meet legal requirements and comply with applicable laws
            and regulations.
          </p>
          <GradientButton value="LEARN MORE" />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
