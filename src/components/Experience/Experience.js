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
        <Grid item xs={6}>
          <h3 className="experience__subheading">Work Experience</h3>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector color="primary" />
              </TimelineSeparator>
              <TimelineContent className="experience__content">
                <span className="timeline__txt">
                  Data Entry Job, Cloudfactory
                </span>
                <span className="timeline__subtext">
                  Worked on basic Image Digitization and Data Entry.
                </span>
                <Button
                  variant="outlined"
                  color="primary"
                  className="timeline__btn"
                >
                  <span>See my resume</span>
                </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid item xs={6}>
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
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </div>
  );
};

export default Experience;
