import axios from 'axios';
import cookie from 'react-cookie';
import FontIcon from 'material-ui/FontIcon';
import { List, ListItem } from 'material-ui/List';
import NewGoalCategories from 'components/NewGoalCategories';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import ActionReorder from 'material-ui/svg-icons/action/reorder';

const tempSteps = [];

const NewGoal = React.createClass({
  getInitialState() {
    const userId = cookie.load('momentum_userId');

    return {
      goalName: '',
      userId: userId,
      steps: [],
      stepName: ''
    };
  },

  handleGoalChange(event) {
    const goalName = event.target.value;
    this.setState({ goalName });
  },

  handleStepChange(event) {
    const stepName = event.target.value;
    this.setState({ stepName });
  },

  handleSubmit() {
    axios.post('/api/goals_users', {
      goalName: this.state.goalName,
      userId: this.state.userId,
      steps: this.state.steps
    })
    .then(() => {
      window.location.reload();
    })
    .catch((err) => {
      console.error(err);
    })
  },

  handleAddStep() {
    tempSteps.push(this.state.stepName);
    this.setState({ steps: tempSteps, stepName: '' });
  },

  render() {
    return <div>
      <h1>Set a New Goal</h1>
      <Paper className="paper-container padding-sides">
        <div className="paper-col">
          <h3>Goal Basics</h3>
          <TextField
            floatingLabelText="Goal Name"
            fullWidth={true}
            onChange={this.handleGoalChange}
            value={this.state.goalName}
          />
          <div className="container-rows">
            <TextField
              floatingLabelText="Add a Step"
              onChange={this.handleStepChange}
              value={this.state.stepName}
            />
            <RaisedButton
              className="left-margin"
              label="Add"
              onClick={this.handleAddStep}
              primary={true}
            />
          </div>
          <div className="steps-list">
            <Subheader></Subheader>
            <Paper>
              <List>
                <Subheader>Steps for New Goal</Subheader>
                {this.state.steps.map((step, index) => {
                  return <ListItem
                    key={index}
                    leftIcon={<ActionReorder />}
                    primaryText={step}
                  />;
                })}
              </List>
            </Paper>
          </div>
        </div>
        <div className="paper-col">
          <h3>Optional Settings</h3>
          <NewGoalCategories />
          <div className="btn-container">
            <RaisedButton
              className="save-btn"
              label="Save Goal"
              secondary={true}
              onClick={this.handleSubmit}
            />
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default NewGoal;
