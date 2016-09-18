import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

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
        <div className="container-rows">
          <TextField floatingLabelText="Add a Friend" />
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

export default NewGoalFriends;
