import React, { useState } from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full font-montserrat flex py-6 px-10 justify-between items-center navbar">
      <img src={logo} alt="navbar-logo" className="w-[124px] h-[42px]" />
      {/*Navbar styling for sm devices */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-bold leading-4 cursor-pointer text-base ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-black `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <Button value="REQUEST A DEMO" />
      </ul>

      {/*Navbar for Desktop devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none  flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Button value="REQUEST A DEMO" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
