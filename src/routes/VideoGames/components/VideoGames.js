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
  Table,
} from './components'

import {
  Info,
} from 'static/icons'

import {
  Paper,
  Button,
  Popover,
  CircularProgress,
} from 'material-ui'

import InfiniteScroll from 'react-infinite-scroller'

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
      contentToLoad: [],
      endOfContent: false,
      lastItemIndex: 0,
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
  //    console.log('resp', res.data)
      this.props.initializeData(type, res.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }

  resetContent = () => {
    this.setState({
      endOfContent: false,
      contentToLoad: [],
      lastItemIndex: 0,
    })
  }

  loadMoreItems = (page) => {
    const startingPoint = this.state.lastItemIndex
    const { currentData } = this.props
    const itemsToLoad = 20
    if(currentData) {
    this.setState({
      lastItemIndex: startingPoint + itemsToLoad,
      contentToLoad: this.state.contentToLoad.concat(
        currentData.slice(
          startingPoint,
          (startingPoint + itemsToLoad) >= currentData.length ? currentData.length : startingPoint + itemsToLoad)),
      endOfContent: (startingPoint + itemsToLoad) >= currentData.length,
    })
  }
  }

  closePopover = () => {
    this.setState({ openPopover: false })
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
          onRequestClose={() => this.closePopover()}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Form selectedItem={this.state.selectedItem} closePopover={this.closePopover} />
        </Popover>
        <Paper style={{ height: '100%', padding: '20px 20px 80px' }} elevation={2}>
          <div className='contentContainer' id='scrollContainer'>
            <Filters
              resetContent={this.resetContent}
              updateFilter={updateFilter}
              updateData={updateData}
              filters={filters}
              resetAllFilters={resetAllFilters}
              view={view}
              changeView={changeView} />
            <div className={view === 'list' ? 'cardsContainerList' : 'cardsContainerGrid'}>
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadMoreItems}
                hasMore={!this.state.endOfContent}
                loader={<CircularProgress className='contentLoader' size={50} thickness={8} />}
                >
                {view === 'table' ?
                  <Table
                    content={this.state.contentToLoad}
                    category={filters.main}
                  />
                :
                this.state.contentToLoad && this.state.contentToLoad.map((item, index) => (
                  <div className={view === 'list' ? 'btnandcardList' : 'btnandcardGrid'}>
                    <Button className='info'
                      onClick={() => this.handleInfoButton(event, index, item)}
                      ref={node => { this.button[index] = node }}>
                      <Info />
                    </Button>
                    <CardFront
                      view={view}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      links1={item.media}
                      links2={item.platforms}
                      content={item.content}
                      footer={(item.date || '') + '  ' + (item.status || ' ') + (item.location ? ' | ' + item.location : '')}
                      tags={item.displayedtags}
                    />
                  </div>
              ))}
            </InfiniteScroll>
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
