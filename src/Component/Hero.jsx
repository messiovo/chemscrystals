import React from "react";
import abacus from "./image/abacus.jpeg";
import python from "./image/python1.jpg";
import scratch from "./image/scratch1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#495371] pb-8 flex  items-center flex-col-reverse  lg:flex-row lg:p-20 mx-8">
        <div className="lg:w-2/4 text-[#FDDB93] px-4 lg:px-14 pt-10 lg:pt-0">
          <h1 className="font-bold text-2xl lg:text-4xl md:text-3xl pb-4 text-center">
            Let’s improve the coding <br/> and mental skill of your <br/> ward
          </h1>
          <p className="font-bold  lg:text-xl md:text-xl pb-4 text-lg">
            Help your wards discover the tech in them.
          </p>
          <p className="font-bold  lg:text-xl md:text-xl text-lg pb-8 ">
            Create genius in mathematics with speed and accuracy.
          </p>
          <Link to="/">
            <button className="rounded-full px-16 py-2 bg-[#74959A] font-bold m-auto block">
              Get in touch
            </button>
          </Link>
        </div>
        <div className="lg:w-2/4  flex justify-center gap-4 relative p-10 lg:p-0">
          <img src={scratch} alt="scratch" className="w-[50%] rounded-full " />
          <img
            src={python}
            alt="python"
            className="w-[37%] md:w-[45%] rounded-full absolute lg:w-[50%]"
          />
          <img src={abacus} alt="abacus" className="w-[50%] rounded-full " />
        </div>
      </div>
    </>
  );
};

export default Hero;
