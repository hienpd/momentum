import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

const ChartProductivity = React.createClass({

  paint(ctx) {
    new Chart(ctx, {
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
              beginAtZero:true
            }
          }]
        }
      }
    })
  },

  componentDidMount() {
    const ctx = ReactDOM.findDOMNode(this).getContext('2d');
    this.paint(ctx);
  },

  componentDidUpdate() {
    const ctx = ReactDOM.findDOMNode(this).getContext('2d');
    this.paint(ctx);
  },

  render() {
    console.log('this.props.data', this.props.data);
    return <canvas></canvas>;
  }
});

export default ChartProductivity;
