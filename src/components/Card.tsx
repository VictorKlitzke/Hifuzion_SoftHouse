import React from 'react';

import "./Card.css";

const Card = () => {
  const DTCard = [
    {
      image: "/imgs/cards/card1.png",
      title: "Prestadores de Serviços e MEI's",
    },
    {
      image: "/imgs/cards/card2.png",
      title: "Mercados, Empórios e Mercearias",
    },
    {
      image: "/imgs/cards/card3.png",
      title: "Roupas, Calçados e Acessórios",
    },
    {
      image: "/imgs/cards/card4.png",
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