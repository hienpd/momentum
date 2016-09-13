import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import WelcomeTabs from 'components/WelcomeTabs';

const App = React.createClass({
  render() {
    return <div className="landing-page-container">
      <div className="container-cols">
        <div>
          <span id="brand-logo">Momentum</span>
        </div>
        <div>
          <span id="slogan">A Progress Tracker for Your Personal Goals</span>
        </div>
        <div className="landing-page-item container-rows">
          <WelcomeTabs />
        </div>
      </div>
    </div>;
  }
});

export default App;
