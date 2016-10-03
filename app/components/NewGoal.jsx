import axios from 'axios';
import cookie from 'react-cookie';
import FontIcon from 'material-ui/FontIcon';
import NewGoalAdvanced from 'components/NewGoalAdvanced';
import NewGoalCategories from 'components/NewGoalCategories';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const NewGoal = React.createClass({
  getInitialState() {
    const userId = cookie.load('momentum_userId');

    return {
      goalName: '',
      goalId: null,
      userId: userId,
      steps: []
    };
  },

  handleSubmit() {
    axios.post('/api/goals', {
      goalName: this.state.goalName,
      goalId: this.state.goalId
    })
    .then(() => {

    })
    .catch((err) => {
      console.error(err);
    })
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
          <NewGoalCategories />
          {/* <NewGoalAdvanced /> */}
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
