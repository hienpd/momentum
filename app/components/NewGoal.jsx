import React from 'react';
import Paper from 'material-ui/Paper';
import NewGoalBasic from 'components/NewGoalBasic';
import NewGoalFriends from 'components/NewGoalFriends';
import NewGoalAdvanced from 'components/NewGoalAdvanced';

const NewGoal = React.createClass({
  render() {
    return <div>
      <h1>Set a New Goal</h1>
      <Paper className="goal-form padding">
        <NewGoalBasic />
        <NewGoalFriends />
        <NewGoalAdvanced />
      </Paper>
    </div>;
  }
});

export default NewGoal;
