import React from "react";

const GradientButton = (props, { styles }) => {
  return (
    <button
      className={`py-3 px-6 mr-3 ml-0 font-montserrat font-bold leading-4 text-base text-white btn-blue-gradient rounded-[5px] outline-none ${styles}`}
      type={props.type}
    >
      {props.value}
    </button>
  );
};

export default GradientButton;
