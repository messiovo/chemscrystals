import React from "react";
import { Hero } from "../Component";
import hero1 from "../Component/image/hero1.jpg";
import hero3 from "../Component/image/hero3.jpg";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const card = [
    {
      id: 1,
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      id: 2,
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      id: 3,
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      id: 4,
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="py-10 mx-8">
        <p className="text-[#495371] text-center text-2xl lg:text-3xl font-bold">
          we work with schools to <br />
          organize kids coding and <br /> abacus mental math for your pupils.
        </p>
      </div>

      <section className="flex flex-col-reverse items-center justify-center lg:flex-row bg-[#74959A] py-10 ">
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
          <img
            src={hero3}
            alt=""
            className="w-[80%] m-auto"
            data-aos="fade-left"
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center lg:flex-row bg-[#74959A] py-10 ">
        <div className="lg:w-2/4">
          <img
            src={hero1}
            alt=""
            className="w-[80%] m-auto"
            data-aos="fade-right"
          />
        </div>
        <div className="lg:w-2/4 text-center text-[#495371] p-6">
          <h2 className="text-2xl lg:text-3xl font-bold pb-4">
            Abacus Mental Math
          </h2>
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
      <section className="p-10 h-[25rem] bg-[url(./image/secttion3.png)] flex flex-col items-center justify-center  bg-[black]/80 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <h1 className=" text-2xl lg:text-3xl font-bold pb-4 text-[#FDDB93]">
          Student Practice Center
        </h1>
        <p className="text-lg lg:text-xl leading-8  px-4 text-[#FDDB93]">
          ed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.totam.
        </p>
        <Link to="/">
          <button className="rounded-full px-16 py-2 mt-10 mb-6 bg-[#495371] font-bold m-auto block text-[#FDDB93] text-sm lg:text-lg hover:scale-110 transition-all duration-300 ease-in ">
            Get in touch
          </button>
        </Link>
      </section>
      <section className="bg-[#74959A] px-10 py-10 relative">
        <h2 className="text-2xl lg:text-3xl font-bold pt-8 text-[#495371] text-center ">
          What Client Say About Us
        </h2>
        <Carousel
          
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="px-2 md:px-9 lg:pr-10 lg:pl-16 absolute top-[4rem]"
          containerClass="container-with-dots"
          dotListClass=""
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
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          swipeable
        >
          {card.map((items) => (
            <div
              key={items.id}
              className="w-[18rem] h-[20rem] bg-[#98B4AA] text-[#495371] p-7 flex flex-col gap-4 shadow-md shadow-[#495371]"
            >
              <p className="">{items.text}</p>
              <span className="text-end  font-bold">
                <p>{items.position}</p>
                <p>{items.school}</p>
              </span>
            </div>
          ))}
        </Carousel>
      </section>
      <section className="p-10 h-[25rem] bg-[url(./image/section3.png)] flex flex-col items-center justify-center  bg-[black]/80 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <span className=" text-2xl lg:text-3xl font-bold pb-4 text-[#FDDB93]">
        Try ChemsCrystals at your School! 
        </span>
        <span className="text-lg lg:text-xl leading-8 px-4 text-[#FDDB93]">
        It will only take a minute
        </span>
        <Link to="/">
          <button className="rounded-full px-16 py-2 mt-10 bg-[#495371] font-bold m-auto block text-[#FDDB93] text-sm lg:text-lg hover:scale-110 transition-all duration-300 ease-in ">
            Request a demo class
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
