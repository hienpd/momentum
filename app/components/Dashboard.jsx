import React from 'react';
import Paper from 'material-ui/Paper';
import ChartProgress from 'components/ChartProgress';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      progress: [1, 2, 3]
    }
  },

  render() {
    return <div>
      <h1>Dashboard</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <h3 className="left-align">Productivity</h3>
          <div className="dashboard-chart">
            <ChartProgress
              progress={this.state.progress}
            />
          </div>
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
