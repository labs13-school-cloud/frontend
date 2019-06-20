// main page for displaying list of all training series
// React and Redux imports
import React, { useEffect } from "react";
import { connect } from "react-redux";

// Redux actions imports
import { getClassList } from "store/actions";

// Material UI imports
import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core/";
import DeleteModal from "components/UI/Modals/deleteModal";
import EditModal from "components/UI/Modals/editModal";
// Uses styles from training series overview
import {
  ListStyles,
  styles
} from "components/Pages/TrainingSeries/List/Overview/styles.js";

function ClassesOverview(props) {
  const { getFiltered, classes, history, getClassList, classList } = props;

  useEffect(() => {
    getClassList();
  }, [getClassList]);

  return (
    <ListStyles>
      {getFiltered(classList).map(classSingle => {
        const {
          id,
          class_name,
          subject,
          grade_level,
          number_of_students
        } = classSingle;
        return (
          <ListItem key={id} component="li" className={classes.listItem}>
            <ListItemText
              primary={class_name}
              secondary={`Subject: ${subject} | Grade: ${grade_level} | Students: ${number_of_students}`}
              onClick={e => history.push(`/home/training-series/${id}`)}
            />

            <div
              style={{
                width: "65px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <DeleteModal
                deleteType="classes"
                classId={props.id}
                className={`material-icons ${classes.icons}`}
              />
              <EditModal
                classList={classSingle}
                updateType="classes"
              />
            </div>
          </ListItem>
        );
      })}
    </ListStyles>
  );
}

const mapStateToProps = state => {
  return {
    classList: state.classesReducer.classList
  };
};

export default connect(
  mapStateToProps,
  { getClassList }
)(withStyles(styles)(ClassesOverview));