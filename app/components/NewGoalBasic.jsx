import React from 'react';
import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewGoalBasic = React.createClass({
  render() {
    return <Card className="padding">
      <CardHeader title="Goal Basics" />
      <TextField
        floatingLabelText="Goal Name"
      /><br />
      <TextField
        floatingLabelText="Add a Step"
      />
      <FloatingActionButton mini={true}>
        <ContentAdd />
      </FloatingActionButton>
    </Card>;
  }
});

export default NewGoalBasic;
