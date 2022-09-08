import React from "react";

const Shop = () => {
  return (
    <>
      <section className=" px-10 py-20 mt-16 bg-[url(./image/secttion3.png)] flex flex-col items-center justify-center  bg-dark/90 bg-no-repeat bg-cover bg-center bg-blend-saturation text-light">
        <h1 className="font-bold text-xl lg:text-3xl md:text-2xl pb-4 text-center">
          Let us bring your educative materials to your doorstep
        </h1>
        <p className="font-semi-bold  lg:text-lg md:text-lg pb-4 text-md">
          educative games, teaching aids, back to shool items and lots more
        </p>
        <button
          className="rounded-full text-dark px-16 py-2 bg-medium font-bold m-auto block hover:scale-110 transition-all duration-300 ease-in text-sm lg:text-md"
          data-aos="fade-up"
        >
          Shop now
        </button>
      </section>
    </>
  );
};

export default Shop;
