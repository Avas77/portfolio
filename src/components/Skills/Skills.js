import React from 'react'
import './Skills.scss'
import javascript from '../../assets/javascript.png'
import cplus from '../../assets/cplus.png'
import python from '../../assets/python.png'
import clogo from '../../assets/clogo.png'
import html from '../../assets/html.png'
import jsx from '../../assets/jsx.jpg'
import css from '../../assets/css.png'
import sass from '../../assets/sass.png'
import material from '../../assets/material.png'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.png'
import firebase from '../../assets/firebase.png'
import mysql from '../../assets/mysql.jpg'
import postgresql from '../../assets/postgresql.png'
import github from '../../assets/github.png'
import netlify from '../../assets/netlify.png'

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="skills__heading">Skills</h1>
            <div className="skills__box">
                <h2 className="skills__box-heading">Programming Languages</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={javascript} alt="" className="skills__image"/>
                        <span className="skills__name">Javascript</span>
                    </div>
                    <div className="skills__items">
                        <img src={cplus} alt="" className="skills__image"/>
                        <span className="skills__name">C++</span>
                    </div>
                    <div className="skills__items">
                        <img src={python} alt="" className="skills__image"/>
                        <span className="skills__name">Python</span>
                    </div>
                    <div className="skills__items">
                        <img src={clogo} alt="" className="skills__image"/>
                        <span className="skills__name">C</span>
                    </div>
                </div>
            </div>

            <div className="skills__box">
                <h2 className="skills__box-heading">HTML</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={html} alt="" className="skills__image"/>
                        <span className="skills__name even">HTML 5</span>
                    </div>
                    <div className="skills__items">
                        <img src={jsx} alt="" className="skills__image extend"/>
                        <span className="skills__name even">JSX</span>
                    </div>
                </div>
            </div>

            
            <div className="skills__box">
                <h2 className="skills__box-heading">CSS</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={css} alt="" className="skills__image"/>
                        <span className="skills__name">CSS 3</span>
                    </div>
                    <div className="skills__items">
                        <img src={sass} alt="" className="skills__image"/>
                        <span className="skills__name">Sass</span>
                    </div>
                    <div className="skills__items">
                        <img src={material} alt="" className="skills__image"/>
                        <span className="skills__name">Material UI</span>
                    </div>
                    <div className="skills__items">
                        <img src={bootstrap} alt="" className="skills__image circle"/>
                        <span className="skills__name">Bootstrap</span>
                    </div>
                </div>
            </div>

            <div className="skills__box">
                <h2 className="skills__box-heading">Javascript</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={javascript} alt="" className="skills__image"/>
                        <span className="skills__name even">Javascript</span>
                    </div>
                    <div className="skills__items">
                        <img src={react} alt="" className="skills__image" 
                        style={{width: '100px'}} />
                        <span className="skills__name even">React Js</span>
                    </div>
                </div>
            </div>

            <div className="skills__box">
                <h2 className="skills__box-heading">Backend</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={firebase} alt="" className="skills__image"/>
                        <span className="skills__name">Firebase</span>
                    </div>
                    <div className="skills__items">
                        <img src={mysql} alt="" className="skills__image"
                        style={{height: '80px', width:'130px'}} />
                        <span className="skills__name">MySQL</span>
                    </div>
                    <div className="skills__items">
                        <img src={postgresql} alt="" className="skills__image"/>
                        <span className="skills__name">Postgresql</span>
                    </div>
                </div>
            </div>

            <div className="skills__box">
                <h2 className="skills__box-heading">Others</h2>
                <div className="skills__cards">
                    <div className="skills__items">
                        <img src={github} alt="" className="skills__image"/>
                        <span className="skills__name even">Github</span>
                    </div>
                    <div className="skills__items">
                        <img src={netlify} alt="" className="skills__image"/>
                        <span className="skills__name even">Netlify</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
