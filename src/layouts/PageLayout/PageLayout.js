import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Paper,
  Button,
} from 'material-ui'
import { MenuItem, MenuList } from 'material-ui/Menu'
import Grow from 'material-ui/transitions/Grow'
import { Manager, Target, Popper } from 'react-popper'
import ClickAwayListener from 'material-ui/utils/ClickAwayListener'

import {
  getMenuItems,
  getDatabaseItems,
} from 'utils/helpers'
import {
  MiniStats,
  BurgerMenu,
} from './components'

class PageLayout extends Component {
  constructor (props: PageLayout.propTypes) {
    super(props)
    this.state = {
      open: false,
    }
  }
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render () {
    const { children } = this.props
    return (
      <div className='text-center'>
        <AppBar className='appbar'>
          <div className='menuBar'>
            <Link to={'/'} activeClassName='navItemLink'>
              <div className={'logoArea'} />
            </Link>
            {window.matchMedia('(max-width: 700px)').matches
            ? <BurgerMenu />
            : <Toolbar className='navbar'>
              {getMenuItems().map(m =>
                  m.header === 'Database'
                  ? <Manager>
                    <Target>
                      <Link to={m.path} onClick={this.handleClick} activeClassName='navItemLink'>
                        <IconButton className='menuItem' aria-label='Menu'>
                          {m.icon}
                        </IconButton>
                        <Typography type='title' style={{ cursor: 'pointer' }} component='h4' className='menuLabel'>
                          {m.header}
                        </Typography>
                      </Link>
                    </Target>
                    <Popper
                      placement='bottom-start'
                      eventsEnabled={this.state.open}
                  >
                      <ClickAwayListener onClickAway={this.handleRequestClose}>
                        <Grow in={this.state.open} id='menu-list' style={{ transformOrigin: '0 0 0' }}>
                          <Paper>
                            <MenuList role='menu'>
                              {getDatabaseItems().map(d =>
                                <Link to={d.path}>
                                  <MenuItem onClick={this.handleRequestClose}>{d.header}</MenuItem>
                                </Link>
                          )}
                            </MenuList>
                          </Paper>
                        </Grow>
                      </ClickAwayListener>
                    </Popper>
                  </Manager>
                  : m.header !== 'Dashboard' &&
                  <Link to={m.path} activeClassName='navItemLink'>
                    <IconButton className='menuItem' aria-label='Menu'>
                      {m.icon}
                    </IconButton>
                    <Typography type='title' component='h4' className='menuLabel'>
                      {m.header}
                    </Typography>
                  </Link>
              )}
            </Toolbar>
            }
          </div>
          <MiniStats />
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
