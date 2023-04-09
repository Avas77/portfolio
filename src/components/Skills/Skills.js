import React from "react";
import "./Skills.scss";
import javascript from "../../assets/javascript.png";
import cplus from "../../assets/cplus.png";
import python from "../../assets/python.png";
import clogo from "../../assets/clogo.png";
import html from "../../assets/html.png";
import jsx from "../../assets/jsx.jpg";
import css from "../../assets/css.png";
import sass from "../../assets/sass.png";
import material from "../../assets/material.png";
import react from "../../assets/react.png";
import firebase from "../../assets/firebase.png";
import mysql from "../../assets/mysql1.png";
import postgresql from "../../assets/postgresql.png";
import github from "../../assets/github.png";
import netlify from "../../assets/netlify.png";
import java from "../../assets/java.png";
import django from "../../assets/django.jfif";
import Photoshop from "../../assets/photoshop.png";
import Zoom from "react-reveal/Zoom";
import ant from "../../assets/ant-design.png";
import postman from "../../assets/postman.png";
import Chakra from "../../assets/chakra-ui.png";
import Mantine from "../../assets/mantine.png";
import Next from "../../assets/next.png";
import Docker from "../../assets/docker.png";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="skills__heading">Skills</h1>
      <div className="skills__box">
        <h2 className="skills__box-heading">Programming Languages</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={javascript} alt="" className="skills__image" />
              <span className="skills__name">Javascript</span>
            </Zoom>
          </div>

          <div className="skills__items">
            <Zoom>
              <img src={cplus} alt="" className="skills__image" />
              <span className="skills__name">C++</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              {" "}
              <img src={python} alt="" className="skills__image" />
              <span className="skills__name">Python</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={clogo} alt="" className="skills__image" />
              <span className="skills__name">C</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={java}
                alt=""
                style={{ height: "80px", width: "120px" }}
              />
              <span className="skills__name">Java</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">HTML</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={html} alt="" className="skills__image" />
              <span className="skills__name even">HTML 5</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={jsx} alt="" className="skills__image extend" />
              <span className="skills__name even">JSX</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">CSS</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={css} alt="" className="skills__image" />
              <span className="skills__name">CSS 3</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={sass} alt="" className="skills__image" />
              <span className="skills__name">Sass</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={material} alt="" className="skills__image" />
              <span className="skills__name">Material UI</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={Chakra} alt="" className="skills__image" />
              <span className="skills__name">Chakra UI</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={Mantine} alt="" className="skills__image circle" />
              <span className="skills__name">Mantine UI</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={ant} alt="" className="skills__image circle" />
              <span className="skills__name">Ant Design</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">Javascript</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={javascript} alt="" className="skills__image" />
              <span className="skills__name even">Javascript</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={react}
                alt=""
                className="skills__image"
                style={{ width: "100px" }}
              />
              <span className="skills__name even">React Js</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={Next}
                alt=""
                className="skills__image"
                style={{ width: "100px" }}
              />
              <span className="skills__name even">Next.js</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">Backend</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img
                src={django}
                alt=""
                style={{ height: "80px", width: "120px" }}
              />
              <span className="skills__name even">Django</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">Database</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={firebase} alt="" className="skills__image" />
              <span className="skills__name">Firebase</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={mysql}
                alt=""
                className="skills__image"
                style={{ height: "80px", width: "130px" }}
              />
              <span className="skills__name">MySQL</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={postgresql} alt="" className="skills__image" />
              <span className="skills__name">Postgresql</span>
            </Zoom>
          </div>
        </div>
      </div>

      <div className="skills__box">
        <h2 className="skills__box-heading">Others</h2>
        <div className="skills__cards">
          <div className="skills__items">
            <Zoom>
              <img src={github} alt="" className="skills__image" />
              <span className="skills__name even">Github</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={Docker} alt="" className="skills__image" />
              <span className="skills__name even">Docker</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img src={netlify} alt="" className="skills__image" />
              <span className="skills__name even">Netlify</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={Photoshop}
                alt=""
                className="skills__image"
                style={{ width: "130px" }}
              />
              <span className="skills__name even">Adobe Photoshop</span>
            </Zoom>
          </div>
          <div className="skills__items">
            <Zoom>
              <img
                src={postman}
                alt=""
                className="skills__image"
                style={{ width: "190px" }}
              />
              <span className="skills__name even">Postman</span>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
