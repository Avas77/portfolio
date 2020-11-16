import React from "react";
import "./Contact.scss";
import Grid from "@material-ui/core/Grid";
import MessageIcon from "@material-ui/icons/Message";
import animate from "../../assets/animated.gif";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const Contact = () => {
  return (
    <div className="contact">
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
            <form action="" className="contact__form">
              <input
                type="text"
                className="contact__input"
                placeholder="Enter Name *"
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Enter Email *"
              />
              <textarea
                type="text"
                className="contact__textarea"
                placeholder="Enter Email *"
              />
              <Button
                variant="contained"
                color="secondary"
                className="contact__btn"
              >
                Send
                <SendIcon className="send__icon" />
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={4} container justify="center">
          <img src={animate} alt="Hello image" className="contact__image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
