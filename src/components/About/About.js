import React from "react";
import "./About.scss";
import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Grid from "@material-ui/core/Grid";
import SchoolIcon from "@material-ui/icons/School";
import TodayIcon from "@material-ui/icons/Today";
import RoomIcon from "@material-ui/icons/Room";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import LanguageIcon from "@material-ui/icons/Language";

const About = () => {
  return (
    <section className="about">
      <h1 className="about__heading">About</h1>
      <p className="about__description">
        I am currently in my final year studying
        <a
          href="https://cdcsit.edu.np/academics/?bsc-csit"
          className="link"
          target="_blank"
        >
          Bachelors in Computer Science and Information Technology
        </a>
        at
        <a href="http://nccs.edu.np/" className="link" target="_blank">
          National College of Computer Studies(NCCS),
        </a>
        Paknajol, Kathmandu. I prefer to keep learning, continue challenging
        myself and do interesting things that matter. I like to surround myself
        with people who are focused on their goals, execution towards those
        goals, hardworking and always ready to help others in need. For me
        helping the society, fullfilling my parent's dreams, being honest, fair,
        and friendly with everyone are my top priorities. I don't like to define
        myself as a smart and talented individual but rather I would like to
        define myself as a very hardworking and passionate person. I've worked
        on various small and and big projects while learning and practising. My
        main goals include:
      </p>
      <div className="about__goals">
        <div className="goals__items">
          <div className="goals__items-icons">
            <SpeedIcon className="goals__icons" />
          </div>
          <span className="goals__text">Fast</span>
          <p className="goals__subtext">
            Fast load and lag-free Interaction,
            <br></br>My highest priority.
          </p>
        </div>
        <div className="goals__items">
          <div className="goals__items-icons">
            <DevicesIcon className="goals__icons" />
          </div>
          <span className="goals__text">Responsive</span>
          <p className="goals__subtext">
            My page layouts will work on any
            <br></br>device, big or small.
          </p>
        </div>
        <div className="goals__items">
          <div className="goals__items-icons">
            <EmojiObjectsIcon className="goals__icons" />
          </div>
          <span className="goals__text">User Centered</span>
          <p className="goals__subtext">
            Highest preference to easy to
            <br></br>use and user friendly UI.
          </p>
        </div>
        <div className="goals__items">
          <div className="goals__items-icons">
            <TrendingUpIcon className="goals__icons" />
          </div>
          <span className="goals__text">Dynamic</span>
          <p className="goals__subtext">
            My websites are adjustable with
            <br></br>different users.
          </p>
        </div>
      </div>
      <Grid className="details" container spacing={4}>
        <Grid item xs={12} container>
          <Grid item xs={2} />
          <Grid item xs={4} className="details__items">
            <div className="details__icon-box">
              <SchoolIcon className="details__icon" />
            </div>
            <div className="details__text">
              <span className="text__main">Degree</span>
              <span className="text__secondary">BSc. CSIT</span>
            </div>
          </Grid>
          <Grid item xs={4} className="details__items">
            <div className="details__icon-box">
              <TodayIcon className="details__icon" />
            </div>
            <div className="details__text">
              <span className="text__main">Age</span>
              <span className="text__secondary">22</span>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={2} />
          <Grid item xs={4} className="details__items">
            <div className="details__icon-box">
              <RoomIcon className="details__icon" />
            </div>
            <div className="details__text">
              <span className="text__main">Place</span>
              <span className="text__secondary">
                Banasthali, Kathmandu, Nepal
              </span>
            </div>
          </Grid>
          <Grid item xs={4} className="details__items">
            <div className="details__icon-box">
              <BlurOnIcon className="details__icon" />
            </div>
            <div className="details__text">
              <span className="text__main">Interests</span>
              <span className="text__secondary">
                Coding, Travelling, Music, Sports
              </span>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={2} />
          <Grid item xs={8} className="details__items">
            <div className="details__icon-box">
              <LanguageIcon className="details__icon" />
            </div>
            <div className="details__text">
              <span className="text__main">Languages</span>
              <span className="text__secondary small">
                Newari(Native), Nepali(Native), English(Professional), 
                Japanese(Beginner)
              </span>
            </div>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
