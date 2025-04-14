import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn text-white py-5 bg-gradient-to-br from-[#7E90FE] to-[#9873FF]">
      {children}
    </button>
  );
};

export default Button;
