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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import {
  getMenuItems,
  getDatabaseItems,
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
  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false })
  };

  render () {
    const { children } = this.props
    return (
      <div className='text-center'>
        <Drawer
          anchor={'right'}
          open={this.state.open}
          onRequestClose={this.handleDrawerClose}
>
          <div >
            <div >
              <IconButton onClick={this.handleDrawerClose}>
                { <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List >
              {getDatabaseItems().map(d =>
                <Link to={d.path} activeClassName='navItemLink'>
                  <ListItem button>
                    <ListItemIcon>
                      {d.iconSmall}
                    </ListItemIcon>
                    <ListItemText primary={d.header} />
                  </ListItem>
                </Link>
      )}
            </List>
            <Divider />
            <List >
              {getMenuItems().map(d =>
                <Link to={d.path} activeClassName='navItemLink'>
                  <ListItem button>
                    <ListItemIcon>
                      {d.iconSmall}
                    </ListItemIcon>
                    <ListItemText primary={d.header} />
                  </ListItem>
                </Link>
          )}</List>
          </div>
        </Drawer>

        <AppBar className='appbar'>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to={'/'} activeClassName='navItemLink'>
              <div className={'logoArea'} />
            </Link>
            {window.matchMedia('(max-width: 700px)').matches
    ? <IconButton
      color='contrast'
      aria-label='open drawer'
      onClick={this.handleDrawerOpen}
          >
      <MenuIcon className='burger' />
    </IconButton>
    : <Toolbar className='navbar'>
      {getMenuItems().map(m =>
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
          <div style={{ width: '100%' }}>
            <Divider style={{ width: '100%' }} />
            {window.location.pathname === '/videogames' &&
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
