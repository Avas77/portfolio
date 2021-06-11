import React from "react";
import "./Experience.scss";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1 className="experience__heading">Experience</h1>
      <Grid container>
        <Grid item sm={12} md={6}>
          <h3 className="experience__subheading">Work Experience</h3>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="experience__content">
                <span className="timeline__txt">
                  KTM Rush Pvt. Ltd, Web Designer Intern
                </span>
                <span className="timeline__dte">
                  8th Nov, 2020 - 10th Jan, 2021
                </span>
                <span className="timeline__subtext">
                  <ul>
                    <li>
                      Worked on a Single vender Ecommerce Food Delivery website
                      which is used to order food through the website similar to
                      Foodmandu, Bhojdeals etc.
                    </li>
                    <li>
                      Developed Foodlist page, MyAccounts Page, OrderHistory
                      page, Favourite Foods section page and many more.
                    </li>
                    <li>Fixed Minor bugs and design issues.</li>
                    <li>
                      Majorly worked with technologies like HTML, CSS,
                      Javascript, Jquery, Bootstrap.
                    </li>
                    <li>
                      Worked under the guidance of Mr. Anish Maharjan (Senior
                      Web Designer of KTM Rush Pvt. Ltd)
                    </li>
                  </ul>
                </span>
                <Button
                  variant="outlined"
                  color="primary"
                  className="timeline__btn"
                  target="_blank"
                  href="https://drive.google.com/file/d/1HPpRSmY4ZqaR21C4qDRoIdnhxt6-E4Yg/view?usp=sharing"
                >
                  <span>See certificate</span>
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="experience__content">
                <span className="timeline__txt">
                  KTM Rush Pvt. Ltd, Junior Web Designer
                </span>
                <span className="timeline__dte">
                  11th Jan, 2021 - 12th Feb, 2021
                </span>
                <span className="timeline__subtext">
                  <ul>
                    <li>
                      Worked on a Ecommerce website which displays attractive
                      kid's toys and users can place an order to buy them.
                    </li>
                    <li>
                      Developed a content management website for a Hospital
                    </li>
                    <li>
                      Worked on Travel Package Booking website in which users
                      book packages to travel anywhere in Nepal.
                    </li>
                    <li>
                      Worked on React.js, HTML, CSS, Javascript, Bootstrap,
                      Jquery, Figma, Anime.js etc.
                    </li>
                  </ul>
                </span>
                <Button
                  variant="outlined"
                  color="primary"
                  className="timeline__btn"
                  target="_blank"
                  href="https://drive.google.com/file/d/1e3EzVYvMtcIp9626BjtkRO3EYD8L6YRY/view?usp=sharing"
                >
                  <span>See my resume</span>
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item sm={12} md={6}>
          <Timeline className="second-column">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="experience__content">
                <span className="timeline__txt">
                  Treeleaf Technologies Pvt. Ltd, Software Engineer (FrontEnd)
                  Trainee
                </span>
                <span className="timeline__dte">13th Mar, 2021 - Present</span>
                <span className="timeline__subtext">
                  <ul>
                    <li>
                      Worked on a ticketing system web application similar to
                      JIRA which lets users create tickets for their daily task,
                      record the completion of their task, assign task to other
                      users etc.
                    </li>
                    <li>
                      Used the
                      <a
                        className="info-link"
                        href="https://github.com/react-boilerplate/react-boilerplate"
                        target="_blank"
                      >
                        React js Boilerplate
                      </a>
                      to make the application development process smoother and
                      faster which has built-in features like Redux, Immer,
                      Reselect, Redux Saga, Routing, Styled Components and many
                      more.
                    </li>
                    <li>
                      Worked on displaying the activity of the user starting
                      from creating tickets to closing the ticket after the
                      completion of the task.
                    </li>
                    <li>
                      Became familiar with the core concepts of React, Redux and
                      majorly worked using those tools along with Ant Design for
                      designing, Postman, GIT etc.
                    </li>
                  </ul>
                </span>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <h3 className="experience__subheading">Achievements</h3>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="achievements">
                Runner up, NCCS Hackathon, Sept 2020<br></br>
                Participant, NCCS Hackathon, May 2019<br></br>
                One Day Workshop on MERN, Jan 2019<br></br>
                <Button
                  variant="outlined"
                  color="primary"
                  className="timeline__btn"
                  target="_blank"
                  href="https://drive.google.com/file/d/1HRt6VYYYch-J7YoPDwTW0c-nG8lf1Ps4/view?usp=sharing"
                >
                  <span>See certificate</span>
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
