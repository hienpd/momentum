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
      <Paper className="goal-form-container padding">
        <div className="goal-form-col">
          <NewGoalBasic />
        </div>
        <div className="goal-form-col">
          <NewGoalFriends />
          <NewGoalAdvanced />
          <RaisedButton
            className="goal-save-btn"
            label="Save Goal"
            secondary={true}
          />
        </div>
      </Paper>
    </div>;
  }
});

export default NewGoal;
