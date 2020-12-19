import React, { useState } from "react";
import "./Contact.scss";
import Grid from "@material-ui/core/Grid";
import MessageIcon from "@material-ui/icons/Message";
import animate from "../../assets/animated.gif";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import axios from "../../axios-info";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const setData = () => {
    const data = {
      name: name,
      email: email,
      message: message,
    };
    axios
      .post("/info.json", data)
      .then((response) => {
        alert("Your message was delivered!!!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact__heading">Contact</h1>
      <Grid container spacing={2} className="contact__message">
        <Grid item xs={8} container direction="column" spacing={2}>
          <Grid item className="contact__header">
            Message me, nothing gives me more happiness than being able to
            connect with new people and helping each other.
          </Grid>
          <Grid item className="contact__header" direction="column">
            <MessageIcon className="message__icon" />
            <h2 className="message__header">Message</h2>
          </Grid>
          <Grid item>
            <form className="contact__form" id="form1">
              <input
                type="text"
                className="contact__input"
                placeholder="Enter Name *"
                name="username"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Enter Email *"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <textarea
                type="text"
                className="contact__textarea"
                placeholder="Enter message *"
                name="message"
                onChange={(event) => setMessage(event.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                className="contact__btn"
                onClick={setData}
              >
                Send
                <SendIcon className="send__icon" />
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={4} container justify="center" alignItems="center">
          <img src={animate} alt="Hello image" className="contact__image" />
        </Grid>
      </Grid>
      <div className="contact__info">
        <a className="contact__infobox" href="tel: 9803190991">
          <SmartphoneIcon className="contact__icon" />
          <span>9803190991</span>
        </a>
        <div className="contact__infobox">
          <EmailIcon className="contact__icon" />
          <span>avasbajracharya9@gmail.com</span>
        </div>
        <div className="contact__infobox">
          <a href="" className="fb__link">
            <FacebookIcon className="contact__icon" />
            <span> Be friends in facebook</span>
          </a>
        </div>
      </div>
      <div className="contact__finaltxt">The End. Have a nice day &#10084;</div>
    </div>
  );
};

export default Contact;
