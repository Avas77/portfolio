import React from "react";
import "./Sidebar.scss";
import img from "../../assets/avas1.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ExploreIcon from "@material-ui/icons/Explore";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import TimelineIcon from "@material-ui/icons/Timeline";
import ContactsIcon from "@material-ui/icons/Contacts";
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/Auxillary.js";

const Sidebar = (props) => {
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={`Sidebar ${props.open ? "open" : ""}`}>
        <div className="author">
          <img src={img} alt="User Photo" className="author__image" />
        </div>
        <div className="icons">
          <IconButton
            disableFocusRipple="true"
            href="https://github.com/Avas77"
            target="_blank"
          >
            <GitHubIcon className="icons__icon" />
          </IconButton>
          <IconButton
            disableFocusRipple="true"
            href="https://www.linkedin.com/in/avas-bajracharya-640357200/"
            target="_blank"
          >
            <LinkedInIcon className="icons__icon" />
          </IconButton>
          <IconButton
            disableFocusRipple="true"
            href="https://www.instagram.com/tyavas77/"
            target="_blank"
          >
            <InstagramIcon className="icons__icon" />
          </IconButton>
          <IconButton
            disableFocusRipple="true"
            href="https://www.facebook.com/avas.bajracharya"
            target="_blank"
          >
            <FacebookIcon className="icons__icon" />
          </IconButton>
        </div>
        <nav className="Links">
          <ul className="Links__list">
            <li className="Links__list-items">
              <a href="#home" className="Links__item" onClick={props.closed}>
                <HomeIcon className="Links__icon" />
                <span>Home</span>
              </a>
              <a href="#about" className="Links__item" onClick={props.closed}>
                <AccountCircleIcon className="Links__icon" />
                <span>About</span>
              </a>
              <a href="#projects" className="Links__item" onClick={props.closed}>
                <AccountTreeIcon className="Links__icon" />
                <span>Projects</span>
              </a>
              <a href="#experience" className="Links__item" onClick={props.closed}>
                <ExploreIcon className="Links__icon" />
                <span>Experience</span>
              </a>
              <a href="#skills" className="Links__item" onClick={props.closed}>
                <DoubleArrowIcon className="Links__icon" />
                <span>Skills</span>
              </a>
              <a href="#academic" className="Links__item" onClick={props.closed}>
                <TimelineIcon className="Links__icon" />
                <span>Academics</span>
              </a>
              <a href="#contact" className="Links__item" onClick={props.closed}>
                <ContactsIcon className="Links__icon" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="legal">&copy; 2020 Made by Avas Bajracharya</div>
      </div>
    </Aux>
  );
};

export default Sidebar;
