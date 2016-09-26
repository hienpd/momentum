import axios from 'axios';
import ChartProductivity from 'components/ChartProductivity';
import ChartProgress from 'components/ChartProgress';
import cookie from 'react-cookie';
import Paper from 'material-ui/Paper';
import React from 'react';

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const monthsAxis = months.filter(function(month, index) {
  return index <= currentMonth;
});

const Dashboard = React.createClass({
  getInitialState() {
    return {
      dataPoints: [],
      quoteText: '',
      quoteAuthor: ''
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

    axios.get('http://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then((res) => {
      let { quoteText, quoteAuthor } = res.data;
      this.setState({ quoteText, quoteAuthor });
    })
    .catch((err) => {
      console.error(err);
    });
  },

  render() {
    return <div>
      <h1>Dashboard</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <div className="dashboard-chart">
            <h2>Your Productivity So Far for {currentYear}</h2>
            <ChartProductivity
              progress={this.state.progress}
              months={monthsAxis}
              data={this.state.dataPoints}
            />
          </div>
          <div className="dashboard-goals">
            <h2>Your Goals</h2>
            <div className="dashboard-goal">
              <div className="goal-details">
                <h3>Write a book</h3>
                <p>Next step: Revise first draft</p>
              </div>
              <ChartProgress />
            </div>
            <div className="dashboard-goal">
            <div className="goal-details">
              <h3>Plan party</h3>
              <p>With: Dan</p>
              <p>Next step: Buy balloons</p>
            </div>
            <ChartProgress />
            </div>
          </div>
        </div>
      </Paper>
      <div id="quote">
        <span>{this.state.quoteText} - {this.state.quoteAuthor}</span>
      </div>
    </div>;
  }
});

export default Dashboard;
