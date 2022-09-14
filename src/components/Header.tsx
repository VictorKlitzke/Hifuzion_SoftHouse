import React, { useEffect, useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobile)
  }

  useEffect(() => {
    const Header = document.getElementById("header");

    window.onscroll = function () {
      if (
        document.body.scrollTop >= 10 ||
        document.documentElement.scrollTop >= 10
      ) {
        Header.classList.add("bg-[#1c1b1a]");
      } else {
        Header.classList.remove("bg-[#1c1b1a]");
      }
    };
  }, []);

  return (
    <>
      <nav
        className=" fixed z-10 duration-500 transition-all w-[100%] pl-[2%] pr-[2%] px-2 sm:px-4 py-2.5"
        id="header"
      >
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <a href="\" className="flex">
            <img
              id="img"
              src="/imgs/logo/Hifuzion1.png"
              className="mr-2 h-4 sm:h-9 md:h-7"
              alt="Hifuzion Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2"
            onClick={() => setMobile(!mobile)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={` w-full md:block md:w-auto `}>
            <ul
              id="mobile"
              className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
            >
              <li>
                <a
                  href="/#"
                  className="block py-2 pr-4 pl-3 text-white hover:text-blue-500"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block py-2 pr-4 pl-3 text-white hover:text-blue-500"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/#card"
                  className="block py-2 pr-4 pl-3 text-white hover:text-blue-500"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="block py-2 pr-4 pl-3 text-white hover:text-blue-500"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
