import React from "react";

const Button = (props, { styles }) => {
  return (
    <button
      className={`py-3 px-6 mr-5 ml-5 font-montserrat font-bold text-base leading-4 text-white bg-[#91BC4D] rounded-[5px] outline-none ${styles}`}
      type={props.type}
    >
      {props.value}
    </button>
  );
};

export default Button;
