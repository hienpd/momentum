import React from 'react';
import Paper from 'material-ui/Paper';

const Dashboard = React.createClass({
  render() {
    return <div>
      <h1>Dashboard</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <h3 className="left-align">Productivity</h3>
          <div className="dashboard-chart"></div>
          <div className="dashboard-rows">
            <div className="dashboard-goal">
              <div className="goal-details padding-sides">
                <h1>Write a book</h1>
                <p>Next step: Revise first draft</p>
              </div>
              <div className="goal-progress"></div>
            </div>
            <div className="dashboard-goal">
            <div className="goal-details padding-sides">
              <h1>Plan party</h1>
              <p>With: Dan</p>
              <p>Next step: Buy balloons</p>
            </div>
            <div className="goal-progress"></div>
            </div>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default Dashboard;
