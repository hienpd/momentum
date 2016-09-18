import { Card, CardHeader, CardText } from 'material-ui/Card';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        <DatePicker
          mode="landscape"
          hintText="Set Deadline"
          primary={true}
        />
        <div className="container-rows">
          <TextField floatingLabelText="Set Target" />
          <RaisedButton
            label="Add"
            primary={true}
            className="left-margin"
          />
        </div>
      </CardText>
    </Card>;
  }
});

export default NewGoalAdvanced;
