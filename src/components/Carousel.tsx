import React, { useEffect, useState } from "react";

import "./Carousel.css";

type TDTSlide = Array<{
  header: string;
  image: string;
  desc: string;
}>;

const Carousel = () => {
  const [actIndex, setActIndex] = useState(0);

  const DTSlide: TDTSlide = [
    {
      header: "Lp Magazine",
      image: "/imgs/carousel/test1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque.",
    },
    {
      header: "Sebben",
      image: "/imgs/carousel/test2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque.",
    },
    {
      header: "Balltoro",
      image: "/imgs/carousel/test2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque.",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = DTSlide.length - 1;
    } else if (newIndex >= DTSlide.length) {
      newIndex = 0;
    }

    setActIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(actIndex + 1);
    }, 1000 * 10);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <h1 className="text-3xl font-sans text-center uppercase pt-7 text-white pt-2">Empresas que confiaram no nosso serviços</h1>
        <div className="carousel">
          <div
            className="inner"
            style={{ transform: `translateX(-${actIndex * 100}%)` }}
          >
            {DTSlide.map((obj, index) => (
              <div
              key={index}
                className="carousel-item"
                style={{
                  width: "100%",
                }}
              >
                <img src={obj.image} alt={"Empresa " + index} />
                <div className="content">
                  <h2>{obj.header}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Carousel;
