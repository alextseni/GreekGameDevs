import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import SwipeableViews from 'react-swipeable-views'
import {
  Toolbar,
  AppBar,
  IconButton,
} from 'material-ui'
import {
  VideoGames,
  Tools,
  News,
  Mail,
} from 'static/icons'


const totalTeams = 0
const totalGames = 0

export const PageLayout = ({ children }) => (
  <div className='text-center'>
    <AppBar className='appbar'>
      <Toolbar className='navbar'>
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <News width='38px' fill='white' />
          </IconButton>
        </IndexLink>
        <Link to='/videogames' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <VideoGames width='50px' fill='white' />
          </IconButton>
        </Link>
        {/* <Link to='/tools' activeClassName='page-layout__nav-item--active'>
            <IconButton className='menuItem' aria-label='Menu'>
            <Tools width='32px' fill='white' />
            </IconButton>
          </Link>
        */}
        <Link to='/communication' activeClassName='page-layout__nav-item--active'>
          <IconButton className='menuItem' aria-label='Menu'>
            <Mail width='38px' fill='white' />
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
