import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ImageUpload from 'components/ImageUpload';

const Settings = React.createClass({
  render() {
    return <div>
      <h1>Settings</h1>
      <Paper className="padding">
        <div className="paper-col">
          <p>Account Username: kerrywa</p>
          <p>First Name: Kerry</p>
          <p>Last Name: Washington</p>

        </div>
        <div className="paper-col">
        <ImageUpload />
          <div className="btn-container">
            <RaisedButton
              className="save-btn"
              label="Log Out"
              secondary={true}
            />
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default Settings;
