import React from "react";
import { about_img } from "../assets";

const AboutUs = () => {
  return (
    <>
      <div className="font-sans w-full lg:h-[100vh] md:h-[120vh] sm:h-[120vh] xs:h-[200vh] ss:h-[120vh]">
        <div className="flex justify-center items-center">
          <div className="border-r w-[6px] h-[42px] left-[482] bg-[#91BC4D] mr-2" />
          <h1 className="text-gradient font-bold text-3xl">
            Why{" "}
            <span className="text-2xl ml-1 text-gradient font-normal">
              ProSuite?
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center text-center text-[#B5B5B6] -top-[50px] min-h-screen container mx-auto">
          {/**GRID LAYER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/**CARD 1 */}
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={about_img} alt="aboutImg" />
                </div>
                <h5 className="text-2xl md:text-xl font-medium mt-3">
                  Comprehensive Management Suite{" "}
                </h5>
                <p className="text-lg mt-3">
                  ProSuite is a one-stop solution for enterprise operations,
                  offering services from asset tracking to compliance
                  management.
                </p>
              </div>
            </div>

            {/**CARD 2*/}
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={about_img} alt="aboutImg" />
                </div>
                <h5 className="text-2xl md:text-xl font-medium mt-3">
                  User-Friendly Design{" "}
                </h5>
                <p className="text-lg mt-3">
                  With its emphasis on user experience and easy-to-use tools,
                  ProSuite transforms complex tasks into simple operations.
                </p>
              </div>
            </div>
            {/**CARD 3 */}
            <div className="card">
              <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                  <img src={about_img} alt="aboutImg" />
                </div>
                <h5 className="text-2xl md:text-xl font-medium mt-3">
                  Cloud-Based Solution{" "}
                </h5>
                <p className="text-lg mt-3">
                  As a flexible, cloud-based suite, ProSuite ensures business
                  continuity and scalability, allowing businesses to manage
                  their operations anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
