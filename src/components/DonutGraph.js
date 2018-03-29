import React, { Component } from 'react';
import Chart from 'chart.js';

class DonutGraph extends Component {
  
  componentDidMount () {
    const { percentage, id, color } = this.props;
    const ctx = document.getElementById(id);

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [ percentage, 100-percentage ],
            backgroundColor: [ color ]
          }],
        },
        options: {
          cutoutPercentage: 85,
          tooltips: {
            enabled: false
          },
          hover: {
            mode: ''
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuad'
          }
        }
    });
  }

  render () {
    const { id, percentage, color, label } = this.props;

    return (
      <div className="donut-container">
        <div className="donut-background uk-flex uk-flex-center uk-flex-middle uk-flex-column">
          <p className="donut-number" style={{ color: color }}>{percentage}<span>%</span></p>
          <p className="donut-label uk-text-muted">{label}</p>
        </div>
        <canvas id={id} width="100" height="100"></canvas>
      </div>
    );
  }
}

export default DonutGraph;