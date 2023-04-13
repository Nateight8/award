import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
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
      label: "Nominate",
      url: "/",
      id: "3",
    },
    {
      label: "Partnership",
      url: "/",
      id: "4",
    },
  ];

  return (
    <>
      <footer className="shadow bg-purple-950 ">
        <div className="w-full mx-auto sm:px-16 px-4 py-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                AHA LOGO
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-slate-300 sm:mb-0">
              {navlinks.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      className="mr-4 hover:underline md:mr-6 hover:text-white "
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Award
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
