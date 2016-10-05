import { withRouter } from 'react-router';
import axios from 'axios';
import ChartProgress from 'components/ChartProgress';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import React from 'react';
import Step from 'components/Step';
import cookie from 'react-cookie';

const Goal = React.createClass({
  getInitialState() {
    return {
      stepsCompleted: null,
      steps: [],
      goal: {
        goalId: this.props.params.goalId
      },
      nudge: 0
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
        const sortedSteps = goalSteps.data.sort((a, b) => {
          return a.id - b.id;
        });
        this.setState({steps: sortedSteps});
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

    axios.get(`/api/steps/goal/${nextProps.params.goalId}`)
      .then((goalSteps) => {
        const sortedSteps = goalSteps.data.sort((a, b) => {
          return a.id - b.id;
        });
        this.setState({steps: sortedSteps});
      })
      .catch((err) => {
        console.error(err);
      });
  },

  updateStep(completedAt, step) {
    const userId = cookie.load('momentum_userId');
    console.log(userId);
    axios.patch(`/api/steps/${step.id}`, {completedAt, userId})
      .then((results) => {
        console.log('update step', results, userId);
        const nextSteps = this.state.steps.map((element) => {
          if (step !== element) {
            return element;
          }
          return results.data;
        });
        this.setState({ steps: nextSteps, nudge: this.state.nudge + 1 });
        // window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return <div>
      <h1>{this.state.goal.goalName}</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <div className="dashboard-chart">
            <h2 className="align-left">Percentage Complete</h2>
            <ChartProgress
              height="350px"
              width="350px"
              fontSize="5em"
              goalId={this.props.params.goalId}
              nudge={this.state.nudge}
            />
          </div>
          <div className="dashboard-goals">
            <h2>Steps to {this.state.goal.goalName}</h2>
            {this.state.steps.map((step, index) => {
              return <Step
                step={step}
                updateStep={this.updateStep}
                key={index}
              />;
            })}
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Goal);
