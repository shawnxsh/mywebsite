import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import Logo from "../imgs/logo/Logo.gif";
import { myEmail } from "./Images";

function Navbar() {
  const animation = useRef(null);

  const menuItems = [
    ["Home", "/mywebsite/home"],
    ["Projects", "/mywebsite/projects"],
  ];

  // const handleNavBar = () => {
  //   if (window.scrollY >= 80) {
  //     setNavBar(true);
  //   } else {
  //     setNavBar(false);
  //   }
  // };

  // window.addEventListener("scroll", handleNavBar);

  useEffect(() => {
    animation.current = anime.timeline({
      direction: "reverse",
      delay: anime.stagger(200, { from: "last" }),
      easing: "easeInElastic(3, .5)",
    });
    // console.log(animation.current);
    animation.current.add({
      targets: [".staggering-nav-item"],
      translateY: [-100],
      autoplay: true,
    });
    // console.log(animation.current);
  }, []);

  return (
    <div className="w-screen h-[4.5em] bg-black">
      <nav className="fixed w-full h-[4.5em] flex items-center justify-between  py-2 px-6 bg-black z-10">
        <div className="w-16 overflow-hidden">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex flex-auto justify-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={"menuItems-" + item[0]}
              className="staggering-nav-item
                font-semibold text-white
            hover:text-darkGrayishBlue"
              to={`${item[1]}`}
            >
              {item[0]}
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${myEmail}`}
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight staggering-nav-item"
        >
          Hire me
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={(e) => {
            const button = document.querySelector("#menu-btn");
            const hiddenMenu = document.querySelector("#menu");
            button.classList.toggle("open");
            hiddenMenu.classList.toggle("flex");
            hiddenMenu.classList.toggle("hidden");
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div className="">
          <div className="absolute flex-col hidden items-center py-6 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md">
            {menuItems.map((item) => (
              <a
                key={"menuItems-" + item}
                className="hover:text-darkGrayishBlue"
                href="."
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
