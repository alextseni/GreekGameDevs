import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { classes } from './style';

const axios = require('axios');

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    this.getData('games');
  };

  getData = type => {
    axios
      .get(`/api/stats/${type}`)
      .then(res => {
        console.log('resp', res.data);
        this.props.updateStats(res.data);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  transformData = type => {
    const { stats } = this.props;
    console.log(stats);
    return {
      labels: stats[type]?.labels,
      datasets: [
        {
          label: stats[type]?.label,
          data: stats[type]?.data,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
        },
      ],
    };
  };

  render() {
    const { stats } = this.props;
    return (
      <div className={classes.statsContainer}>
        <Bar
          data={this.transformData('gamesByYearData')}
          width={100}
          height={50}
          options={{}}
        />
        <hr />
      </div>
    );
  }
}

export default Stats;
