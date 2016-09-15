import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const NewGoal = React.createClass({
  render() {
    return <div>
      <h1>Set a New Goal</h1>
      <Paper className="goal-form padding">
        <TextField
          floatingLabelText="Goal Name"
          hintText="Learn how to tango"
          floatingLabelFixed={true}
          fullWidth={true}
        /><br />
        <TextField
          floatingLabelText="Description"
          hintText="The tango is a passionate dance and a great way to meet new people and get exercise. Learning how to tango is important to me because it fulfills a lifelong dream."
          floatingLabelFixed={true}
          fullWidth={true}
          multiLine={true}
          rows={2}
        /><br />
        <TextField
          floatingLabelText="Add a Step"
          hintText="Research dance instructors"
          floatingLabelFixed={true}
        />
      </Paper>
    </div>;
  }
});

export default NewGoal;
