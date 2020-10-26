import React from "react";
import "./Sidebar.scss";
import img from "../../assets/avas1.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="author">
        <img src={img} alt="User Photo" className="author__image" />
      </div>
      <div className="icons">
        <IconButton disableFocusRipple = "true" href = "https://github.com/Avas77">
          <GitHubIcon className="icons__icon" />
        </IconButton>
        <IconButton disableFocusRipple = "true" href = "https://github.com/Avas77">
          <LinkedInIcon className="icons__icon" />
        </IconButton>
        <IconButton disableFocusRipple = "true" href = "https://www.instagram.com/tyavas77/">
          <InstagramIcon className="icons__icon" />
        </IconButton>
        <IconButton disableFocusRipple = "true" href = "https://www.facebook.com/avas.bajracharya">
          <FacebookIcon className="icons__icon" />
        </IconButton>
      </div>
      <nav className="Links">
        <ul className="Links__list">
          <li className="Links__list-items">
            <a href="" className="Links__item"><HomeIcon/>Home</a>
            <a href="" className="Links__item">About</a>
            <a href="" className="Links__item">Projects</a>
            <a href="" className="Links__item">Experience</a>
            <a href="" className="Links__item">Skills</a>
            <a href="" className="Links__item">Academics</a>
            <a href="" className="Links__item">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
