import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewGoalBasic = React.createClass({
  render() {
    return <Card
      className="padding"
      initiallyExpanded={true}
    >
      <CardHeader
        title="Goal Basics"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <TextField floatingLabelText="Goal Name" />
        <br />
        <TextField floatingLabelText="Add a Step" />
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </CardText>
    </Card>;
  }
});

export default NewGoalBasic;
