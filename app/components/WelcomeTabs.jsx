import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Login from 'components/Login';
import Register from 'components/Register';
import Paper from 'material-ui/Paper';

const WelcomeTabs = () => (
  <Tabs id="welcome-box">
    <Tab label="Login">
      <Paper className="padding">
        <Login />
      </Paper>
    </Tab>
    <Tab label="Register">
      <Paper className="padding">
        <Register />
      </Paper>
    </Tab>
  </Tabs>
);

export default WelcomeTabs;
