import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import SwipeableViews from 'react-swipeable-views'
import {
  Toolbar,
  Typography,
  Tabs,
  Tab,
  AppBar
} from 'material-ui'

import data from 'data/videogames.js'

const totalTeams = data.length
const totalGames = data.map(d => d.games.length).reduce((accumulator, currentValue) => accumulator + currentValue)

export const PageLayout = ({ children }) => (
  <div className='text-center'>
    <AppBar position='static' color='default'>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Tabs value={window.location.pathname}>
        <Tab label='Video Games' value='/'><IndexLink to='/' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label='Board Games' value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label='Connect' value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label='Contact' value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
      </Tabs>
      {window.location.pathname === '/' &&
      <div className='stats'>
        <div className='stat'> Teams: {totalTeams} </div>
        <div className='stat'> Games: {totalGames} </div>
      </div>
      }
    </Toolbar>
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
