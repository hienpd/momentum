import React from 'react';
import Paper from 'material-ui/Paper';
import NewGoalBasic from 'components/NewGoalBasic';
import NewGoalFriends from 'components/NewGoalFriends';
import NewGoalAdvanced from 'components/NewGoalAdvanced';
import RaisedButton from 'material-ui/RaisedButton';

const NewGoal = React.createClass({
  render() {
    return <div>
      <h1>Set a New Goal</h1>
      <Paper className="paper-container padding">
        <div className="paper-col">
          <NewGoalBasic />
        </div>
        <div className="paper-col">
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
