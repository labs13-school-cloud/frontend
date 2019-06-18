import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { styles, Wrapper } from "./styles.js";
import { withStyles } from "@material-ui/core/styles";
import {
  getTrainingSeriesID,
  getTrainingSeriesForVolunteer,
  getAllVolunteers,
  addVolunteerToTrainingSeries
} from "store/actions";

function AddMemberToTrainingSeries(props) {

  const [volunteers, getVolunteers] = useState(props.getVolunteers)
  useEffect(() => {
    props.getTrainingSeriesID(props.match.params.id);
  }, [props.getTrainingSeriesID]);

  useEffect(() => {
    props.getTrainingSeriesForVolunteer(props.match.params.id);
  }, [props.getTrainingSeriesForVolunteer]);
  useEffect(() => {
    getVolunteers()
  }, [volunteers]);


  return (
    <Wrapper>
      
      Add 
    </Wrapper>
  );
  }



const mapStateToProps = state => {
  return {
    volunteers: state.userReducer.volunteers,
    trainingSeriesVolunteers: state.trainingSeriesReducer.trainingSeriesVolunteers,
  };
};

export default connect(
  mapStateToProps,
  { getTrainingSeriesID, getTrainingSeriesForVolunteer,getAllVolunteers,
    addVolunteerToTrainingSeries }
)(withStyles(styles)(AddMemberToTrainingSeries));
