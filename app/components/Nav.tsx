"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const NavBar = () => {
  const Links = [
    { name: "Accueil", link: "/" },
    { name: "Demande de Crédit", link: "/demande-de-credit" },
    { name: "A Propos", link: "/a-propos" },
  ];

  const [isOpen, setisOpen] = useState(false);

  const ref = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node))
      setisOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap lg:items-center justify-between mx-auto p-4">
            <Link href="/" className="flex lg:items-center">
                <img src="@/app/public/logo.svg" className="h-8 mr-3" alt="Go Credit Logo" />
                <span className="lg:self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Go Credit</span>
            </Link>
            
            <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 cursor-pointer lg:hidden xl:hidden'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
                
            </div>

        <div
          onClick={() => setisOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer lg:hidden xl:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <div className="xs:hidden xxs:hidden sm:hidden md:hidden">
          <ul className="font-medium relative flex flex-row w-fit left-2 text-black p-0 mt-0 border-0 border-gray-100 space-x-6">
            {Links.map((link) => (
              <li key={link.link} className="font-semibold my-5 md:my-0 md:ml-8 block pl-3 pr-4 text-black hover:text-green-700">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:hidden lg:hidden xl:hidden">
        <ul
          ref={ref}
          className={`transition-all ${
            isOpen ? "top-8" : "top-[-290px]"
          } right-2  duration-500 ease-in bg-gradient-to-br from-green-200 to-emerald-400 z-[1] font-medium absolute flex flex-col p-4 w-fit md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
        >
          {Links.map((link) => (
            <li key={link.link} className="font-semibold my-4 ml-2 block pl-3 pr-4 text-black hover:text-green-700">
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
