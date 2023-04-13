import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <>
      <section className="  h-[80vh] bg-black items-center justify-center flex">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:text-center lg:py-16 z-10 relative">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            Where merit meets recognition
          </h1>
          <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Welcome to the african heros award, where we celebrate buisness
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="bg-gradient-to-b to-transparent from-purple-950 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
    </>
  );
}

export default Hero;
