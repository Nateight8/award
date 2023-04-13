import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const navlinks = [
    {
      label: "Home",
      url: "/",
      id: "1",
    },
    {
      label: "About",
      url: "/",
      id: "2",
    },
    {
      label: "Services",
      url: "/",
      id: "3",
    },
    {
      label: "Contact",
      url: "/",
      id: "4",
    },
  ];

  return (
    <>
      <nav className="border-slate-200 bg-[#35065a] sticky top-0 left-0 right-0 z-50">
        <div className=" flex flex-wrap items-center justify-between mx-auto px-4 sm:px-16 py-4">
          <Link href="/" className="flex items-center">
            <Image src="" className="h-8 mr-3" alt="award logo" />
          </Link>
          {/* <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button> */}
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
              {navlinks.map((link) => {
                const { id, url, label } = link;
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="block py-2 pl-3 pr-4 uppercase  md:p-0 text-slate-200"
                      aria-current="page"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
