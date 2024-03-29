"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const currentRoute = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
            SplenderAI
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-200 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent md:bg-transparent border-gray-700">
            <li>
              <Link
                onClick={toggleMenu}
                href="/"
                className={
                  currentRoute == "/"
                    ? "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-gray-300  hover:border-gray-700"
                    : "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-white md:hover:text-gray-300 hover:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                href="/technologies"
                className={
                  currentRoute == "/technologies"
                    ? "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-gray-300  hover:border-gray-700 "
                    : "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-white md:hover:text-gray-300 hover:border-gray-700"
                }
              >
                Technologies
              </Link>
            </li>
            {/* <li>
              <Link
                onClick={toggleMenu}
                href="/portfolio"
                className={
                  currentRoute == "/portfolio"
                    ? "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-gray-300  hover:border-gray-700 "
                    : "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-white md:hover:text-gray-300 hover:border-gray-700"
                }
              >
                Portfolio
              </Link>
            </li> */}
            <li>
              <Link
                onClick={toggleMenu}
                href="/partnerships"
                className={
                  currentRoute == "/partnerships"
                    ? "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-gray-300  hover:border-gray-700 "
                    : "block py-2 px-3 hover:border md:hover:border-0 bg-transparent rounded md:p-0 text-white md:hover:text-gray-300 hover:border-gray-700"
                }
              >
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
