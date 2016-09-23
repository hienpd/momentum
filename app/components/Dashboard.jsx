import React from 'react';
import Paper from 'material-ui/Paper';
import ChartProductivity from 'components/ChartProductivity';
import axios from 'axios';
import cookie from 'react-cookie';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      progress: []
    }
  },

  componentWillMount() {
    let data;
    const userId = cookie.load('userId');
    console.log(userId);


    axios.get(`/api/count/${userId}`)
  },

  render() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    const monthsAxis = months.filter(function(month, index) {
      return index <= currentMonth;
    });

    return <div>
      <h1>Dashboard</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <h3 className="left-align">Productivity</h3>
          <div className="dashboard-chart">
            <ChartProductivity
              progress={this.state.progress}
              months={monthsAxis}
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
