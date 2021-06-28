import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../redux/actions/shared';
import UnAnsweredQuestion from '../components/UnAnsweredQuestion';
import AnsweredQuestion from '../components/AnsweredQuestion';

const  QuestionPage = (props) => {

  const { dispatch, authUser, question, answered, user} = props;

  const answerQuestion = (e, answer) => {
    e.preventDefault();
    if (answer !== '') {      
      dispatch(
        handleAddQuestionAnswer({ authUser, qid: question.id, answer })
      );
    }
  };

  if (answered) {
    return (
      <AnsweredQuestion
        user={user}
        question={question}
        authUser={authUser}
      />
    );
  }
  return (
    <UnAnsweredQuestion
      user={user}
      question={question}
      handleAnswerQuestion={answerQuestion}
    />
  );
}

function mapStateToProps({ authUser, users, questions }, { id }) {
  return {
    authUser,
    answered: users[authUser].answers[id],
    user: users[questions[id].author],
    question: questions[id],
  };
}

export default connect(mapStateToProps)(QuestionPage);
