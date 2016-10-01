import Checkbox from 'material-ui/Checkbox';
import React from 'react';

const Step = React.createClass({
  handleCheck(event, isChecked) {
    let completedAt;
    if (isChecked === false) {
      completedAt = null;
    }
    else {
      completedAt = new Date();
    }

    this.props.updateStep(completedAt, this.props.step);
  },

  render() {
    const { step } = this.props;
    return <Checkbox
      checked={step.completedAt ? true : false}
      label={step.stepName}
      onCheck={this.handleCheck}
      id={step.id}
    />;
  }
});

export default Step;
