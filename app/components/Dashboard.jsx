import axios from 'axios';
import ChartProductivity from 'components/ChartProductivity';
import ChartProgress from 'components/ChartProgress';
import cookie from 'react-cookie';
import Paper from 'material-ui/Paper';
import React from 'react';
import { Link, withRouter } from 'react-router';

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
      quoteAuthor: '',
      goals: [],
      steps: {}
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

    Promise.all(MM.map((month) => { // This ONE
      return axios.get(`/api/steps/countByMonth/${username}/${currentYear}-${month}`);
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

    const goalsArr = [];
    const nextSteps = {};

    axios.get(`/api/goals/username/${username}`)
      .then((results) => {
        for (let i = 0; i < 2; i++) {
          if (results.data[i]) {
            goalsArr.push(results.data[i]);
          }
        }

        return goalsArr;
      })
      .then((goalsArr) => {
        const nextSteps = {};
        const axiosCalls = [];

        for (var i = 0; i < goalsArr.length; i++) {
          axiosCalls.push(axios.get(`/api/steps/goal/${goalsArr[i].goal_id}`));
        }

        return axios.all(axiosCalls);
      })
      .then((steps) => {
        for (var i = 0; i < steps.length; i++) {
          const sortedSteps = steps[i].data.sort((a, b) => {
            return a.id - b.id;
          });

          for (var j = 0; j < sortedSteps.length; j++) {
            if (sortedSteps[j].completedAt === null) {
              nextSteps[sortedSteps[j].goalId] = sortedSteps[j].stepName;
              break;
            }
          }
        }

        this.setState({
          goals: goalsArr,
          steps: nextSteps
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  componentWillReceiveProps() {
    this.componentWillMount();
  },

  render() {
    return <div>
      <h1>Dashboard</h1>
      <Paper className="paper-container padding-sides">
        <div className="dashboard-container">
          <div className="dashboard-chart">
            <h2 className="align-left">Your Productivity So Far for {currentYear}</h2>
            <ChartProductivity
              progress={this.state.progress}
              months={monthsAxis}
              data={this.state.dataPoints}
            />
            <div id="quote">
              <span>{this.state.quoteText} - {this.state.quoteAuthor}</span>
            </div>
          </div>
          <div className="dashboard-goals">
            <h2>Your Top Goals</h2>
              {this.state.goals.map((goal, index) => {
                return <div className="dashboard-goal" key={index}>
                  <div className="goal-details">
                    <h3>
                      <Link to={`/app/goal/${goal.goal_id}`}>
                        {goal.goal_name}
                      </Link>
                    </h3>
                    <p><b>Next Step:</b> {this.state.steps[goal.goal_id]}</p>
                  </div>
                  <ChartProgress
                    fontSize="2em"
                    height="100px"
                    width="100px"
                    goalId={goal.goal_id}
                  />
                </div>;
              })}
          </div>
        </div>
      </Paper>
    </div>;
  }
});

export default withRouter(Dashboard);
