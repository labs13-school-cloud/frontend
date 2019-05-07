import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@material-ui/core/";

export default function TrainingSeriesTabSingle(props) {
  const [messageLength, setMessageLength] = useState(0);
  const [assignedLength, setAssignedLength] = useState(0);
  const [assignments, setAssignments] = useState([]);

  const {
    series: { id }
  } = props;

  useEffect(() => {
    const url = `${process.env.REACT_APP_API}/api/training-series/${id}`;

    axios
      .get(`${url}/messages`)
      .then(res => setMessageLength(res.data.messages.length))
      .catch(err => setMessageLength(err));

    axios
      .get(`${url}/assignments`)
      .then(res => {
        setAssignedLength(res.data.assignments.length);
        setAssignments(res.data.assignments);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h6">{props.series.title}</Typography>
          <hr />
        </Grid>
        <Grid item xs={6}>
          <Typography style={{ color: "gray" }} variant="caption">
            {props.series.description}
          </Typography>
        </Grid>

        <Grid item xs={6} align="center">
          <Grid item>
            <Typography variant="overline">
              messages: {messageLength}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline">
              assigned: {assignedLength}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
