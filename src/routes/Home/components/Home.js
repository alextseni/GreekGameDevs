import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink, Link } from 'react-router';
import { Typography, Paper } from 'material-ui';
import { analytics, helpers } from 'utils';
import { withTheme } from 'material-ui/styles';
import { Calendar, News, Polls } from './components';
import { classes, styles } from './style';

const Home = (
  { setCalendarEvents, events, setHistory, history } = this.props,
) => (
  <div className={classes.homecontainer}>
    <div
      className={classes.welcome}
      style={{ backgroundImage: 'url(background.jpg)' }}>
      <Typography type="display1" component="h3" style={styles.header}>
        {'Welcome to the GGD database!'}
      </Typography>
      <Typography type="headline" component="h4" style={styles.subheader}>
        Here you can find all sorts of information about the greek game
        development scene.
      </Typography>
      <div
        className={classes.databases}
        style={{ maxWidth: `${300 * helpers.getDatabaseItems().length}px` }}>
        {helpers.getDatabaseItems().map(d => (
          <Link
            to={d.path}
            activeClassName={classes.navItemLink}
            onClick={() =>
              analytics.logEvent({
                category: 'Navigation',
                action: 'Tile clicked',
                label: d.header,
              })
            }>
            <Paper classes={{ root: classes.dbCard }} elevation={8}>
              {d.icon}
              <Typography type="title" component="h4" style={styles.cardTitle}>
                {d.header}
              </Typography>
            </Paper>
          </Link>
        ))}
      </div>
    </div>
    <div className={classes.dashContent}>
      <div className={classes.rowContainer}>
        <News history={history} setHistory={setHistory} />
        <Calendar events={events} setCalendarEvents={setCalendarEvents} />
      </div>
    </div>
  </div>
);
Home.propTypes = {};

export default withTheme()(Home);
