import React, { useState } from "react";

import "./Diference.css";

import DiscriptionDiference from "./DiscriptionDiference";

const Diference = () => {
  const [ModalOpen, SetModalOpen] = useState(false);

  const [desc, SetDesc] = useState(0);

  const DTDiferences = [
    {
      topic: "NAVEGAÇÃO INTELIGENTE",
      image: "/imgs/diferencial/dif4.png",
    },
    {
      topic: "SOLUÇÕES COMPLETAS",
      image: "/imgs/diferencial/dif1.png",
    },
    {
      topic: "IMPLANTAÇÃO RÁPIDA",
      image: "/imgs/diferencial/dif5.png",
    },
    {
      topic: "FLEXIBILIDADE",
      image: "/imgs/diferencial/dif6.png",
    },
  ];

  return (
    <>
      <div className="uppercase text-center text-white text-4xl pt-8">
        <h1>Diferenciais</h1>
      </div>
      <div className="containerdif">
        {DTDiferences.map((obj, index) => {
          return (
            <div
              key={index}
              className="topic"
              onClick={() => {
                SetModalOpen(true);
                SetDesc(index);
              }}
            >
              <h3>{obj.topic}</h3>
              <img src={obj.image} alt="image" />
            </div>
          );
        })}
        {ModalOpen && (
          <DiscriptionDiference SetModalOpen={SetModalOpen} desc={desc} />
        )}
      </div>
    </>
  );
};

export default Diference;
