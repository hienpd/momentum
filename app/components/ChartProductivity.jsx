import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

let chart = null;

const ChartProductivity = React.createClass({
  paint(ctx) {
    if (chart) {
      return;
    }

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.months,
        datasets: [{
          label: "Number of Steps",
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
          data: this.props.data,
          spanGaps: false,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fixedStepSize: 1
            }
          }]
        }
      }
    })
  },

  componentDidUpdate() {
    const canvas = ReactDOM.findDOMNode(this);
    const ctx = canvas.getContext('2d');

    this.paint(ctx);
  },

  render() {
    return <canvas></canvas>;
  }
});

export default ChartProductivity;
