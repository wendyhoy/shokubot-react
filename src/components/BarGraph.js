import React, { Component } from 'react';
import Chart from 'chart.js';

class BarGraph extends Component {

  componentDidMount () {
    const { xAxis, yAxis, counts, id, color } = this.props;
    const ctx = document.getElementById(id);

    const labelCallback = (tooltipItem, data) => {
      let label = `${tooltipItem.yLabel}%`;
      if (counts) {
        const count = counts[tooltipItem.index];
        label += ` | ${count} answer${count > 1 ? 's' : ''}`;
      }

      return label;
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: xAxis,
        datasets: [{
          data: yAxis,
          backgroundColor: color,
          borderWidth: 0,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              display: false,
              stepSize: 25
            },
            gridLines: {
              lineWidth: 0.3,
              zeroLineWidth: 0.5,
              drawTicks: false,
              drawBorder: false
            }
          }],
          xAxes: [{
            barPercentage: 0.75,
            gridLines: {
              lineWidth: 0.3,
              offsetGridLines: false
            }
          }],
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: labelCallback
          }
        },
        legend: false
      },

    });
  }

  render () {
    const { id } = this.props;
    return (
      <canvas id={id} width="4" height="1"></canvas>
    );
  }
}

export default BarGraph;