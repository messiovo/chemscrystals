import React from "react";
import abacus from "./image/abacus.jpeg";
import python from "./image/python1.jpg";
import scratch from "./image/scratch1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=" bg-[#495371] mt-10 pb-8 flex items-center flex-col-reverse  lg:flex-row lg:p-20">
        <div className="lg:w-2/4 text-[#FDDB93] px-4 lg:px-14 pt-10 lg:pt-0">
          <h1 className="font-bold text-xl lg:text-3xl md:text-2xl pb-4 text-center">
            Let’s improve the coding <br /> and mental skill of your <br /> ward
          </h1>
          <p className="font-semi-bold  lg:text-lg md:text-lg pb-4 text-md">
            Help your wards discover the tech in them.
          </p>
          <p className="font-semi-bold  lg:text-lg md:text-lg text-md pb-8 ">
            Create genius in mathematics with speed and accuracy.
          </p>
          <Link to="/">
            <button className="rounded-full text-[#495371] px-16 py-2 bg-[#98B4AA] font-bold m-auto block hover:scale-110 transition-all duration-300 ease-in text-sm lg:text-md">
              Get in touch
            </button>
          </Link>
        </div>
        <div className="lg:w-2/4  flex justify-center gap-4 relative p-10 lg:p-0">
          <img
            src={scratch}
            alt="scratch"
            className="w-[50%] rounded-full "
            data-aos="zoom-in-left"
          />
          <img
            src={python}
            alt="python"
            className="w-[37%] md:w-[40%]  rounded-full absolute lg:w-[50%]"
            data-aos="zoom-in-down"
          />
          <img
            src={abacus}
            alt="abacus"
            className="w-[50%]  rounded-full "
            data-aos="zoom-in-right"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
