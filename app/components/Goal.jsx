import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import { withRouter } from 'react-router';

const Goal = React.createClass({
  // this.props.updateProgress(stepsCompleted)
  // goalIndex.stepsCompleted = goalIndex.stepsCompleted + 1;

  getInitialState() {
    return {
      stepsCompleted: null,
      steps: [],
      goal: {}
    };
  },

  componentWillMount() {
    axios.get(`/api/goals/goal_id/${this.props.params.goalId}`)
      .then((results) => {
        this.setState({goal: results.data});
      })
      .catch((err) => {
        console.error(err);
      });
  },

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.params.goalId);
    axios.get(`/api/goals/goal_id/${nextProps.params.goalId}`)
      .then((results) => {
        this.setState({goal: results.data});
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return <div>
      <h1>Goal</h1>
      <h2>{this.state.goal.goal_name}</h2>
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

export default withRouter(Goal);
