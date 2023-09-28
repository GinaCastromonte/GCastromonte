"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon} from "@heroicons/react/24/solid";
import { XIcon as XmarkIcon } from "@heroicons/react/solid";


import Image from "next/image"

import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleNavBarClose = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg-py-4  flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link
          href={"/"}
          className="text-xl md:text-5xl text-white font-semibold"
        >
          <Image src="/images/logo.png" alt="Logo" width={160} height={40} />
        </Link>

        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <Bars3Icon className=" h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
            >
              <XmarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className=" flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  handleNavBarClose={handleNavBarClose}
                  href={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay handleNavBarClose={handleNavBarClose} links={navLinks} />
      ) : null}
    </nav>
  );
};

export default Navbar;
