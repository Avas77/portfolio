import React from "react";
import "./Home.scss";
import program from "../../assets/programmer.png";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Experience from '../Experience/Experience';

const Home = () => {
  return (
    <div className="content">
      <header className="home">
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
    </div>
  );
};

export default Home;
