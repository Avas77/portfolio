import React from "react";
import "./Academic.scss";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SchoolIcon from "@material-ui/icons/School";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

const Academic = () => {
  return (
    <div className="academic" id="academic">
      <h1 className="academic__heading">Academic Timeline</h1>
      <Timeline align="alternate" className="academic__timeline">
        <TimelineItem>
          <TimelineOppositeContent>2014</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="academic__icon">
              <LocalLibraryIcon />
            </TimelineDot>
            <TimelineConnector className="academic__connector" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="academic__content">
              <h4 className="academic__short">
                The Excelsior School, Kathmandu, Nepal, SLC
              </h4>
              <p className="academic__description">
                In this school, I had studied for my school level education. I
                passed my 10th examination in the year 2014 with 82.00%.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="board">
          <TimelineOppositeContent>2014 - 2016</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="academic__icon second">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector className="academic__connector" />
          </TimelineSeparator>
          <TimelineContent style={{ padding: "6px 5px" }}>
            <div
              className="academic__content"
              style={{
                textAlign: "left",
                backgroundColor: "#FFFFFF",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <h4 className="academic__short">
                SouthWestern State College, Kathmandu, Nepal, HSEB, 11th - 12th
              </h4>
              <p className="academic__description">
                After passing my 10th standard , I took admission in this
                college for further study of grade 11th and 12th. I graduated
                from college in the year 2016 with the aggregate marks 66.40%
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>2016 - Present</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className="academic__icon third">
              <AccountBalanceIcon />
            </TimelineDot>
            <TimelineConnector className="academic__connector" />
          </TimelineSeparator>
          <TimelineContent>
            <div className="academic__content">
              <h4 className="academic__short">
                National College of Computer Studies(NCCS), Kathmandu, Nepal
              </h4>
              <p className="academic__description">
                For Bachelor level studies, I took admission in NCCS to study
                Bachelors in Science of Computer Science and Information
                Technology(BSc. CSIT). I am currently in my final year.
              </p>
            </div>
          </TimelineContent>
        </TimelineItem>

        <div className="academic__last">
          <span className="academic__icon future">
            <AllInclusiveIcon />
          </span>
        </div>
      </Timeline>
    </div>
  );
};

export default Academic;
