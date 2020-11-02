import React from "react";
import "./Home.scss";
import program from "../../assets/programmer.png";
import About from '../About/About';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div className="content">
      <header className="home">
      <img src={program} alt="" className="home__image" />
      <h1 className="home__text">
        Hello, I'm <span>Avas Bajracharya.</span> Nice to Meet You. <br></br>I'm a
        Front-End Developer.
      </h1>
      </header>
      <About />
      <Projects />
    </div>
  );
};

export default Home;
