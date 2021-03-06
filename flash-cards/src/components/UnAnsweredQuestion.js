import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const UnAnsweredQuestion = (props) => {
 
  const [value, setValue] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const { user, question, handleAnswerQuestion } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div  style={{ padding : "20px", margin : "20px 0px"}}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Avatar"
              height="140"
              image={user.avatarURL}
              title="Avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="p">
                {`${user.name} asks:`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Would You Rather ...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <form
              onSubmit={(e) => handleAnswerQuestion(e, value)}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="options"
                  name="options"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="optionOne"
                    control={<Radio />}
                    label={question.optionOne.text}
                  />
                  <FormControlLabel
                    value="optionTwo"
                    control={<Radio />}
                    label={question.optionTwo.text}
                  />
                </RadioGroup>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"                 
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}


export default UnAnsweredQuestion;