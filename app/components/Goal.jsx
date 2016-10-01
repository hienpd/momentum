import { withRouter } from 'react-router';
import axios from 'axios';
import ChartProgress from 'components/ChartProgress';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import React from 'react';

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
      .then((goalDetails) => {
        this.setState({goal: goalDetails.data});
      })
      .catch((err) => {
        console.error(err);
      });

    axios.get(`/api/steps/goal/${this.props.params.goalId}`)
      .then((goalSteps) => {
        console.log(goalSteps.data);
        this.setState({steps: goalSteps.data});
      })
      .catch((err) => {
        console.error(err);
      });
  },

  componentWillReceiveProps(nextProps) {
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
      <h1>{this.state.goal.goal_name}</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <div className="dashboard-chart">
            <h2 className="align-left">Percentage Complete</h2>
            <ChartProgress height="350px" width="350px" fontSize="5em" />
          </div>
          <div className="dashboard-goals">
            <h2>Steps</h2>
            {this.state.steps.map((step) => {
              return <Checkbox label={step.step_name} />
            })}
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Goal);
