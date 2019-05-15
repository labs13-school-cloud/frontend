import React, { useEffect } from "react";
import { connect } from "react-redux";

import EditTeamMember from "../Add/";
import NotificationsCard from "components/Pages/Notifications/Card/";
import TeamMemberNotifications from "components/Pages/Notifications/Card/TeamMember";

import {
  editTeamMember,
  getTrainingSeries,
  getTeamMemberByID
} from "store/actions";

function Edit(props) {
  const {
    match,
    user_id,
    getTeamMemberByID: getTMFromProps,
    getTrainingSeries: getTSFromProps
  } = props;

  useEffect(() => {
    getTMFromProps(match.params.id);
    getTSFromProps(user_id);
  }, [getTMFromProps, getTSFromProps, match, user_id]);

  return (
    <>
      <EditTeamMember user_id={user_id} teamMember={props.teamMember} />
      <NotificationsCard
        limit={10}
        List={TeamMemberNotifications}
        member_id={match.params.id}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    trainingSeries: state.trainingSeriesReducer.trainingSeries,
    teamMember: state.teamMembersReducer.teamMember
  };
};

export default connect(
  mapStateToProps,
  { getTeamMemberByID, editTeamMember, getTrainingSeries }
)(Edit);