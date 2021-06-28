import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import setAuthUser from '../redux/actions/authUser';

const LoginPage = (props) =>{
  
  const { users, dispatch } = props;

  // hook state
  const [userId, setUserId] = React.useState('');

  const handleChange = (event) => {
      setUserId(event.target.value);
  };

  // fnc for when clicked at login button
  const login = (e, id) => {        
    // id is not empty 
    if (id !== '') {
      // then assign id to auth user
      dispatch(setAuthUser(id));
    }
  };


  // render login layout
  return (
    <Grid container component="main" alignItems="center"  style={{ minHeight: "100vh" }}
    justify="center">
      <Grid item xs={12} sm={8} md={5}  elevation={0} >            
          <form noValidate
            onSubmit={(e) => login(e, userId)}
          >
            <FormControl
              variant="outlined"
              margin="normal"
              required
              fullWidth
            >
              <InputLabel id="select-outlined-label">Select User</InputLabel>
              <Select
                labelId="select-outlined-label"
                id="userId"
                value={userId}
                label="Select User"
                name="userId"
                autoFocus
                onChange={handleChange}
              >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>          
          </form>       
      </Grid>
    </Grid>);
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users).map((userId) => users[userId]),
  };
}

export default connect(mapStateToProps)(LoginPage);
