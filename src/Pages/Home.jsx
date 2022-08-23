import React from "react";
import { Hero } from "../Component";
import hero1 from "../Component/image/hero1.jpg";
import hero3 from "../Component/image/hero3.jpg";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="py-10">
        <p className="text-[#495371] text-center text-2xl lg:text-3xl font-bold">
          we work with schools to <br />
          organize kids coding and <br /> abacus mental math for your pupils.
        </p>
      </div>
      <section className="flex flex-col items-center justify-center lg:flex-row bg-[#74959A] px-10 py-10">
        <div className="lg:w-2/4">
          <img src={hero1} alt="" className="w-[80%] m-auto" />
        </div>
        <div className="lg:w-2/4 text-center text-[#FDDB93] p-6">
          <h2 className="text-2xl lg:text-3xl font-bold pb-4">Abacus Mental Math</h2>
          <p className="text-lg lg:text-xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
      <section className="flex flex-col-reverse items-center justify-center lg:flex-row bg-[#98B4AA] px-10 py-10">
      <div className="lg:w-2/4 text-center text-[#495371] p-6">
          <h2 className="text-2xl lg:text-3xl font-bold pb-4">Kids Coding</h2>
          <p className="text-lg lg:text-xl leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="lg:w-2/4">
          <img src={hero3} alt="" className="w-[80%] m-auto" />
        </div>        
      </section>
    </div>
  );
};

export default Home;
