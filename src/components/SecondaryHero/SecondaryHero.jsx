import React from "react";
import bg1 from "../../assets/images/bg1.png";

const SecondaryHero = ({ children }) => {
  return (
    <div
      className={`h-[30vh] bg-[#f9f8ff] flex items-center justify-center `}
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
      }}
    >
      <h2 className="text-3xl font-semibold">{children}</h2>
    </div>
  );
};

export default SecondaryHero;
