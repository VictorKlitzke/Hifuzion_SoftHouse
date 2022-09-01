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
      <div id="header">
        <Header />
      </div>
      <div id="parallax">
        <Parallax />
      </div>
      <div id="card">
        <Card />
      </div>
      <div id="diference">
        <Diference />
      </div>
      <div id="carousel">
        <Carousel />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="back">
        <Back />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
