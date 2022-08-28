import React from "react";

/* components */
import Header from "../../components/Header";
import Parallax from "../../components/Parallax";
import Card from "../../components/Card";
import Diference from "../../components/Diference";
import Carousel from "../../components/Carousel";
import Contact from "../../components/Contact";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Back from "../../components/backTop";

const Home = () => {
  return (
    <div className="bg-[#252422]">
      <div className="header">
        <Header />
      </div>
      <div className="parallax">
        <Parallax />
      </div>
      <div className="card">
        <Card />
      </div>
      <div className="diference">
        <Diference />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="carousel">
        <Contact />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="back">
        <Back />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
