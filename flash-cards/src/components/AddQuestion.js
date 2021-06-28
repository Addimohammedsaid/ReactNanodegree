import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

export default function AddQuestionPage(props) {
  // used to give back the changed filled
  const { handleAddQuestion } = props;

  // get fields from props
  const [optionOneText, setOptionOneText] = React.useState('');
  const [optionTwoText, setOptionTwoText] = React.useState('');

  // add new value when input field change
  const handleOptionOneTextChange = (event) => {
    setOptionOneText(event.target.value);
  };

  const handleOptionTwoTextChange = (event) => {
    setOptionTwoText(event.target.value);
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box m={2} >
        <Typography component="h1" variant="h5">
         Add Question
        </Typography>
        <form
          noValidate
          onSubmit={(e) => handleAddQuestion(e, optionOneText, optionTwoText)}
        >
          <Typography component="h2" variant="h6">
            Would you rather ...
          </Typography>
          <Box m={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="optionOne"
                  name="optionOne"
                  variant="outlined"
                  required
                  fullWidth
                  id="optionOne"
                  label="Option One"
                  placeholder="Enter Option One Text Here"
                  onChange={handleOptionOneTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="optionTwo"
                  name="optionTwo"
                  variant="outlined"
                  required
                  fullWidth
                  id="optionTwo"
                  label="Option Two"
                  placeholder="Enter Option Two Text Here"
                  onChange={handleOptionTwoTextChange}
                />
              </Grid>
            </Grid>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"           
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
