import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import WelcomeLogin from 'components/WelcomeLogin';
import WelcomeRegister from 'components/WelcomeRegister';
import Paper from 'material-ui/Paper';

const WelcomeTabs = () => (
  <Tabs id="welcome-box">
    <Tab label="Login">
      <Paper className="padding">
        <WelcomeLogin />
      </Paper>
    </Tab>
    <Tab label="Register">
      <Paper className="padding">
        <WelcomeRegister />
      </Paper>
    </Tab>
  </Tabs>
);

export default WelcomeTabs;
