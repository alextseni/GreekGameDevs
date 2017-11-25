import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './dataLayout.scss'
import _ from 'lodash'
import { findDOMNode } from 'react-dom'

import {
  Cards,
  Filters,
  Table,
} from 'routes/Database/components'

import {
  Paper,
  CircularProgress,
} from 'material-ui'

import InfiniteScroll from 'react-infinite-scroller'

const axios = require('axios')

class DataLayout extends Component {
  constructor (props: DataLayout.propTypes) {
    super(props)
    this.state = {
      contentToLoad: [],
      endOfContent: false,
      lastItemIndex: 0,
    }
  }

  getData = (type) => {
    axios.get('/api/' + this.props.route + '/' + type)
    .then((res) => {
      console.log('resp', res.data)
      this.props.initializeData(type, res.data)
      this.resetContent()
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

  componentWillMount = () => {
    this.props.sortByOptions.map(o =>
      this.getData(o))
  }

  render () {
    const { filters, updateFilter, resetAllFilters, view, changeView, currentData, updateData, sortByOptions } = this.props
    return (
        <Paper style={{ height: '100%', padding: '20px 20px 80px' }} elevation={2}>
          <div className='contentContainer' id='scrollContainer'>
            <Filters
              resetContent={this.resetContent}
              updateFilter={updateFilter}
              updateData={updateData}
              filters={filters}
              resetAllFilters={resetAllFilters}
              view={view}
              changeView={changeView}
              sortByOptions={sortByOptions} />
            <div className={view === 'list' ? 'containerList' : 'containerGrid'}>
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
                  <Cards
                    content={this.state.contentToLoad}
                    view={view}
                    filters={filters}
                  />
                }
              </InfiniteScroll>
            </div>
          </div>
        </Paper>
    )
  }
}

DataLayout.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
}

export default DataLayout
