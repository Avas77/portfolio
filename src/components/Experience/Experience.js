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
                <span className="timeline__txt">Renegade Insurance (SDE1)</span>
                <span className="timeline__dte">08/2021 - Present</span>
                <span className="timeline__subtext">
                  <ul>
                    <li>
                      Worked on developing a dashboard application for insurance
                      agents to keep track of all the leads and get quotes from
                      different insurance carriers easily and instantly
                    </li>
                    <li>
                      Majorly used technologies include React, Chakra UI,
                      Typescript, React Hook Forms, React Query, React Table,
                      Redux Toolkit, Git Flow, Sentry, Storybook, Microsoft
                      Azure
                    </li>
                    <li>
                      Previously, Insurance agents used the traditional method
                      to store information about the leads in logbooks. With
                      this application, all the information was digitized and
                      stored online. This reduced the number of days it took to
                      get quotes and compare quotes from different carriers to a
                      couple of minutes
                    </li>
                  </ul>
                </span>
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
                  Treeleaf Technologies Pvt. Ltd, Software Engineer (FrontEnd)
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
                <Button
                  variant="outlined"
                  color="primary"
                  className="timeline__btn"
                  target="_blank"
                  href="https://drive.google.com/file/d/186ZUBYvjKwYRaNOD6MfyTOKtYA1ECHqP/view"
                >
                  <span>See my Experience letter</span>
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
                  href="https://drive.google.com/file/d/1HPpRSmY4ZqaR21C4qDRoIdnhxt6-E4Yg/view"
                >
                  <span>See my Experience letter</span>
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <h3 className="experience__subheading">Achievements</h3>
          <Timeline className="second-">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="achievements">
                <a
                  href="https://drive.google.com/file/d/1YqeYTxjbjaaNt5gOwhcYhSAhD02CyBPV/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Testing Javascript Course, August 2022
                </a>
                <br></br>
                <a>Runner up, NCCS Hackathon, Sept 2020</a>
                <br></br>
                <a
                  href="https://drive.google.com/file/d/180dC_YDuOrXD19net-EsQ5bql8FahDSE/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  Participant, NCCS Hackathon, May 2019<br></br>
                </a>
                <a
                  href="https://drive.google.com/file/d/1HRt6VYYYch-J7YoPDwTW0c-nG8lf1Ps4/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  One Day Workshop on MERN, Jan 2019
                </a>
                <br></br>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <h3 className="experience__subheading">Popular Blogs</h3>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="achievements">
                <span className="timeline__txt">
                  Dynamic Form using Schema-Based UI
                </span>
                <br></br>
                <a
                  href="https://dev.to/avas77/dynamic-form-using-schema-based-ui-22p0"
                  target="_blank"
                >
                  See my blog
                </a>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
