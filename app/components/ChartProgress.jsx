import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'progressbar.js';

const ChartProgress = React.createClass({
  getInitialState() {
    return {
      percentage: 0
    }
  },

  componentWillMount() {
    let total;

    axios.get(`/api/steps/countTotal/${this.props.goalId}`)
      .then((results) => {
        total = results.data.count;
      })
      .catch((err) => {
        console.error(err);
      });

    axios.get(`/api/steps/countByGoal/${this.props.goalId}`)
      .then((results) => {
        const newPercent = results.data.count / total;
        this.setState({ percentage: newPercent })
        this.bar.animate(newPercent);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  makeCircle(container) {
    this.bar = new ProgressBar.Circle(container, {
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6,
      from: { color: '#FFEA82', a:0 },
      to: { color: '#ED6A5A', a:1 },
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
      }
    });

    this.bar.text.style.fontFamily = 'Source Sans Pro, Open Sans, sans-serif';
    this.bar.text.style.fontSize = this.props.fontSize;
    this.bar.text.style.color = '#546673';
    this.bar.animate(this.state.percentage);
  },

  componentDidMount() {
    console.log('did mount', this.state.percentage);
    const container = ReactDOM.findDOMNode(this);
    this.makeCircle(container);
  },

  // componentDidUpdate() {
  //   const container = ReactDOM.findDOMNode(this);
  //   this.makeCircle(container);
  // },

  render() {
    const stylez = {
      height: this.props.height,
      width: this.props.width
    }
    return <div style={stylez}></div>;
  }
});

export default ChartProgress;
