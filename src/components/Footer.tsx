import React from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#1c1b1a] p-12 pl-[2%] pr-[2%] shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
          <img
            src="/imgs/logo/HiFuzion1.png"
            className="mr-3 h-7"
            alt="Hifuzion Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-black">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 text-white">
              Início
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/#card"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="/#Contact"
              className="mr-4 hover:underline md:mr-6 text-white"
            >
              Contato
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-white">
        © {`${new Date().getFullYear()} `}
        <a href="https://hifuzion.com.br/" className="hover:underline">
          HiFuzion ERP
        </a>
        . Todos os direitos reservados.{" "}
      </span>
      <div className="flex text-white justify-center pt-4">
        <a href="https://www.instagram.com/hifuzionsistema/"><AiOutlineInstagram /></a>
        <div className="pl-2">
          <a href=""></a>
          <a href="https://api.whatsapp.com/send?phone=556599927479&text=HifuzionSoftHouse"><AiOutlineWhatsApp /></a> 
        </div>
        <div className="pl-2">
          <FiFacebook />
        </div>
        <div className="pl-2">
          <a href="https://www.youtube.com/channel/UClj29nQnmBdeHUH4bifFpVw"><AiOutlineYoutube/></a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
