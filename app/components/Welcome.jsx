import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import WelcomeTabs from 'components/WelcomeTabs';

const Welcome = React.createClass({
  render() {
    return <div className="container">
      <div className="container-cols">
        <div>
          <span id="brand-logo">Momentum</span>
        </div>
        <div>
          <span id="slogan">A Progress Tracker for Your Personal Goals</span>
        </div>
        <div className="container-rows">
          <WelcomeTabs />
        </div>
      </div>
    </div>;
  }
});

export default Welcome;
