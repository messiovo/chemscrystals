import React from "react";
import scratch from "../Component/image/scratch2.jpg";
import web from "../Component/image/webdev.jpg";
import pythonsmall from "../Component/image/kidcode.jpg";
import pythonbig from "../Component/image/pythonbig.jpg";
import data from "../Component/image/data.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hub = () => {
  const projectImage = [
    { id: 1, img: require("../Component/image/code1.jpg") },
    { id: 2, img: require("../Component/image/code2.jpg") },
    { id: 3, img: require("../Component/image/code3.jpg") },
    { id: 4, img: require("../Component/image/code4.jpg") },
    { id: 5, img: require("../Component/image/code5.jpg") },
  ];
  return (
    <>
      <section className="px-12 text-dark mb-10 mt-20">
        <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          You are at the right place!!!
        </h1>
        <p className="text-sm lg:text-lg leading-8 pb-8 font-semibold">
          Our hub is a place of intensive learning for both children and young
          adult. We ensure to make our programs project-based oriented.
        </p>
        <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          Our Programs
        </h1>
      </section>
      <section className=" flex flex-col-reverse items-center justify-center lg:flex-row bg-dark py-10 ">
        <div className="lg:w-2/4 text-center text-light py-2 px-6">
          <h2 className="text-lg lg:text-xl font-bold py-4">Web Development</h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm lg:text-lg leading-8 text-center pt-4 font-bold">
            N50,000 for 3 months
          </p>
        </div>
        <div className="lg:w-2/4">
          <img
            src={web}
            alt=""
            className="w-[60%] m-auto"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="  flex flex-col items-center justify-center lg:flex-row bg-medium text-dark py-10 ">
        <div className="lg:w-2/4">
          <img
            src={scratch}
            alt=""
            className="w-[50%] m-auto"
            data-aos="fade-right"
          />
        </div>
        <div className="lg:w-2/4 text-center py-2 px-6 bg">
          <h2 className="text-lg lg:text-xl font-bold py-4">
            Scratch Programming Language
          </h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm lg:text-lg leading-8 text-center pt-4 font-bold">
            N50,000 for 3 months
          </p>
        </div>
      </section>
      <section className=" flex flex-col-reverse items-center justify-center lg:flex-row bg-dark py-10 ">
        <div className="lg:w-2/4 text-center text-light py-2 px-6">
          <h2 className="text-lg lg:text-xl font-bold py-4">Python for Kids</h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm lg:text-lg leading-8 text-center pt-4 font-bold">
            N50,000 for 3 months
          </p>
        </div>
        <div className="lg:w-2/4">
          <img
            src={pythonsmall}
            alt=""
            className="w-[60%] m-auto"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="  flex flex-col items-center justify-center lg:flex-row bg-medium text-dark py-10 ">
        <div className="lg:w-2/4">
          <img
            src={pythonbig}
            alt=""
            className="w-[60%] m-auto"
            data-aos="fade-right"
          />
        </div>
        <div className="lg:w-2/4 text-center py-2 px-6 bg">
          <h2 className="text-lg lg:text-xl font-bold py-4">Python</h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm lg:text-lg leading-8 text-center pt-4 font-bold">
            N50,000 for 3 months
          </p>
        </div>
      </section>
      <section className=" flex flex-col-reverse items-center justify-center lg:flex-row bg-dark py-10 ">
        <div className="lg:w-2/4 text-center text-light py-2 px-6">
          <h2 className="text-lg lg:text-xl font-bold py-4">Data Analysis</h2>
          <p className="text-sm lg:text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-sm lg:text-lg leading-8 text-center pt-4 font-bold">
            N50,000 for 3 months
          </p>
        </div>
        <div className="lg:w-2/4">
          <img
            src={data}
            alt=""
            className="w-[60%] m-auto"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="px-12 text-dark mb-10 mt-5">
        <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          Other Services
        </h1>
        <p className="text-sm lg:text-lg leading-8 pb-8 font-semibold">
          We also organize outdoor training for organisation for both children
          and adult at a stipulated price depending on the time duration.
        </p>
        <Carousel
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="z-10 rounded-2xl"
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,

              slidesToSlide: 3,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,

              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,

              slidesToSlide: 2,
            },
          }}
         
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          swipeable
        >
          {projectImage.map((items) => (
            <div key={items.id} className=" flex justify-center items-center">
              <img src={items.img} alt="" loading="lazy" className="rounded-2xl w-[20rem] h-60   "
           />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Hub;
