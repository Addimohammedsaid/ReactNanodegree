import React from 'react';
import Container from '@material-ui/core/Container';
import UserPage from '../pages/UserPage';

const LeaderBoard = (props) => {

  const { usersIds } = props;

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ margin : "20px 0"}}>
        {usersIds.map((userId) => (
          <UserPage key={userId} id={userId} />
        ))}
      </div>
    </Container>
  );
}

export default LeaderBoard;
