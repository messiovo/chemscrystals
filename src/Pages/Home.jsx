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
      <section className=" bg-[#74959A] px-16  relative">
        <h2 className="text-lg lg:text-xl font-bold pt-8 text-[#495371] text-center ">
          What Client Say About Us
        </h2>
        <Carousel
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className=" absolute top-[2rem] z-20"
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
              className=" bg-[#98B4AA] rounded-2xl text-sm lg:text-lg text-[#495371] p-7 mx-0 md:mx-4 lg:mx-4 flex flex-col gap-3 shadow-md shadow-[#495371]"
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
      <section className=" p-10 h-[25rem] bg-[url(./image/section3.png)] flex flex-col items-center justify-center  bg-[black]/80 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <span className=" text-lg lg:text-xl font-bold pb-4 text-[#FDDB93]">
          Try ChemsCrystals at your School!
        </span>
        <span className="text-sm lg:text-lg leading-8 px-4 text-[#FDDB93]">
          It will only take a minute
        </span>
        <Link to="/contact">
          <button
            className="rounded-full px-[3rem] py-2 mt-10 bg-[#495371] font-bold m-auto block text-[#FDDB93] text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
            data-aos="fade-up"
          >
            Request a demo class
          </button>
        </Link>
      </section>
      <section className="px-12 text-[#495371] mb-10 mt-20">
        <div className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          <h1>Recommend Chemscrystals to a school today</h1>

          <button
            className="rounded-full px-[3rem] flex gap-2 justify-center self-center  m-auto items-center py-2 mt-10 bg-[#495371] font-bold  text-[#FDDB93] text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
            data-aos="fade-up"
          >
            <span>Share</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_138_8)">
                <path
                  d="M26.5477 10.7144V35.7144M26.5477 10.7144L18.2144 19.0477M26.5477 10.7144L34.881 19.0477M5.71436 39.881L7.00811 45.0581C7.23342 45.9595 7.75357 46.7598 8.48588 47.3316C9.21818 47.9035 10.1206 48.2142 11.0498 48.2144H42.0456C42.9748 48.2142 43.8772 47.9035 44.6095 47.3316C45.3418 46.7598 45.862 45.9595 46.0873 45.0581L47.381 39.881"
                  stroke="#FDDB93"
                  stroke-width="11"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_138_8">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </section>
      <section className="  text-[#495371] lg:flex-row bg-[#74959A] py-7 ">
        <h2 className="text-lg lg:text-xl font-bold pt-4  text-center ">
          Frequently asked questions (FAQ)
        </h2>
        <ul className="relative w-[20rem] m-auto">
          <li className="flex items-center justify-around bg-[#98B4AA] py-2">
            <span> who is our program for?</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35 2.9165C17.2813 2.9165 2.91669 17.2811 2.91669 34.9998C2.91669 52.7186 17.2813 67.0832 35 67.0832C52.7188 67.0832 67.0834 52.7186 67.0834 34.9998C67.0834 17.2811 52.7188 2.9165 35 2.9165ZM37.9167 46.6665C37.9167 47.44 37.6094 48.1819 37.0624 48.7289C36.5154 49.2759 35.7736 49.5832 35 49.5832C34.2265 49.5832 33.4846 49.2759 32.9376 48.7289C32.3906 48.1819 32.0834 47.44 32.0834 46.6665V37.9165H23.3334C22.5598 37.9165 21.8179 37.6092 21.271 37.0622C20.724 36.5152 20.4167 35.7734 20.4167 34.9998C20.4167 34.2263 20.724 33.4844 21.271 32.9374C21.8179 32.3905 22.5598 32.0832 23.3334 32.0832H32.0834V23.3332C32.0834 22.5596 32.3906 21.8178 32.9376 21.2708C33.4846 20.7238 34.2265 20.4165 35 20.4165C35.7736 20.4165 36.5154 20.7238 37.0624 21.2708C37.6094 21.8178 37.9167 22.5596 37.9167 23.3332V32.0832H46.6667C47.4402 32.0832 48.1821 32.3905 48.7291 32.9374C49.2761 33.4844 49.5834 34.2263 49.5834 34.9998C49.5834 35.7734 49.2761 36.5152 48.7291 37.0622C48.1821 37.6092 47.4402 37.9165 46.6667 37.9165H37.9167V46.6665Z"
                fill="#495371"
              />
            </svg>
          </li>
          <ul>
            <li className="bg-[#98B4AA] px-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              voluptatibus veritatis ad ex numquam sit iusto officiis molestiae
              deserunt voluptates perferendis magnam provident quia velit ut
              nam, voluptatum deleniti sapiente?
            </li>
          </ul>
        </ul>
      </section>
    </div>
  );
};

export default Home;
