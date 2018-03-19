import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import { Typography, List, ListItem, ListItemText, Avatar } from 'material-ui';
import { FacebookFollow } from 'static/icons';
import { getFeedIcon } from 'utils/helpers';
import { analytics } from 'utils';
import moment from 'moment';
import Pagination from 'rc-pagination';
import '!style-loader!css-loader!rc-pagination/assets/index.css';
import { classes, styles } from './style';

const axios = require('axios');

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      itemsPerPage: 5,
    };
  }

  componentWillMount = () => {
    this.getHistory();
  };

  onChange = page => {
    this.setState({
      page,
    });
  };

  getHistory = () => {
    axios
      .get('/api/' + 'history')
      .then(res => {
        console.log('resp', res.data);
        this.props.setHistory(res.data);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  render() {
    const { setHistory, history } = this.props;
    return (
      <div className={classes.newsWidth}>
        <div className={classes.sectionTitle}>
          <Typography type="headline" component="h4">
            {'Updates'}
          </Typography>
          <div
            className={classes.iconContainer}
            role="presentation"
            onClick={() => {
              analytics.logEvent({
                category: 'Follow',
                action: 'go to facebook',
              });
              window.open('https://www.facebook.com/ggdDatabase/');
            }}>
            <FacebookFollow style={styles.facebookIcon} />
          </div>
        </div>
        <div className={classes.updatesList}>
          <List>
            {_.take(
              history.slice((this.state.page - 1) * this.state.itemsPerPage),
              this.state.itemsPerPage,
            ).map(item => (
              <ListItem>
                <Avatar>{getFeedIcon(item.type)}</Avatar>
                <ListItemText
                  primary={item.description}
                  secondary={moment(item.date).format('DD-MM-YYYY')}
                />
              </ListItem>
            ))}
          </List>
          <div className={classes.dummy} />
          <div className={classes.pagination}>
            <Pagination
              onChange={this.onChange}
              pageSize={this.state.itemsPerPage}
              current={this.state.page}
              total={history?.length}
              //  showLessItems
            />
          </div>
        </div>
      </div>
    );
  }
}
News.propTypes = {};

export default News;
