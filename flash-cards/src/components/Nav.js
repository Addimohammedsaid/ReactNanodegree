import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const Nav = (props) => {
  
  const { handleLogout, user } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>                  
          <Typography variant="h6" className={classes.title}>
          Welcome to Udacity Would you rather      
          </Typography>
          <Link style={{ margin : "0 5px", color : "white"}} to={{pathname: "/home",}}>Home</Link>
          <Link style={{ margin : "0 5px", color : "white"}} to={{pathname: "/leaderboard",}}>LeaderBoard</Link>
          <Link style={{ margin : "0 5px", color : "white"}} to={{pathname: "/add",}}>Add Question</Link>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding : "10px"}}>
            <Avatar src={user.avatarURL} className={classes.avatar}/>
            <p>{`Hello, ${user.name}`}</p>
          </div>          
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;