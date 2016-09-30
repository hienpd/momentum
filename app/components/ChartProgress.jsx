import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'progressbar.js';

const ChartProgress = React.createClass({

  makeCircle(container) {
    const bar = new ProgressBar.Circle(container, {
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

    bar.text.style.fontFamily = 'Source Sans Pro, Open Sans, sans-serif';
    bar.text.style.fontSize = this.props.fontSize;
    bar.text.style.color = '#546673';
    bar.animate(0.8);
  },

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this);
    this.makeCircle(container);
  },

  render() {
    const stylez = {
      height: this.props.height,
      width: this.props.width
    }
    return <div style={stylez}></div>;
  }
});

export default ChartProgress;
