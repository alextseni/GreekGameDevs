import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import {
  Typography,
  Popover,
  Button,
} from 'material-ui'
import './calendar.scss'
const axios = require('axios')
import { findDOMNode } from 'react-dom'

moment.locale('el')
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

class Calendar extends Component {
  constructor (props: Calendar.propTypes) {
    super(props)
    this.state = {
      open: false,
    }
  }

  getEvents = () => {
    axios.get('/api/' + 'calendar')
    .then((res) => {
      console.log('resp', res.data)
      this.props.setCalendarEvents(res.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }

  componentWillMount = () => {
    this.getEvents()
  }

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
    })
  }

  render () {
    const { setCalendarEvents, events } = this.props
    return (
      <div className='calendar'>
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
          }}
    >
          <div className='eventDetails'>
            <Typography>{this.state.type + ': ' + this.state.name}</Typography>
            <Typography>{'starts: ' + this.state.starting}</Typography>
            <Typography>{'ends: ' + this.state.ending}</Typography>
            <Typography><a target='_blank' href={this.state.description}>Learn more</a></Typography>
          </div>
        </Popover>
        <div className='sectionTitle'>
          <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
          Upcoming game related events
        </Typography>
        <Button
          raised
          target='_blank'
          color='accent'
          href={'http://www.google.com/calendar/render?cid=http://ggdtest.herokuapp.com/calendar'}>
            Subscribe to calendar
        </Button>
        </div>
        <BigCalendar
          {...this.props}
          selectable
          onSelectEvent={(event, e) => this.openPopOver(event, e)}
          events={events}
          views={['month', 'agenda']}
          defaultView='month'
          defaultDate={new Date()}
      />
      </div>
    )
  }
}
Calendar.propTypes = {
}

export default Calendar
