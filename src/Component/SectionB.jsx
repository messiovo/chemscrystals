import React from "react";
import { Link } from "react-router-dom";

const SectionB = () => {
  return (
    <>
      <section className=" p-10  bg-[url(./image/secttion3.png)] flex flex-col items-center justify-center  bg-dark/90 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <h1 className=" text-lg lg:text-xl font-bold pb-4 text-light text-center">
          Student Learning Platform
        </h1>
        <p className="text-sm lg:text-lg leading-8  px-4 text-light text-center">
          Wherever you are, start learning and improve your skills on our various courses. 
        </p>
        <Link to="/online">
          <button
            className="rounded-full px-16 py-2 mt-10 mb-6 bg-dark font-bold m-auto block text-light  text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
            data-aos="fade-up"
          >
            Explore
          </button>
        </Link>
      </section>
    </>
  );
};

export default SectionB;
