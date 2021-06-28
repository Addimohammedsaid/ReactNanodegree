import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Scores from './scores';

const User = (props) => {
  const { user } = props;
  return (
    <Card style={{marginBottom : "20px"}} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avatar"
          height="140"
          image={user.avatarURL}
          title="Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          <Scores
            answeredQuestions={Object.keys(user.answers).length}
            createdQuestions={user.questions.length}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default User;