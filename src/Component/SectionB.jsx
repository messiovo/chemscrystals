import React from "react";
import { Link } from "react-router-dom";

const SectionB = () => {
  return (
    <>
      <section className=" p-10  bg-[url(./image/secttion3.png)] flex flex-col items-center justify-center  bg-[black]/80 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <h1 className=" text-lg lg:text-xl font-bold pb-4 text-[#FDDB93] text-center">
          Student Learning Platform
        </h1>
        <p className="text-sm lg:text-lg leading-8  px-4 text-[#FDDB93] text-center">
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.totam.
        </p>
        <Link to="/">
          <button
            className="rounded-full px-16 py-2 mt-10 mb-6 bg-[#495371] font-bold m-auto block text-[#FDDB93]  text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
            data-aos="fade-up"
          >
            Get App
          </button>
        </Link>
      </section>
    </>
  );
};

export default SectionB;
