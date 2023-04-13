import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <section className="min-h-screen p-4 bg-black  flex justify-center items-center">
      <div className="grid md:grid-cols-2 ">
        <div className=" sm:p-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            About us
          </h1>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            architecto laboriosam expedita quaerat sapiente adipisci vitae
            incidunt molestias ratione? Molestiae commodi explicabo repudiandae
            velit quia. Consequuntur cum possimus corrupti suscipit!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
