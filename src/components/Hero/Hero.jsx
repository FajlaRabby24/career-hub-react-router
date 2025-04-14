import React from "react";
import heroImg from "../../assets/images/user.png";
import Button from "../Common/Button/Button";

const Hero = () => {
  return (
    <div className="hero bg-[#f8f9ff] h-[75vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="max-w-2xl rounded-lg border-2 border-dashed border-[#ccc] "
        />
        <div>
          <h1 className="text-6xl font-bold flex flex-col gap-3">
            <span>One Step</span>
            <span>Closer To Your</span>
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
