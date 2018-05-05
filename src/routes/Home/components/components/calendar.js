import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { analytics } from 'utils';
import { classes, styles } from './style';
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css';
import { Typography, Popover, Button } from 'material-ui';
import { Event } from 'material-ui-icons';

const axios = require('axios');

moment.locale('el');
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillMount = () => {
    this.getEvents();
  };

  getEvents = () => {
    axios
      .get('/api/' + 'calendar')
      .then(res => {
        console.log('resp', res.data);
        this.props.setCalendarEvents(res.data);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  openPopOver = (event, e) => {
    this.setState({
      open: true,
      name: event.title,
      type: event.type,
      location: event.location,
      description: event.descr,
      starting: moment(event.start).format('DD-MM-YYYY HH:mm'),
      ending: moment(event.end).format('DD-MM-YYYY HH:mm'),
      anchorEl: e.target,
    });
  };

  render() {
    const { setCalendarEvents, events } = this.props;
    return (
      <div className={classes.calendar}>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={() => this.setState({ open: false, anchorEl: null })}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <div className={classes.eventDetails}>
            <Typography>{`${this.state.type}: ${this.state.name}`}</Typography>
            <Typography>{`starts: ${this.state.starting}`}</Typography>
            <Typography>{`ends: ${this.state.ending}`}</Typography>
            <Typography>
              <a
                target="_blank"
                href={this.state.description}
                style={{ textDecoration: 'underline' }}>
                {'Learn more'}
              </a>
            </Typography>
          </div>
        </Popover>
        <div className={classes.sectionTitle}>
          <Typography type="headline" component="h4">
            {'Upcoming events'}
          </Typography>
          <Button
            raised
            target="_blank"
            color="accent"
            onClick={() =>
              analytics.logEvent({
                category: 'Calendar',
                action: 'Subscribe button',
              })
            }
            href={`http://www.google.com/calendar/render?cid=http://${
              window.location.hostname
            }/calendar`}
            style={styles.subscribeButton}>
            {'Subscribe with google'}
            <Event style={styles.icon} />
          </Button>
        </div>
        <BigCalendar
          {...this.props}
          selectable
          onSelectEvent={(event, e) => {
            analytics.logEvent({
              category: 'Calendar',
              action: 'Calendar event clicked',
              label: event.title,
            });
            this.openPopOver(event, e);
          }}
          events={events}
          views={['month', 'agenda']}
          defaultView="month"
          defaultDate={new Date()}
        />
      </div>
    );
  }
}
Calendar.propTypes = {};

export default Calendar;
