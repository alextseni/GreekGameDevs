import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Menu.scss'
import { IndexLink, Link } from 'react-router'
import {
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import ChevronRightIcon from 'material-ui-icons/ChevronRight'
import {
  getMenuItems,
  getDatabaseItems,
} from 'utils/helpers'

class BurgerMenu extends Component {
  constructor (props: BurgerMenu.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false })
  };

  render () {
    return (
      <div className='burgerContainer'>
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
              <Link to={d.path} onClick={this.handleDrawerClose}>
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
              d.header !== 'Database' &&
              <Link to={d.path} onClick={this.handleDrawerClose}>
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
      <IconButton
        color='contrast'
        aria-label='open drawer'
        onClick={this.handleDrawerOpen}
      >
        <MenuIcon className='burger' />
      </IconButton>
      </div>
    )
  }
}

export default BurgerMenu
