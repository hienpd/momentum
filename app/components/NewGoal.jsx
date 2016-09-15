import React from 'react';
import Paper from 'material-ui/Paper';
import NewGoalBasic from 'components/NewGoalBasic';
import NewGoalFriends from 'components/NewGoalFriends';
import NewGoalAdvanced from 'components/NewGoalAdvanced';

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
        </div>
      </Paper>
    </div>;
  }
});

export default NewGoal;
