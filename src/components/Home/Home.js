import React from "react";
import "./Home.scss";
import program from "../../assets/programmer.png";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import Academic from "../Academic/Academic";
import Contact from "../Contact/Contact";
import menu from "../../assets/menu.svg";

const Home = (props) => {
  return (
    <section className="content">
      <span className="toggler" onClick={props.clicked}>
        <img src={menu} alt="" className="menu-icon" />
      </span>
      <header className="home" id ="home">
        <img src={program} alt="" className="home__image" />
        <div className="home__text">
          <div className="home__text-primary">
            Hello, I'm <span>Avas Bajracharya.</span> Nice to Meet You.
          </div>
          <div className="home__text-secondary">I'm a Front-End Developer.</div>
        </div>
      </header>
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Academic />
      <Contact />
    </section>
  );
};

export default Home;
