// import ImageUpload from 'components/ImageUpload';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const Settings = React.createClass({
  render() {
    return <div>
      <h1>Settings</h1>
      <Paper className="paper-container padding-sides">
        <div className="paper-col">
          <h3>Account Details</h3>
          <TextField
            floatingLabelText="Username"
            defaultValue="kerrywa"
            disabled={true}
            fullWidth={true}
          />
          <TextField
            floatingLabelText="First Name"
            defaultValue="Kerry"
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Last Name"
            defaultValue="Washington"
            fullWidth={true}
          />
          <TextField
            floatingLabelText="Avatar Image URL"
            defaultValue=""
            fullWidth={true}
          />
        </div>
        <div className="paper-col">
          {/* <h3>Avatar</h3>
          <ImageUpload /> */}
          <div className="btn-container">
            <RaisedButton
              className="save-btn"
              label="Save Changes"
              secondary={true}
            />
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default Settings;
