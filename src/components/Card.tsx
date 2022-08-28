import React from 'react';

import "./Card.css";

const Card = () => {
  const DTCard = [
    {
      image: "/imgs/cards/MEi.png",
      title: "Prestadores de Serviços e MEI's",
    },
    {
      image: "/imgs/cards/emporio.jpg",
      title: "Mercados, Empórios e Mercearias",
    },
    {
      image: "/imgs/cards/loja.png",
      title: "Roupas, Calçados e Acessórios",
    },
    {
      image: "/imgs/cards/oficina.png",
      title: "Oficinas mecânicas e Assist. Técnicas",
    },
  ];
  return (
    <>
      <div className="cards" >
        <h1 className="TextHome">Sistema de Gestão para seu Negócio</h1>
        <h2 className="SubTextHome">Veja as Soluções para seu Negócio</h2>
      </div >
      <div className="containerCard">
        {DTCard.map((obj, index) => {
          return (
            <div key={index} className="contentCard">
              <div className="cardImg">
                <img src={obj.image} alt="image" />
                <div className="cardInfo">
                  <h4>{obj.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Card;