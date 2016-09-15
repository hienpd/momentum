import React from 'react';
import { Card, CardText, CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewGoalFriends = React.createClass({
  render() {
    return <Card className="padding">
      <CardHeader title="Friends" />
      <TextField
        floatingLabelText="Add a Friend"
      />
      <FloatingActionButton mini={true}>
        <ContentAdd />
      </FloatingActionButton>
    </Card>;
  }
});

export default NewGoalFriends;
