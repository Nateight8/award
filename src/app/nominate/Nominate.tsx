import Link from "next/link";
import React from "react";

type Props = {};

function Nominate({}: Props) {
  return (
    <section className="min-h-screen p-4 relative bg-black bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] flex justify-center items-center">
      <div className="grid md:grid-cols-3 lg:grid-cols-2 z-10 ">
        <div className=" sm:p-8 md:col-span-2 lg:col-span-1">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-orange-500">
            Nominate
          </h1>
          <p className="text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            architecto laboriosam expedita quaerat sapiente adipisci vitae
            incidunt molestias ratione? Molestiae commodi explicabo repudiandae
            velit quia. Consequuntur cum possimus corrupti suscipit!
          </p>

          <Link
            href="/"
            className="inline-flex my-4 justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
              Nominate
            </span>{" "}
            <span className="text-sm font-medium">
              Nominate someone or yourself
            </span>
            <svg
              aria-hidden="true"
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0  bg-gradient-to-t to-black/60 from-purple-950 z-0" />
    </section>
  );
}

export default Nominate;
