import React from "react";
import { IoClose } from "react-icons/io5";

const DiscriptionDiference = ({SetModalOpen, desc}) => {
  const DTDiscription = [
    {
      discription: "Interface amigável, organizada a partir de menus interativos e customizáveis que tornam a navegação fácil, rápida e agradável.",
    },
    {
      discription: "O Sistema Hifuzion abrange todas as operações da empresa, o que permite visão em profundidade do negócio.",
    },
    {
      discription: "Devido ao alto nível de aderência do sistema, a implantação é rápida, segura.",
    },
    {
      discription: "Sistema aberto e flexível, com telas customizáveis, dicionário de dados ativo e avançadas ferramentas de análise e extração de dados.",
    },
  ];
  return(
    <div className="w-[410px] bg-[#1c1b1a] h-[120px] rounded-lg absolute m-auto overflow-hidden z-50 drop-shadow-2xl">
      <div className="text-white font-normal">
        <div className="ml-2 cursor-pointer text-white inline-block">
          <button 
          type="button"
          onClick={() => {
            SetModalOpen(false)
          }}
          >
            <IoClose />
          </button>
        </div>
        <p className="p-2">{DTDiscription[desc].discription}</p>
      </div>
    </div>
  )
}

export default DiscriptionDiference;
