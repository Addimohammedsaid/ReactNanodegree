import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const QuestionPreview = (props) => {

  const { user, question } = props;

  return (
    <Card variant="outlined" style={{ padding : "20px", margin : "20px 0px"}} elevation={0}>
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
            Would you rather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`...${question.optionOne.text}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          fullWidth
          component={Link}
          to={`/questions/${question.id}`}
        >
          View Poll
        </Button>
      </CardActions>
    </Card>
  );
}



export default QuestionPreview;
