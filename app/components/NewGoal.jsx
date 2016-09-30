import NewGoalAdvanced from 'components/NewGoalAdvanced';
import NewGoalFriends from 'components/NewGoalCategories';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

const NewGoal = React.createClass({
  render() {
    return <div>
      <h1>Set a New Goal</h1>
      <Paper className="paper-container padding-sides">
        <div className="paper-col">
          <h3>Goal Basics</h3>
          <TextField
            floatingLabelText="Goal Name"
            fullWidth={true}
          />
          <div className="container-rows">
            <TextField
              floatingLabelText="Add a Step"
            />
            <RaisedButton
              label="Add"
              primary={true}
              className="left-margin"
            />
          </div>
        </div>
        <div className="paper-col">
          <h3>Optional Settings</h3>
          <NewGoalFriends />
          <NewGoalAdvanced />
          <div className="btn-container">
            <RaisedButton
              className="save-btn"
              label="Save Goal"
              secondary={true}
            />
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default NewGoal;
