import React from "react";
import { Router, Route } from "react-router-dom";

import Profile from "components/Pages/Profile";
import AddMemberToTrainingSeries from "components/Pages/TrainingSeries/Add/AddMemberToTrainingSeries";
import EditTrainingSeries from "components/Pages/TrainingSeries/Edit/";
import SingleTrainingSeries from "components/Pages/TrainingSeries/SinglePage/SingleTrainingSeries";
import SingleTrainingSeriesVolunteer from "components/VolunteerComponents/Pages/TrainingSeries/SinglePage/";
import Classes from "components/Pages/Classes/List/Overview/Overview";
import SingleClassView from "components/Pages/Classes/SinglePage/SingleClassView";
import CreateMessage from "components/Pages/TrainingSeries/Add/CreateMessage";
import MessagePage from "components/Pages/TrainingSeries/Add/MessagePage";
import HelpModal from "components/UI/HelpModal/HelpModal.js";
import ContactModal from "components/UI/ContactModal/ContactModal.js";

import Dashboard from "../Dashboard";
<<<<<<< HEAD
<<<<<<< HEAD
import VolunteerDashboard from "components/VolunteerComponents/Pages/Dashboard/VolunteerDashboard.js";
import Overview from "../../Classes/List/Overview";
=======
>>>>>>> master
=======
import VolunteerDashboard from "components/VolunteerComponents/Pages/Dashboard/VolunteerDashboard.js";
import Overview from "../../Classes/List/Overview";
>>>>>>> cfaab2a25d3aed4039aa6868b8c665715fc56bf5

function Routes(props) {
  const { setDisplaySnackbar, history, setIsTourOpen } = props;
  const disableSnackbar = () => {
    setDisplaySnackbar(false);
  };
  const activateTutorial = () => {
    props.history.push("/home");
    setIsTourOpen(true);
  };
  return (
    <Router history={history}>
      <Route
        exact
        path="/home/help"
        render={renderProps => (
          <HelpModal
            {...renderProps}
            history={props.history}
            userId={props.user.id}
          />
        )}
      />
      <Route
        exact
        path="/home/contact"
        render={renderProps => (
          <ContactModal
            {...renderProps}
            history={props.history}
            userId={props.user.id}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={renderProps => (
          <Dashboard
            {...renderProps}
            disableSnackbar={disableSnackbar}
            history={props.history}
            user_id={props.user.id}
          />
        )}
      />

      <Route
        path="/home/profile"
        render={renderProps => (
          <Profile
            {...renderProps}
            activateTutorial={activateTutorial}
            disableSnackbar={disableSnackbar}
          />
        )}
      />
      <Route
        path="/home/training-series/:id/addVolunteer"
        render={renderProps => (
          <AddMemberToTrainingSeries {...renderProps} user_id={props.user.id} />
        )}
      />
      <Route
        exact
        path="/home/training-series/:id"
        render={renderProps => (
          <SingleTrainingSeries
            {...renderProps}
            history={props.history}
            user_id={props.user.id}
          />
        )}
      />
      <Route
        exact
        path="/home-volunteer/training-series/:id"
        render={renderProps => (
          <SingleTrainingSeriesVolunteer
            {...renderProps}
            history={props.history}
            user_id={props.user.id}
          />
        )}
      />
      <Route
        path="/home/training-series/:id/edit"
        render={renderProps => (
          <EditTrainingSeries {...renderProps} user_id={props.user.id} />
        )}
      />
      <Route
        path="/home/create-message"
        render={renderProps => <CreateMessage {...renderProps} />}
      />
      <Route path="/home/message/:id" component={MessagePage} />
      <Route
        path="/home/classes"
        render={renderProps => (
          <Classes {...renderProps} user_id={props.user.id} />
        )}
      />
      <Route
        path="/home/classes/:id" 
        render={renderProps => (
          <SingleClassView {...renderProps} user_id={props.user.id} />
        )}
      />
    </Router>
  );
}

export default Routes;
