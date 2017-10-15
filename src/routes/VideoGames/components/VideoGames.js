import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoGames.scss'
import _ from 'lodash'
import { findDOMNode } from 'react-dom'

import {
  AddIcon,
  AddBox,
  IndeterminateCheckBox
} from 'material-ui-icons'

import {
  CardFront,
  CardBack,
  Filters,
  Form,
} from './components'

import {
  Info,
} from 'static/icons'

import {
  Icon,
  Paper,
  Typography,
  IconButton,
  Checkbox,
  Button,
  Badge,
  TextField,
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Popover,
  DropDownMenu,
  MenuItem,
} from 'material-ui'

import data from 'data/videogames.js'

class VideoGames extends Component {
  constructor (props: VideoGames.propTypes) {
    super(props)
    this.state = {
      openPopover: false,
      anchorEl: null,
      selectedItem: {},
      formItem: {},
    }
  }

  handleFormChange = name => event => {
  this.setState({
    formItem: {
      [name]: event.target.value,
    }
  });
};

  handleInfoButton = (event, index, selectedItem) => {
    console.log(index)
    this.setState({
      openPopover: true,
      anchorEl: findDOMNode(this.button[index]),
      selectedItem,
      formItem: selectedItem,
    })
  }
  button = []

  transformData = (filters) => {
    let items
    if (filters.main === 'company') {
      items = data.map(d => ({
        name: d.company.name,
        links: d.company.links,
        content: d.games,
        footer: d.company.founded,
      }))
    }
    if (filters.main === 'games') {
      items = [].concat(...data.map(d => (
       d.games.map(g => ({
         name: g.name,
         links: g.platforms || g.links,
         content: [d.company],
         footer: g.released,
       }))
    )))
      items = filters.games.links.includes('all') ? items :
        items.filter(i => filters.games.links.find(l => i.links[l]))
    }
    return _.sortBy(items, 'name')
  }

  render () {
    const { filters, updateFilter } = this.props
    const items = this.transformData(filters)
    return (
      <div>
        <Popover
          open={this.state.openPopover}
          anchorEl={this.state.anchorEl}
          onRequestClose={() => this.setState({ openPopover: false })}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Form selectedItem={this.state.selectedItem} />
        </Popover>
        <Paper style={{ height: '100%', padding: '20px 20px 80px' }} elevation={2}>
          <div className='contentContainer'>
            <Filters updateFilter={updateFilter} filters={filters} />
            {items.map((item, index) => (
              <div className='btnandcard'>
                <Button className='info'
                  onClick={() => this.handleInfoButton(event, index, item)}
                  ref={node => { this.button[index] = node }}>
                  <Info />
                </Button>

                <CardFront
                  title={item.name}
                  links={item.links}
                  content={item.content}
                  footer={item.footer}
                />
                {this.state.back &&
                <CardBack
                  title={item.name}
                  content={item.content}
                  />
              }
              </div>
            ))}
          </div>
        </Paper>
      </div>
    )
  }
}

VideoGames.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
}

export default VideoGames
