import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import {
  Typography,
} from 'material-ui'
import './calendar.scss'
const axios = require('axios')

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

class Calendar extends Component {
  constructor (props: Calendar.propTypes) {
    super(props)
    this.state = {
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

  render () {
    const { setCalendarEvents, events } = this.props
    return (
    <div className='calendar'>
      <div className='sectionTitle'>
        <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
          Upcoming game related events
        </Typography>
      </div>
      <BigCalendar
        {...this.props}
        events={events}
        views={['month', 'agenda']}
        defaultView='month'
        defaultDate={new Date()}
      />
    </div>
)
}}
Calendar.propTypes = {
}

export default Calendar
