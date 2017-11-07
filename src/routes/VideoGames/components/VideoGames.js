import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './VideoGames.scss'
import _ from 'lodash'
import { findDOMNode } from 'react-dom'

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
  Paper,
  Button,
  Popover,
} from 'material-ui'

const axios = require('axios')

class VideoGames extends Component {
  constructor (props: VideoGames.propTypes) {
    super(props)
    this.state = {
      openPopover: false,
      anchorEl: null,
      selectedItem: {},
      formItem: {},
      listView: true,
    }
  }

  handleFormChange = name => event => {
    this.setState({
      formItem: {
        [name]: event.target.value,
      }
    })
  }

  handleInfoButton = (event, index, selectedItem) => {
    this.setState({
      openPopover: true,
      anchorEl: findDOMNode(this.button[index]),
      selectedItem,
      formItem: selectedItem,
    })
  }
  button = []

  getData = (type) => {
    axios.get('/api/' + type)
    .then((res) => {
      console.log('resp', res.data)
      this.props.initializeData(type, res.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }

  componentWillMount = () => {
    this.getData('companies')
    this.getData('games')
  }

  render () {
    const { filters, updateFilter, resetAllFilters, view, changeView, currentData, updateData, } = this.props
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
          <div className='contentContainer' id='scrollContainer'>
            <Filters
              updateFilter={updateFilter}
              updateData={updateData}
              filters={filters}
              resetAllFilters={resetAllFilters}
              view={view}
              changeView={changeView} />
            <div className={view === 'list' ? 'cardsContainerList' : 'cardsContainerGrid'}>
              {currentData && currentData.map((item, index) => (
                <div className={view === 'list' ? 'btnandcardList' : 'btnandcardGrid'}>
                  <Button className='info'
                    onClick={() => this.handleInfoButton(event, index, item)}
                    ref={node => { this.button[index] = node }}>
                    <Info />
                  </Button>
                  {filters.main === 'companies' &&
                    <CardFront
                      title={item.company.name}
                      description={item.company.description}
                      image={item.company.image}
                      links1={item.links}
                      links2={[]}
                      content={item.games}
                      footer={item.company.founded}
                    />
                  }
                  {filters.main === 'games' &&
                    <CardFront
                      title={item.game.name}
                      image={item.game.image}
                      links1={item.media}
                      links2={item.platforms}
                      content={item.companies}
                      footer={item.game.released ? (item.game.status + ' (' + item.game.released + ')') : item.game.status}
                      tags={item.displayedtags}
                    />
                  }
                </div>
            ))}
            </div>
          </div>
        </Paper>
      </div>
    )
  }
}

VideoGames.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
}

export default VideoGames
