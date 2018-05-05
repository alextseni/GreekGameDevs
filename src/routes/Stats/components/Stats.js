import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import CountUp from 'react-countup';
import _ from 'lodash';
import { Paper, Typography } from 'material-ui';
import { StatusCover } from 'commons/components';
import { theme } from 'styles';
import { classes, styles } from './style';
import content from './content';

const axios = require('axios');

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    this.getData('games');
    this.getData('gamesPlatforms');
    this.getData('gameDevs');
  //  this.getData('totalAssets');
  //  this.getData('totalTeams');
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

  transformData = (type, form) => {
    const { stats } = this.props;
    const { colors } = theme.palette;
    return {
      labels: stats[type]?.labels,
      datasets: [
        {
          label: stats[type]?.label,
          data: stats[type]?.data,
          backgroundColor: form === 'pie' ? _.values(colors) : colors.indigo,
          hoverBackgroundColor: [],
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBorderColor: 'rgba(255,99,132,1)',
        },
      ],
    };
  };

  render() {
    const { stats } = this.props;
    console.log(stats);
    return (
      <div className={classes.statsContainer}>
        <Paper elevation={1} className={classes.titleContainer}>
          <Typography type="headline" component="h4">
            {'Games'}
          </Typography>
          <div className={classes.counterContainer}>
            <div className={classes.label}>Total Games:</div>
            <CountUp
              className={classes.counter}
              start={0}
              end={stats.totalGames}
              duration={2}
              useEasing
              useGrouping
              separator="."
            />
          </div>
        </Paper>
        <StatusCover isLoading={!stats.totalGames}>
          <Bar
            data={this.transformData('gamesByYearData', 'bar')}
            width={100}
            height={50}
            options={{}}
          />
          <Doughnut
            data={this.transformData('gamesByStatusData', 'pie')}
            width={100}
            height={50}
            options={{}}
          />
        </StatusCover>
        <StatusCover isLoading={!stats.gamesByPlatformData}>
          <Doughnut
            data={this.transformData('gamesByPlatformData', 'pie')}
            width={100}
            height={50}
            options={{}}
          />
        </StatusCover>
        <Paper elevation={1} className={classes.titleContainer}>
          <Typography type="headline" component="h4">
            {'Game Devs'}
          </Typography>
          <div className={classes.counterContainer}>
            <div className={classes.label}>Total Game Devs:</div>
            <CountUp
              className={classes.counter}
              start={0}
              end={stats.totalGameDevs}
              duration={2}
              useEasing
              useGrouping
              separator="."
            />
          </div>
        </Paper>
        <StatusCover isLoading={!stats.totalGameDevs}>
          <Bar
            data={this.transformData('gameDevsByYearData', 'bar')}
            width={100}
            height={50}
            options={{}}
          />
          <Doughnut
            data={this.transformData('gameDevsByStatusData', 'pie')}
            width={100}
            height={50}
            options={{}}
          />
        </StatusCover>
      </div>
    );
  }
}

export default Stats;
