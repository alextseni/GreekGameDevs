import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './filters.scss'
import _ from 'lodash'
import {
  NoFilter,
  BackToTop,
} from 'static/icons'
import {
  getViewIcon,
  getFilters,
} from 'utils/helpers'
import Select from 'react-select'
import '!style-loader!css-loader!react-select/dist/react-select.css'
import {
  Tooltip,
  Button,
  Chip,
  FormControl,
  MenuItem,
  InputLabel,
  Input,
  Drawer,
  TextField,
  IconButton,
  InputAdornment,
} from 'material-ui'

import {
  Clear,
  Search,
} from 'material-ui-icons'

class Filters extends Component {
  constructor (props: Filters.propTypes) {
    super(props)
    this.state = {
      open: false,
      searchText: '',
    }
  }

  handleDrawer = () => {
    this.setState({ open: !this.state.open })
  };

  handleViewChange = () => {
    const { view, changeView } = this.props
    changeView({
      'list': 'grid',
      'grid': window.matchMedia('(min-width: 770px)').matches ? 'table' : 'list',
      'table': 'list',
    }[view])
  }

  // reset = () => {
  //   const { resetAllFilters, filters, resetContent } = this.props
  //   resetAllFilters(filters.main)
  //   resetContent()
  // }

  transformData = (mainCategory, subcategory = null, filterValues = null) => {
    const searchValue = subcategory === null ? '' : this.state.searchText
    this.setState({
      searchText: searchValue,
    })
    this.props.updateFilter(mainCategory, subcategory, filterValues ? filterValues.split(',') : [])
    this.props.updateData(mainCategory, searchValue)
    this.props.resetContent()
  }

  search = name => event => {
    this.setState({
      searchText: event.target.value,
    })
  //  this.props.updateData(name, event.target.value)
  //  this.props.resetContent()
  };

  onSearch = (name, value) => {
    this.setState({
      searchText: value,
    })
    this.props.updateData(name, value)
    this.props.resetContent()
  };
  onEnter = (event) => {
    if (event.key === 'Enter') {
      this.props.updateData(this.props.filters.main, this.state.searchText)
      this.props.resetContent()
    }
  }

  clearSearchText = (name) => {
    this.setState({
      searchText: '',
    })
    this.props.updateData(name, '')
    this.props.resetContent()
  }


  render () {
    const { updateFilter, filters, view, updateData, resetContent, searchData, sortByOptions } = this.props
    return (
      <div className='filtersContainer'>
        <div className='filtersToolbar'>
          <div className='mainFilters'>
            {sortByOptions.map(o =>
              <Chip className='chip' label={'sort by ' + o} onClick={() => this.transformData(o)} />
            )}
          </div>
          <FormControl className='searchBar'>
            <Input
              id='searchBar'
              type={'text'}
              placeholder={'Search for ' + filters.main + '...'}
              value={this.state.searchText}
              onChange={this.search(filters.main)}
              onKeyDown={this.onEnter}
              className='searchInput'
              disableUnderline
              endAdornment={
                <InputAdornment position='end'>
                  {this.state.searchText &&
                  <IconButton
                    style={{ height: '25px', width: '25px' }}
                    onClick={() => this.clearSearchText(filters.main)}>
                    <Clear />
                  </IconButton>
                }
                </InputAdornment>
              }
            />
            <IconButton
              style={{
                height: '34px', width: '40px',
                backgroundColor: '#efefef',
                borderLeft: '1px solid #d4d4d4', borderRadius: 'inherit' }}
              onClick={() => this.onSearch(filters.main, this.state.searchText)}>
              <Search />
            </IconButton>
          </FormControl>
          <Tooltip
            style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '10px' }}
            id='tooltip-icon1'
            title='Change view'
            className='viewButton'
            placement='top'>
            <Button
              raised
              style={{ minWidth: '50px', padding: 0 }}
              onClick={this.handleViewChange}
             >
              {getViewIcon(view)}
            </Button>
          </Tooltip>
        </div>
        <div className='drawerHandle'>
          <Tooltip style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} id='tooltip-icon' title='Open filters' placement='top'>
            <Button
              aria-label='open drawer'
              raised
              style={{ minHeight: '36px', height: '36px' }}
              onClick={this.handleDrawer}
          >
              {'Filters'}
            </Button>
          </Tooltip>
        </div>
        <Drawer
          anchor={'top'}
          type='persistent'
          open={this.state.open}
          className={this.state.open ? 'drawerBox' : 'noDrawer'}
      >
          <div className={'drawerInner'}>
            <div className='subfilters'>
              {getFilters(filters.main).map(f =>
                <div className='multiselect'>
                  <Select
                    closeOnSelect
                    multi
                    onChange={(value) => {
                      this.transformData(filters.main, f.filterValue, value)
                    }}
                    options={f.filterOptions}
                    placeholder={f.filterName}
                    removeSelected={this.state.removeSelected}
                //    rtl={this.state.rtl}
                    simpleValue
                    value={filters[filters.main][f.filterValue]}
                  />
                </div>
            )}
            </div>
          </div>
        </Drawer>
        <div className='tools'>
          <Tooltip id='tooltip-icon3' title='Return to top' placement='top'>
            <Button raised onClick={() => window.scrollTo(0, 0)} style={{ margin: '0 10px', minWidth: '32px', padding: 0 }}>
              <BackToTop />
            </Button>
          </Tooltip>
        </div>
      </div>
    )
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
}

export default Filters
