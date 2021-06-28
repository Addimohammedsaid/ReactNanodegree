import React from 'react';
import { connect } from 'react-redux';
import LeaderBoard from '../components/leaderBoard';

function LeaderBoardPage(props) {
  const { usersIds } = props;
  return <LeaderBoard usersIds={usersIds} />;
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users).sort(
      (a, b) =>
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        users[a].questions.length -
        Object.keys(users[a].answers).length
    ),
  };
}

export default connect(mapStateToProps)(LeaderBoardPage);
