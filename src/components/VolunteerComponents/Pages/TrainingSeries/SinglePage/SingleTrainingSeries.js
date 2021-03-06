import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { getTrainingSeriesID } from "store/actions";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  Link
} from "@material-ui/core/";

import { styles, Wrapper } from "./styles.js";

function SingleTrainingSeries(props) {
  const { getTrainingSeriesID, match } = props;
  useEffect(() => {
    getTrainingSeriesID(match.params.id);
  }, [getTrainingSeriesID, match]);
  const {
    name,
    title,
    subject,
    link
  } = props.activeTrainingSeries;

  const [finished, setFinish] = useState(false);
  const toggleChange = () => {
    setFinish(finished === false ? true : false);
  };
  return (
    <>
      <Wrapper>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                marginBottom: "1rem"
              }}
            >
              {title}
            </Typography>
            <Typography variant="body1" className={props.classes.info}>
              Subject: {subject}
            </Typography>
            <Typography variant="body1" className={props.classes.info}>
              Creator: {name}
            </Typography>
            <Typography className={props.classes.info}>
              Link to Training Series:
              <Link
                to={link}
                className={`${props.classes.info} ${props.classes.links}`}
              >
                {" "}
                Training Link
              </Link>
            </Typography>
            <Button
              style={{
                backgroundColor: finished === true ? "green" : "gray"
              }}
              onClick={toggleChange}
            >
              Done
            </Button>{" "}
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
}

const mapStateToProps = state => ({
  activeTrainingSeries: state.trainingSeriesReducer.activeTrainingSeries,
  userProfile: state.userReducer.userProfile
});

export default withRouter(
  connect(
    mapStateToProps,
    { getTrainingSeriesID }
  )(withStyles(styles)(SingleTrainingSeries))
);
