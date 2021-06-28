import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

class App extends Component {

  componentDidMount() {   
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        {isLoggedIn ? <HomePage /> : <LoginPage />}
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    isLoggedIn: authUser !== null,
  };
}

export default connect(mapStateToProps)(App);
