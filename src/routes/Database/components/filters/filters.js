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

import {
  Tooltip,
  Button,
  Chip,
  Select,
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

  reset = () => {
    const { resetAllFilters, filters, resetContent } = this.props
    resetAllFilters(filters.main)
    resetContent()
  }

  transformData = (mainCategory, subcategory = null, filterValues = null) => {
    const searchValue = subcategory === null ? '' : this.state.searchText
    this.setState({
      searchText: searchValue,
    })
    this.props.updateFilter(mainCategory, subcategory, filterValues)
    this.props.updateData(mainCategory, searchValue)
    this.props.resetContent()
  }

  search = name => event => {
    this.setState({
      searchText: event.target.value,
    })
    this.props.updateData(name, event.target.value)
    this.props.resetContent()
  };

  clearSearchText = (name) => {
    this.setState({
      searchText: '',
    })
    this.props.updateData(name, '')
    this.props.resetContent()
  }

  render () {
    const { updateFilter, filters, resetAllFilters, view, updateData, resetContent, searchData, sortByOptions } = this.props
    return (
      <div className='filtersContainer'>
        <div className='filtersToolbar'>
          <div className='mainFilters'>
            {sortByOptions.map(o =>
              <Chip className='chip' label={'sort by ' + o} onClick={() => this.transformData(o)} />
            )}
          </div>
          <FormControl>
            <InputLabel>{'Search for ' + filters.main + '...'}</InputLabel>
            <Input
              id='searchBar'
              type={'text'}
              value={this.state.searchText}
              onChange={this.search(filters.main)}
              endAdornment={
                <InputAdornment position='end'>
                  {this.state.searchText &&
                  <IconButton
                    onClick={() => this.clearSearchText(filters.main)}>
                    <Clear />
                  </IconButton>
                }
                </InputAdornment>
              }
            />
          </FormControl>
          {window.matchMedia('(min-width: 500px)').matches &&
          <Tooltip
            style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: '10px' }}
            id='tooltip-icon1'
            title='Change view'
            placement='top'>
            <Button
              raised
              onClick={this.handleViewChange}
             >
              {getViewIcon(view)}
            </Button>
          </Tooltip>
        }
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
            {_.flattenDeep(Object.values(filters[filters.main])).length !== 0 &&
            <Button raised onClick={() => this.reset()} style={{ position: 'fixed', left: 0, maxWidth: '32px', padding: 0 }}>
              {'Clear filters'}
            </Button>
          }
            <div className='subfilters'>
              {getFilters(filters.main).map(f =>
                <FormControl className='form'>
                  <InputLabel htmlFor='name-multiple'>{f.filterName}</InputLabel>
                  <Select
                    multiple
                    style={{ width: '200px' }}
                    value={filters[filters.main][f.filterValue]}
                    onChange={(event) => this.transformData(filters.main, f.filterValue, event.target.value)}
                    input={<Input id='name-multiple' />}
                    MenuProps={{
                      PaperProps: {
                        style: { maxHeight: 224, width: 200, },
                      },
                    }}
                 >
                    {f.filterOptions.map(o =>
                      <MenuItem value={o.value}>{o.name}</MenuItem>
                    )}
                  </Select>
                </FormControl>
            )}
            </div>
            <div className='tools'>
              <Tooltip id='tooltip-icon3' title='Return to top' placement='bottom'>
                <Button raised onClick={() => window.scrollTo(0, 0)} style={{ margin: '0 20px', minWidth: '32px', padding: 0 }}>
                  <BackToTop />
                </Button>
              </Tooltip>
            </div>
          </div>
        </Drawer>
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
