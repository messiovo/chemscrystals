import React from "react";
import { Faq, Hero, SectionA, SectionB } from "../Component";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useId } from "react";

const Home = () => {
  const card = [
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
    {
      text: " quasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beataequasi architecto beatae.totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ",
      position: "School Admin,",
      school: "Manger School",
    },
  ];
  const faqDetails = [
    {
      question: "Who is our program for?",
      answer: "Our program is suitable for kids 5 years and above",
    },
    {
      question: "How do I get started ?",
      answer: "Our program is suitable for kids 5 years and above",
    },
   
    {
      question: "How much does our program cost?",
      answer: "Our program is suitable for kids 5 years and above",
    },
  ];
  const id = useId();

  return (
    <div>
      <Hero />
      <SectionA />
      <SectionB />

      <section className=" bg-dark px-16  relative">
        <h2 className="text-lg lg:text-xl font-bold pt-8 text-light text-center ">
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
              key={id + items}
              className=" bg-medium rounded-2xl text-sm lg:text-lg text-dark p-7 mx-0 md:mx-4 lg:mx-4 flex flex-col gap-3 shadow-md shadow-[#495371]"
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
      <section className=" p-10 h-[25rem] bg-[url(./image/section3.png)] flex flex-col items-center justify-center  bg-dark/90 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <span className=" text-lg lg:text-xl font-bold pb-4 text-light">
          Try ChemsCrystals at your School!
        </span>
        <span className="text-sm lg:text-lg leading-8 px-4 text-light">
          It will only take a minute
        </span>
        <Link to="/contact">
          <button
            className="rounded-full px-[3rem] py-2 mt-10 bg-dark font-bold m-auto block text-light text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
            data-aos="fade-up"
          >
            Request a demo class
          </button>
        </Link>
      </section>
      <section className="px-12 text-dark mb-10 mt-20">
        <div className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          <h1>Recommend Chemscrystals to a school today</h1>

          <button
            className="rounded-full px-[3rem] flex gap-2 justify-center self-center  m-auto items-center py-2 mt-10 bg-dark font-bold  text-light text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
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
                  stroke="#6CBAE1"
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
      <section className="  text-light lg:flex-row bg-dark py-7 px-4">
        <h2 className="text-lg lg:text-xl font-bold pb-4  text-center ">
          Frequently asked questions (FAQ)
        </h2>
        {faqDetails.map((data)=> <Faq {...data} />)}
      </section>
    </div>
  );
};

export default Home;
