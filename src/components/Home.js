import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import { UserContext } from './withAuthentication';

const button = {
  margin: '8px',
};

const page = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};

const card = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '85%',
  padding: '16px',
};

const Home = (props) => {
  const navigateTo = page => {
    props.history.push(`/${page}`)
  }

  return (
    <UserContext.Consumer>
      { user => (
        <div style={page}>
          <Card style={card}>
            <h1 style={{ marginBottom: '32px' }}>Welcome, {user.firstName}</h1>
            <Button
              variant="contained"
              color="primary"
              style={button}
              onClick={() => navigateTo('register')}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={button}
              onClick={() => navigateTo('attendance')}
            >
              Take Attendance
            </Button>
          </Card>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default withRouter(Home);
