import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'
import _ from 'lodash'
import { findDOMNode } from 'react-dom'

import {
  CardFront,
  CardBack,
  Form,
} from 'routes/Database/components'

import {
  Info,
} from 'static/icons'

import {
  Paper,
  Button,
  Popover,
  CircularProgress,
} from 'material-ui'

class Cards extends Component {
  constructor (props: Cards.propTypes) {
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

  handleInfoButton = (event, index, selectedItem) => {
    this.setState({
      openPopover: true,
      anchorEl: findDOMNode(this.button[index]),
      selectedItem,
      formItem: selectedItem,
    })
  }
  button = []

  closePopover = () => {
    this.setState({ openPopover: false })
  }

  render () {
    const { view, content, filters } = this.props
    return (
      <div className='cardsContainer'>
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
        {content && content.map((item, index) => (
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
              hasImage={filters.main !== 'assets'}
              links1={item.links1}
              links2={item.links2}
              content={item.content}
              footer={item.other}
              tags={item.displayedtags}
                    />
          </div>
              ))}
      </div>
    )
  }
}

Cards.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
}

export default Cards
