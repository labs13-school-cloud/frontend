import React, { useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/HomeOutlined";
import QuestionAnswer from "@material-ui/icons/QuestionAnswerOutlined";
import Timeline from "@material-ui/icons/TimelineOutlined";
// import ModeComment from "@material-ui/icons/ModeCommentOutlined";
import { withStyles } from "@material-ui/core/styles";
import { styles, Popover } from "../styles.js";

function TabNavigation(props) {
//   const { classes, newResponses } = props;
  const [overviewHover, setOverviewHover] = useState(false);
  const [trainingSeriesHover, setTrainingSeriesHover] = useState(false);
  const [classListHover, setClassListHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);

  return (
    <BottomNavigation
      data-tour={window.innerWidth < 650 ? "7" : null}
      value={props.topTab}
      onChange={(e, value) => {
        console.log("Tab is changing");
        props.setTopTab(value);
      }}
      style={{
        width: "100%",
        whiteSpace: "nowrap",
        background: "rgb(255,255,255)",
        position: "relative"
      }}
    >
      <BottomNavigationAction
        label="Overview"
        value="overview"
        icon={<Home />}
        color="primary"
        onMouseEnter={e => {
          setOverviewHover(true);
        }}
        onMouseLeave={e => {
          setOverviewHover(false);
        }}
      />
      <Popover
        style={overviewHover ? { display: "block" } : { display: "none" }}
      >
        Overview
      </Popover>
      <BottomNavigationAction
        label="Training Series"
        value="training series"
        icon={<Timeline />}
        onMouseEnter={e => {
          setTrainingSeriesHover(true);
        }}
        onMouseLeave={e => {
          setTrainingSeriesHover(false);
        }}
      />
      <Popover
        style={trainingSeriesHover ? { display: "block" } : { display: "none" }}
      >
        Training Series
      </Popover>

      <BottomNavigationAction
        label="Classes"
        value="classes"
        icon={<Timeline />}
        onMouseEnter={e => {
          setClassListHover(true);
        }}
        onMouseLeave={e => {
          setClassListHover(false);
        }}
      />
      <Popover
        style={classListHover ? { display: "block" } : { display: "none" }}
      >
        Classes
      </Popover>
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<QuestionAnswer />}
        onMouseEnter={e => {
          setContactHover(true);
        }}
        onMouseLeave={e => {
          setContactHover(false);
        }}
      />
      <Popover
        style={contactHover ? { display: "block" } : { display: "none" }}
      >
        Contact
      </Popover>
    </BottomNavigation>
  );
}
export default withStyles(styles)(TabNavigation);
