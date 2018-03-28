import React, { Component } from 'react';
import Chart from 'chart.js';

class BarGraph extends Component {

  componentDidMount () {
    const { xAxis, yAxis, id, color } = this.props;
    const ctx = document.getElementById(id);

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
            },
            // ticks: {
            //   stepSize: 10
            // }
            // type: 'time',
            // time: {
            //   displayFormats: {
            //     week: 'MMM D'
            //   }
            // }
          }],
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