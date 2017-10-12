import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import SwipeableViews from 'react-swipeable-views'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <AppBar position="static" color="default">
      <Toolbar>
      <Tabs value={window.location.pathname}>
        <Tab label="Video Games" value='/'><IndexLink to='/' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label="Board Games" value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label="Connet" value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
        <Tab label="Contact" value='/history'> <Link to='/history' activeClassName='page-layout__nav-item--active' /></Tab>
      </Tabs>
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
