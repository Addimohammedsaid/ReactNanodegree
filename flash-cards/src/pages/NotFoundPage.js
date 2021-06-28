import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

 const NotFound = (err) => {
  return (
    <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h3">
          Error 404 Page not found
        </Typography>       
    </Container>
  );
}


export default NotFound;
