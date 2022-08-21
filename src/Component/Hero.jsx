import React from "react";
import abacus from "./image/abacus.jpeg";
import python from "./image/python1.jpg";
import scratch from "./image/scratch1.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#495371] mx-10 flex h-[35rem] items-center pb-10 ">
      <div className="w-2/4 text-[#FDDB93]  px-16">
        <h1 className="font-bold text-4xl pb-4 text-center">Let’s improve the coding and mental skill of your ward</h1>
        <p className="font-bold text-xl pb-4 ">Help your wards discover the tech in them.</p>
        <p className="font-bold text-xl ">Create genius in mathematics with speed and accuracy.</p>
      </div>
      <div className=" w-2/4">
        <div className="rounded-full p-8 bg-[#FDDB93] w-60 ">
          <img src={scratch} alt="abacus" className="w-fit rounded-lg " />
        </div>
        <div className="rounded-full p-8 bg-[#FDDB93] w-60 absolute top-[10rem] right-[12.5rem]">
          <img src={python} alt="abacus" className=" w-fit rounded-full" />
        </div>
        <div className="rounded-full p-8 bg-[#FDDB93] w-60 absolute top-[24.5rem] right-[16.9rem]">
          <img src={abacus} alt="abacus" className="w-fit rounded-lg " />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
