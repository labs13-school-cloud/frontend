// parent component for app once logged in
import React, { Children } from "react";

//Routing
import { Link } from "react-router-dom";

//Styling
import styled from "styled-components";

//Components
import AppBar from "../AppBar/AppBar";
import TeamMembersView from "../TeamMembers/TeamMembersView";
import TrainingSeriesView from "../TrainingSeries/TrainingSeriesView";
import { NavigationView } from "../Navigation";

import { isLoggedIn, login } from "../../Auth/Auth";

class Dashboard extends React.Component {
  state = {
    tabValue: 0
  };

  // tracking the tab value in navigation.js
  changeTabValue = value => {
    this.setState({
      tabValue: value
    });
  };

  render() {
    return (
      <>
        <AppBar />
        <DashboardContainer>
          <NavigationView
            tabValue={this.state.tabValue}
            changeTabValue={this.changeTabValue}
          />
          {isLoggedIn() && (
            <>
              <h4>
                You are logged in! You can now view your{" "}
                <Link to='profile'>profile area</Link>.
              </h4>
              <div>
                {this.state.tabValue === 0 && <TrainingSeriesView />}
                {this.state.tabValue === 1 && <TeamMembersView />}
              </div>
            </>
          )}
          {!isLoggedIn() && (
            <h4>
              You are not logged in! Please{" "}
              <a style={{ cursor: "pointer" }} onClick={() => login()}>
                Log In
              </a>{" "}
              to continue.
            </h4>
          )}
        </DashboardContainer>
      </>
    );
  }
}
export default Dashboard;

//Styled Components
const DashboardContainer = styled.div`
  margin: 100px 0;
`;
