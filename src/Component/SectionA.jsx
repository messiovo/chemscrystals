import React from "react";
import hero1 from "./image/hero1.jpg";
import hero3 from "./image/hero3.jpg";

const SectionA = () => {
  return (
    <>
      
      <div className="py-10 px-4">
        <p className="text-[#495371] text-center text-xl lg:text-2xl font-bold">
          we work with schools to <br />
          organize kids coding and <br /> abacus mental math for your pupils.
        </p>
      </div>

      <section className=" flex flex-col-reverse items-center justify-center lg:flex-row bg-[#74959A] py-10 ">
        <div className="lg:w-2/4 text-center text-[#495371] py-2 px-6">
          <h2 className="text-lg lg:text-xl font-bold py-4">Kids Coding</h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="lg:w-2/4">
          <img
            src={hero3}
            alt=""
            className="w-[80%] m-auto"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="  flex flex-col items-center justify-center lg:flex-row bg-[#74959A] py-10 ">
        <div className="lg:w-2/4">
          <img
            src={hero1}
            alt=""
            className="w-[80%] m-auto"
            data-aos="fade-right"
          />
        </div>
        <div className="lg:w-2/4 text-center text-[#495371] py-2 px-6">
          <h2 className="text-lg lg:text-xl font-bold py-4">
            Abacus Mental Math
          </h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
    </>
  );
};

export default SectionA;
