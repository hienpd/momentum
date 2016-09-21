import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const ChartProgress = React.createClass({

  paint(ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Number of Steps Accomplished",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [10, 8, 9, 4, 3, 2, 6],
          spanGaps: false,
        }]
      }
  })},

  componentDidMount() {
    const ctx = ReactDOM.findDOMNode(this).getContext('2d');
    this.paint(ctx);
  },

  componentDidUpdate() {
    const ctx = ReactDOM.findDOMNode(this).getContext('2d');
    this.paint(ctx);
  },

  render() {
    return <canvas id="myChart"></canvas>;
  }
});

export default ChartProgress;
