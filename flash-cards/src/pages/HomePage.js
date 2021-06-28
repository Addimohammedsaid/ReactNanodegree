import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthUser from '../redux/actions/authUser';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';
import AddQuestionPage from './AddQuestionPage';
import LeaderBoardPage from './LeaderBoardPage';
import Poll from './PollPage';

const HomePage = (props) => {
  const { dispatch, history, user } = props;

  // used when hit logout button
  const handleLogout = () => {
    // set id to null
    dispatch(setAuthUser(null));
    // go back
    history.push('/');
  };

  return (
    <div>
      <Nav handleLogout={handleLogout} user={user} />
      <Switch>
        <Route path="/add">
          <AddQuestionPage />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoardPage />
        </Route>
        <Route path="/questions/:questionId">
          <Poll />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps({ authUser, users }) {
  return {
    user: users[authUser],
  };
}

export default withRouter(connect(mapStateToProps)(HomePage));
