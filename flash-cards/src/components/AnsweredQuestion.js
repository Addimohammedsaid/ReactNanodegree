import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";

export default function AnsweredQuestion(props) {
  const { authUser, user, question } = props;
  const countOne = question.optionOne.votes.length;
  const countTwo = question.optionTwo.votes.length;

  const answeredOptionOne = question.optionOne.votes.includes(authUser);

  const optionOne = (
    <Container style={{ margin: "20px 0" }}>
      <Typography gutterBottom variant="body1" component="p">
        {`Would you rather ${question.optionOne.text}?`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(countOne / (countOne + countTwo)) * 100}
        color="primary"
      />
      <Typography gutterBottom variant="body1" component="p">
        {`${question.optionOne.votes.length} out of ${
          question.optionOne.votes.length + question.optionTwo.votes.length
        } votes (${Math.round((countOne / (countOne + countTwo)) * 100)}%)`}
      </Typography>
    </Container>
  );

  const optionTwo = (
    <Container style={{ margin: "10px 0", width: "100%" }}>
      <Typography gutterBottom variant="body1" component="p">
        {`Would you rather ${question.optionTwo.text}?`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(countTwo / (countOne + countTwo)) * 100}
        color="primary"
      />
      <Typography gutterBottom variant="body1" component="p">
        {`${question.optionTwo.votes.length} out of ${
          question.optionOne.votes.length + question.optionTwo.votes.length
        } votes (${Math.round((countTwo / (countOne + countTwo)) * 100)}%)`}
      </Typography>
    </Container>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Card style={{ padding: "20px", margin: "20px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Avatar"
              height="145"
              image={user.avatarURL}
              title="Avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="p">
                {`${user.name} asks:`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Results:
              </Typography>
              <Box>
                {answeredOptionOne ? (
                  <Badge badgeContent="Yours" color="primary">
                    {optionOne}
                  </Badge>
                ) : (
                  optionOne
                )}
                {!answeredOptionOne ? (
                  <Badge badgeContent="Yours" color="primary">
                    {optionTwo}
                  </Badge>
                ) : (
                  optionTwo
                )}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Container>
  );
}
