import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.scss'

import {
  Typography,
  Divider,

} from 'material-ui'
const axios = require('axios')

class MiniStats extends Component {
  constructor (props: MiniStats.propTypes) {
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
    return (
      <div style={{ width: '100%' }}>
        <Divider style={{ width: '100%' }} />
        {window.location.pathname === '/database/videogames' &&
          <div className='stats'>
            <Typography type='title' component='h4' className='menuLabel' style={{ margin: '0px 20px' }}>
            Teams: {this.state.totalTeams}
            </Typography>
            <Typography type='title' component='h4' className='menuLabel' style={{ margin: '0px 20px' }}>
            Games: {this.state.totalGames}
            </Typography>
          </div>
        }
      </div>
    )
  }
}

export default MiniStats
