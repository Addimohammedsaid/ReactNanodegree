import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuestionPage from './QuestionPage';
import NotFound from './NotFoundPage';

const Poll = (props) => {
  // get question id from url
  const { questionId } = useParams();

  // get questions list
  const { questions } = props;

  // if question with id exist
  if (questions[questionId]) {

    //  then render question page
    return <QuestionPage id={questionId} />;
  }

  // else show not found page
  return <NotFound />;
}

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(Poll);
