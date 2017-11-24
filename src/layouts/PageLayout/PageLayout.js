import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Divider,
} from 'material-ui'
import {
  getMenuItems,
} from 'utils/helpers'

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
          <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
    <Link to={'/'} activeClassName='page-layout__nav-item--active'>
    <div className={'logoArea'} />
    </Link>
      <Toolbar className='navbar'>
        {getMenuItems().map(m =>
        <Link to={m.path} activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            {m.icon}
          </IconButton>
            <Typography type='title' component='h4' className='menuLabel'>
              {m.header}
            </Typography>
        </Link>
      )}
      </Toolbar>
      </div>
      <div style={{width: '100%'}}>
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
    </div>
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
