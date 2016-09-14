import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Register = () => (
  <div className="container-cols">
    <h3>Create an account to get started!</h3>
    <div>
      <TextField
        floatingLabelText="First Name"
      />
      <TextField
        floatingLabelText="Last Name"
      />
    </div>
    <div>
      <TextField
        floatingLabelText="Choose a Username"
      />
      <TextField
        floatingLabelText="Avatar URL"
        type="url"
        hintText="http://"
      />
    </div>
    <div>
      <TextField
        floatingLabelText="Choose a Password"
        type="password"
        id="password1"
      />
      <TextField
        floatingLabelText="Confirm Password"
        type="password"
        id="password2"
      />
    </div>
    <RaisedButton
      label="Register"
      secondary={true}
    />
  </div>
);

export default Register;
