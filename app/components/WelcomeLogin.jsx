import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const WelcomeLogin = () => (
  <div className="container-cols">
    <h3>Log in with your username and password</h3>
    <TextField
      floatingLabelText="Username"
    />
    <TextField
      floatingLabelText="Password"
      type="password"
    />
    <RaisedButton
      label="Log In"
      secondary={true}
      className="margin"
    />
  </div>
);

export default WelcomeLogin;
