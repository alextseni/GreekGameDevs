import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import SwipeableViews from 'react-swipeable-views'
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
} from 'material-ui'
import {
  VideoGames,
  Tools,
  News,
  Mail,
  Question,
} from 'static/icons'

const axios = require('axios')

class PageLayout extends Component {
  constructor (props: PageLayout.propTypes) {
    super(props)
    this.state = {
      totalGames: 0,
      totalTeams: 0,
    }
  }
  getStat = (stat) => {
    axios.get('/api/' + stat)
    .then((res) => {
      this.setState({
        [stat] : res.data.count,
      })
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }
  componentWillMount = () => {
    this.getStat('totalTeams')
    this.getStat('totalGames')
  }

  render () {
    const { children } = this.props
    return (
  <div className='text-center'>
    <AppBar className='appbar'>
      <Toolbar className='navbar'>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <News width='38px' height='50px' fill='white' />
            <Typography type='title' component='h4' className='menuLabel'>
              Dashboard
            </Typography>
          </IconButton>
        </IndexLink>
        <Link to='/videogames' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <VideoGames width='50px' fill='white' />
          </IconButton>
          <Typography className='menuLabel'>
            Video Games
          </Typography>
        </Link>
        {/* <Link to='/tools' activeClassName='page-layout__nav-item--active'>
            <IconButton className='menuItem' aria-label='Menu'>
            <Tools width='32px' fill='white' />
            </IconButton>
          </Link>
        */}
        <Link to='/communication' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <Mail width='38px' height='50px' fill='white' />
          </IconButton>
          <Typography type='title' component='h4' className='menuLabel'>
            Contact
          </Typography>
        </Link>
        <Link to='/info' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <Question width='38px' height='50px' fill='white' />
          </IconButton>
          <Typography type='title' component='h4' className='menuLabel'>
            F.A.Q
          </Typography>
        </Link>
      </Toolbar>
      <Divider style= {{width: '100%'}}/>
      {window.location.pathname === '/videogames' &&
      <div className='stats'>
      <Typography type='title' component='h4' className='menuLabel' style={{margin: '0px 20px'}}>
        Teams: {this.state.totalTeams}
      </Typography>
      <Typography type='title' component='h4' className='menuLabel' style={{margin: '0px 20px'}}>
        Games: {this.state.totalGames}
      </Typography>
      </div>
    }
    </AppBar>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
}
}
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
