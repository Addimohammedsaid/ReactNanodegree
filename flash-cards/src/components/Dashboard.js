import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

// views
import QuestionPreviewPage from "../pages/QuestionPreviewPage";

function Dashboard(props) {
  const { unAnsweredQuestionsIds, answeredQuestionsIds } = props;

  const unAnsweredQuestions = unAnsweredQuestionsIds.map((questionId) => (
    <QuestionPreviewPage key={questionId} id={questionId} />
  ));

  const answeredQuestions = answeredQuestionsIds.map((questionId) => (
    <QuestionPreviewPage key={questionId} id={questionId} />
  ));

  const [index, setIndex] = React.useState(2);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => handleChangeIndex(2)}
          >
            unAnswered Questions
          </Button>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => handleChangeIndex(1)}
          >
            Answered Questions
          </Button>
        </div>
        <div hidden={index === 1}>{unAnsweredQuestions}</div>
        <div hidden={index === 2}>{answeredQuestions}</div>
      </Container>
    </div>
  );
}

function mapStateToProps({ authUser, questions }) {
  return {
    unAnsweredQuestionsIds: Object.keys(questions)
      .filter(
        (qid) =>
          !questions[qid].optionOne.votes.includes(authUser) &&
          !questions[qid].optionTwo.votes.includes(authUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionsIds: Object.keys(questions)
      .filter(
        (qid) =>
          questions[qid].optionOne.votes.includes(authUser) ||
          questions[qid].optionTwo.votes.includes(authUser)
      )
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
