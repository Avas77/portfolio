import React from "react";
import "./Experience.scss";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Experience = () => {
  return (
    <div className="experience">
      <h1 className="experience__heading">Experience</h1>
      <h3 className="experience__subheading">Work Experience</h3>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experience;
