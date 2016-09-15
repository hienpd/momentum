import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewGoalFriends = React.createClass({
  render() {
    return <Card
      className="padding"
      initiallyExpanded={false}
    >
      <CardHeader
        title="Friends"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <TextField floatingLabelText="Add a Friend" />
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </CardText>
    </Card>;
  }
});

export default NewGoalFriends;
