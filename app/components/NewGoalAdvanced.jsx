import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const NewGoalAdvanced = React.createClass({
  render() {
    return <Card
      className="padding"
      initiallyExpanded={false}
    >
      <CardHeader
        title="Advanced"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <TextField floatingLabelText="Set Deadline" />
        <br />
        <TextField floatingLabelText="Set Target" />
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
      </CardText>
    </Card>;
  }
});

export default NewGoalAdvanced;
