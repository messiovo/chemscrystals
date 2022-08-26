import React from "react";
import coding from "../Component/image/coding.jpg"

const About = () => {
  return (
    <>
    <div className="px-12 text-[#495371] ">
      <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
        Our aim is to radically improve the cognitive and technological skill of
        children and young adult through our specialized educational program
      </h1>
      <p className="text-sm lg:text-lg leading-8 pb-4 ">
        Because we understand the importance of technological skills in our
        today’s world, we believe that every child should be harness with this
        skill to meet tomorrow’s opportunity.
      </p>
      <img src={coding} alt="chemscrystals coding class" className="w-[50%] m-auto" />
    </div>
    <div>
        
    </div>
    </>
  );
};

export default About;
