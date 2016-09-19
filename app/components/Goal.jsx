import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

const Goal = React.createClass({
  // this.props.updateProgress(stepsCompleted)
  // goalIndex.stepsCompleted = goalIndex.stepsCompleted + 1;

  getInitialState() {
    return {
      goalId: 1,
      stepsCompleted: null,
      steps: [],
    };
  },



  render() {
    return <div>
      <h1>Goal</h1>
      <Paper className="paper-container">
        <div className="paper-col">
          <h2>Steps</h2>
          <Checkbox checked={true} label="Step 1" />
          <Checkbox label="Step 2" />
          <Checkbox label="Step 3" />
          <Checkbox label="Step 4" />
          <Checkbox label="Step 5" />
        </div>
      </Paper>
    </div>;
  }
});

export default Goal;
