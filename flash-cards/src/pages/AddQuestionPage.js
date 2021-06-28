import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../redux/actions/shared';
import AddQuestion from '../components/AddQuestion';

function AddQuestionPage(props) {

  const { dispatch, authUser, history } = props;

  // used to generate new question
  const options = (e, optionOneText, optionTwoText) => {
    // prevent click defaults
    e.preventDefault();
    
    // used to validate if the fields are filled
    if (optionOneText !== '' && optionTwoText !== '') {

      // if not empty then dispatch action
      dispatch(
        handleAddQuestion({ optionOneText, optionTwoText, author: authUser })
      );

      // then go back to home page
      history.push('/home');
    }
  };

  return <AddQuestion handleAddQuestion={options} />;
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default withRouter(connect(mapStateToProps)(AddQuestionPage));
