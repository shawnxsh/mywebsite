import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";
import Logo from "../imgs/logo/Logo.gif";

function Navbar() {
  const menuItems = [
    ["Home", "/mywebsite/home"],
    ["Projects", "/mywebsite/projects"],
  ];

  anime({
    targets: [".staggering-from-demo"],
    translateY: -150,
    direction: "reverse",
    easing: "easeInElastic(3, .5)",
    delay: anime.stagger(200, { from: "last" }),
  });

  return (
    <div className="w-screen bg-black">
      <nav className="container flex items-center justify-between mx-auto py-2 px-6">
        <div className="w-16 overflow-hidden">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={"menuItems-" + item[0]}
                className="staggering-from-demo
                font-semibold text-white
            hover:text-darkGrayishBlue"
                to={`${item[1]}`}
              >
                {item[0]}
              </Link>
            ))}
          </div>
        </div>
        <a
          href="."
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight md:block"
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
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col hidden items-center py-6 mt-10 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md"
          >
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
