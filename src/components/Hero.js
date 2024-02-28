import React from "react";
import styles from "../styles";
import { banner } from "../assets";
import Button from "./Button";
import GradientButton from "./GradientButton";

const Hero = () => {
  return (
    <section className={`flex px-10 md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/**Banner Text */}
        <h1 className="font-sans text-lg text-[#91BC4D]">
          Welcome to ProSuite
        </h1>
        <div className="font-sans flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px]">
            Discover <br className="sm:block hidden" />
            <span>the power of</span>
          </h1>
        </div>
        <h1 className="font-sans font-semibold ss:text-[68px] text-[52px] text-gradient ss:leading-[100.8px] leading-[75px] w-full">
          Software
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] font-sans mt-5`}>
          Every day, our clients are faced with challenges and opportunities. We
          help them solve their problems by connecting them to information
          technology. We offer solutions that grow, empower and help businesses.
        </p>
        <div className="font-montserrat flex pt-5">
          <GradientButton value="GET STARTED" />
          <Button value="REQUEST A DEMO" />
        </div>
      </div>

      {/**Hero Section Image */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={banner}
          alt="BannerImage"
          className="w-[80%] h-[80%] relative z-5"
        />
      </div>
    </section>
  );
};

export default Hero;
