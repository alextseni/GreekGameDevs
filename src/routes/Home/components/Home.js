import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IndexLink, Link } from 'react-router'
import {
  Typography,
  Paper,
} from 'material-ui'
import './Home.scss'
import {
  Polls,
  Calendar,
  News,
} from './components'
import {
  getDatabaseItems,
} from 'utils/helpers'

class Home extends Component {
  constructor (props: Home.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { setCalendarEvents, events, setHistory, history } = this.props
    return (
      <div className='homecontainer'>
        <div className='welcome' style={{ backgroundImage: 'url(background.jpg)' }}>
          <Typography type='Title' component='h3' style={{ textAlign: 'center', color: 'white', marginTop: '26px' }}>
        Welcome to the GGD database!
      </Typography>
          <Typography type='headline' component='h4' style={{ color: 'white', marginTop: '10px' }}>
        Here you can find all sorts of information about the greek game development scene.
      </Typography>
          <div className='databases'>
            {getDatabaseItems().map(d =>
              <Link to={d.path} activeClassName='navItemLink'>
              <Paper className='dbCard' elevation={8}>
                {d.icon}
                <Typography type='title' component='h4' style={{ color: 'white', marginTop: '10px', fontSize: '16px' }}>
                {d.header}
                </Typography>
              </Paper>
              </Link>
            )}
          </div>
        </div>
        <div className='dashContent'>
        <div className={window.matchMedia('(min-width: 960px)').matches ? 'rowContainer' : 'columnContainer'}>
          <News
            history={history}
            setHistory={setHistory}
         />
          <Calendar
            events={events}
            setCalendarEvents={setCalendarEvents}
      />
        </div>
      {/*  <Polls /> */}
        </div>
      </div>

    )
  }
}
Home.propTypes = {
}

export default Home
