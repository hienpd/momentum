import axios from 'axios';
import ChartProductivity from 'components/ChartProductivity';
import ChartProgress from 'components/ChartProgress';
import cookie from 'react-cookie';
import Paper from 'material-ui/Paper';
import React from 'react';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      dataPoints: []
    }
  },

  componentWillMount() {
    let dataPoints = [];
    let queryString = '';

    const username = cookie.load('momentum_username');

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const MM = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    Promise.all(MM.map((month) => {
      return axios.get(`/api/steps/count/${username}/${currentYear}-${month}`);
    }))
      .then((results) => {
        const dataPoints = results.map((result) => {
          return result.data;
        });
        dataPoints.splice((currentMonth + 1), (11 - currentMonth));
        this.setState({ dataPoints });
      })
      .catch((err) => {
        console.error(err);
      });
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
          <h3 className="left-align">Your Productivity So Far for {currentYear}</h3>
          <div className="dashboard-chart">
            <ChartProductivity
              progress={this.state.progress}
              months={monthsAxis}
              data={this.state.dataPoints}
            />
          </div>
          <div className="dashboard-rows">
            <div className="dashboard-goal">
              <div className="goal-details">
                <h1>Write a book</h1>
                <p>Next step: Revise first draft</p>
              </div>
              <ChartProgress />
            </div>
            <div className="dashboard-goal">
            <div className="goal-details">
              <h1>Plan party</h1>
              <p>With: Dan</p>
              <p>Next step: Buy balloons</p>
            </div>
            <ChartProgress />
            </div>
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default Dashboard;
