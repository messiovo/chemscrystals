import React from "react";
import { OnlineCard, Scratchcard } from "../Component";

const Eplatform = () => {
  const card1 = [
    {
      bgImage: require("../Component/image/abacus1.jpg"),
      text: "Beginner",
      score: "4.9/5.0",
      link: "Start learning",
    },
    {
      bgImage: require("../Component/image/abacussmall.jpg"),
      text: "Intermediate ",
      score: "4.8/5.0",
      link: "Start learning",
    },
    {
      bgImage: require("../Component/image/abacussmall.jpg"),
      text: "Advance",
      score: "4.9/5.0",
      link: "Start learning",
    },
    
  ];
  const card2 = [
    {
      image: require("../Component/image/scratchsmall.jpg"),
      title: "Beginner",
      rating: "4.9/5.0",
      lin: "Start learning",
    },
    {
      image: require("../Component/image/scratch1.jpg"),
      title: "Intermediate ",
      rating: "4.8/5.0",
      lin: "Start learning",
    },
    {
      image: require("../Component/image/scratch2.jpg"),
      title: "Advance",
      rating: "4.9/5.0",
      lin: "Start learning",
    },
  ];
  const card3 = [
    {
      bgImage: require("../Component/image/sudoko.jpg"),
      text: "Sudoko",
      score: "4.9/5.0",
      link: "Start learning",
    },
    {
      bgImage: require("../Component/image/scrabble.jpg"),
      text: "Scrabble",
      score: "4.8/5.0",
      link: "Start learning",
    },
    {
      bgImage: require("../Component/image/chess.jpg"),
      text: "Chess",
      score: "4.9/5.0",
      link: "Start learning",
    },
   
  ];
  const card4 = [
    {
      image: require("../Component/image/scratchsmall.jpg"),
      title: "Data analysis",
      rating: "4.9/5.0",
      lin: "Start learning",
    },
    {
      image: require("../Component/image/scratch1.jpg"),
      title: "UX design ",
      rating: "4.8/5.0",
      lin: "Start learning",
    },
    {
      image: require("../Component/image/scratch2.jpg"),
      title: "Web developement",
      rating: "4.9/5.0",
      lin: "Start learning",
    },
  ];
  return (
    <div>
      <section className="px-12 text-dark mb-3 mt-20">
        <h1 className=" font-bold text-xl lg:text-3xl md:text-2xl py-4  text-center">
          Now you can learn wherever you are!
        </h1>
      </section>
      <section className="bg-dark p-10">
        <h2 className="text-lg lg:text-xl font-bold pb-4 text-light text-center ">
          Abacus Mental Math
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 ">
          {card1.map((items) => (
            <OnlineCard {...items} />
          ))}
        </div>
      </section>
      <section className=" py-10">
        <h2 className="text-lg lg:text-xl font-bold pb-4 text-dark text-center ">
          Scratch coding
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 items-evenly justify-evenly px-10">
          {card2.map((card) => (
            <Scratchcard {...card} />
          ))}
        </div>
      </section>
      <section className="text-dark bg-light py-10 px-10">
        <h2 className="text-lg lg:text-xl font-bold pb-4  text-center animate-bounce">
          Zoom live class
        </h2>
        <p className="text-sm lg:text-lg leading-8 font-semibold text-center">
          Register for one-on-one tutoring
        </p>
        <ul className="lg:pl-[10rem] pt-4 ">
          <li className="flex gap-2 pb-2 items-center">
          <span className="h-3 w-3 bg-dark rounded-full"></span>
            Front-end web developement
          </li>
          <li className="flex gap-2 pb-2 items-center">
            <span className="h-3 w-3 bg-dark rounded-full"></span>
            Back-end web developement
          </li>
           <li className="flex gap-2 pb-2 items-center">
            <span className="h-3 w-3 bg-dark rounded-full"></span>
            Python for kids
          </li>
           <li className="flex gap-2 pb-2 items-center">
            <span className="h-3 w-3 bg-dark rounded-full"></span>
            Basic computer appreciation
          </li>
          <li className="flex gap-2 pb-2 items-center">
            <span className="h-3 w-3 bg-dark rounded-full"></span>
            Data analysis
          </li>
          
        </ul>
      </section>
      <section className="bg-dark p-10">
        <h2 className="text-lg lg:text-xl font-bold pb-4 text-light text-center ">
          Creative Learning
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 ">
          {card3.map((items) => (
            <OnlineCard {...items} />
          ))}
        </div>
      </section>
      <section className=" pt-10 py-16">
        <h2 className="text-lg lg:text-xl font-bold pb-4 text-dark text-center ">
         Others
        </h2>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-4 items-evenly justify-evenly px-10">
          {card4.map((card) => (
            <Scratchcard {...card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Eplatform;
