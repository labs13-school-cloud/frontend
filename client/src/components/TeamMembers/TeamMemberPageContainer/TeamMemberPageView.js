import React from "react";

import { connect } from "react-redux";

import TeamMemberPage from "./TeamMemberPage";

import {
  editTeamMember,
  getTrainingSeries,
  getTeamMemberByID,
  deleteTeamMember
} from "../../../store/actions";

class TeamMemberPageView extends React.Component {
  componentDidMount() {
    this.props.getTeamMemberByID(this.props.match.params.id);
    this.props.getTrainingSeries(this.props.userId);
  }

  editTeamMember = (e, changes) => {
    e.preventDefault();

    this.props.editTeamMember(this.props.match.params.id, changes);
  };

  deleteTeamMember = async e => {
    e.preventDefault();
    this.props.deleteTeamMember(this.props.match.params.id);

    setTimeout(() => {
      this.props.history.push("/home");
    }, 400);
  };

  render() {
    console.log("IS DELETING", this.props.isDeleting);
    console.log("PROPS ON TMPV", this.props);
    return (
      <>
        {this.props.loadSuccess && (
          <TeamMemberPage
            teamMember={this.props.teamMember}
            urlId={this.props.match.params.id}
            editTeamMember={this.editTeamMember}
            deleteTeamMember={this.deleteTeamMember}
            userId={this.props.userId}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEditing: state.teamMembersReducer.status.isEditing,
    isLoading: state.teamMembersReducer.status.isLoading,
    loadSuccess: state.teamMembersReducer.status.loadSuccess,
    loadFailed: state.teamMembersReducer.status.loadFailed,
    deleteSuccess: state.teamMembersReducer.status.deleteSuccess,
    isDeleting: state.teamMembersReducer.status.isDeleting,
    trainingSeries: state.trainingSeriesReducer.trainingSeries,
    teamMember: state.teamMembersReducer.teamMember
  };
};

export default connect(
  mapStateToProps,
  { getTeamMemberByID, editTeamMember, getTrainingSeries, deleteTeamMember }
)(TeamMemberPageView);
