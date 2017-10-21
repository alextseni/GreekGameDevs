import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import SwipeableViews from 'react-swipeable-views'
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
} from 'material-ui'

import {
  VideoGames,
  BoardGames,
} from 'static/icons'

import data from 'data/videogames.js'

const totalTeams = data.length
const totalGames = data.map(d => d.games.length).reduce((accumulator, currentValue) => accumulator + currentValue)

export const PageLayout = ({ children }) => (
  <div className='text-center'>
    <AppBar className='appbar'>
      <Toolbar className='navbar'>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <VideoGames width='64px' fill='white' />
          </IconButton>
        </IndexLink>
        <Link to='/boardgames' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <BoardGames width='50px' fill='white' />
          </IconButton>
        </Link>
      </Toolbar>
      {window.location.pathname === '/' &&
        <div className='stats'>
          <div className='stat'> Teams: {totalTeams} </div>
          <div className='stat'> Games: {totalGames} </div>
        </div>
      }
    </AppBar>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
