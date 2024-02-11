import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="font-Source Code Pro fixed z-20">
      <nav
        className={`${
          styles.paddingX
        }  w-full flex py-5 fixed top-0 z-20  items-center justify-center${
          scrolled
            ? "transition ease-linear delay-70 duration-[900ms] backdrop-blur-lg bg-white bg-opacity-10 backdrop-shadow-lg "
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex  items-center justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 "
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          ></Link>
          <ul className="list-none hidden sm:flex flex-row gap-24 items-center justify-center ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center ">
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-source-code-pro font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="hidden sm:flex flex-1 justify-end"></div>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
