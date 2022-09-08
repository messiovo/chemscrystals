import React from "react";

const Shop = () => {
  return (
    <>
      <section className=" p-10 mt-10 bg-[url(./styles/image/shopping.jpg)] flex flex-col items-center justify-center  bg-dark/90 bg-no-repeat bg-cover bg-center bg-blend-saturation ">
        <h1 className=" text-lg lg:text-xl font-bold pb-4 text-light text-center">
          Let us bring your educative materials to your doorstep
        </h1>
        <p className="text-sm lg:text-lg leading-8  px-4 text-light text-center">
          educative games, teaching aids, back to shool items and lots more
        </p>

        <button
          className="rounded-full px-16 py-2 mt-10 mb-6 bg-dark font-bold m-auto block text-light  text-sm lg:text-md hover:scale-110 transition-all duration-300 ease-in "
          data-aos="fade-up"
        >
          Shop now
        </button>
      </section>
    </>
  );
};

export default Shop;
