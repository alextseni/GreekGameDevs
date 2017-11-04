import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './filters.scss'

import {
  NoFilter,
  BackToTop,
} from 'static/icons'

import {
  Icon,
  Paper,
  Typography,
  Tooltip,
  Checkbox,
  Button,
  Badge,
  TextField,
  Chip,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Input,
  Drawer,
  Divider,
} from 'material-ui'

import MenuIcon from 'material-ui-icons/Menu'
import {
  KeyboardArrowUp,
  GridOn,
  ViewList
} from 'material-ui-icons'

class Filters extends Component {
  constructor (props: Filters.propTypes) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleDrawer = () => {
    this.setState({ open: !this.state.open })
  };

  handleViewChange = () => {
    const { view, changeView } = this.props
    view === 'list' ? changeView('grid') : changeView('list')
  }

  transformData = (mainCategory, subcategory = null, filterValues = null) => {
    this.props.updateFilter(mainCategory, subcategory, filterValues)
    this.props.updateData(mainCategory, filterValues)
  }

  render () {
    const { updateFilter, filters, resetAllFilters, view, updateData } = this.props
    return (
      <div className='filtersContainer'>
        <div className='mainFilters'>
          <Chip className='chip' label='sort by company' onClick={() => this.transformData('companies')} />
          <Chip className='chip' label='sort by game' onClick={() => this.transformData('games')} />
          <Tooltip style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} title='Coming soon!' placement='bottom'>
            <Chip className='chip' label='sort by people' />
          </Tooltip>
        </div>
        <Tooltip
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          id='tooltip-icon1'
          title='Change view'
          placement='top'>
          <Button
            raised
            onClick={this.handleViewChange}
           >
            {view === 'list' ? <GridOn /> : <ViewList /> }
          </Button>
        </Tooltip>
        <div className='drawerHandle'>
          <Tooltip style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} id='tooltip-icon' title='Open filters' placement='top'>
            <Button
              aria-label='open drawer'
              raised
              onClick={this.handleDrawer}
          >
              <MenuIcon />
            </Button>
          </Tooltip>
        </div>
        <Drawer
          anchor={'top'}
          type='persistent'
          open={this.state.open}
          className={'drawerBox'}
      >
          <div className={'drawerInner'}>
            {filters.main === 'companies' &&
            <div />
          }
            {filters.main === 'games' &&
            <div className='subfilters'>
              <Tooltip id='tooltip-icon2' title='Remove all filters' placement='bottom'>
                <Button raised onClick={() => resetAllFilters('games')} style={{ margin: '0 20px', minWidth: '32px', padding: 0 }}>
                  <NoFilter />
                </Button>
              </Tooltip>
              <FormControl className='form'>
                <InputLabel htmlFor='name-multiple'>Platforms</InputLabel>
                <Select
                  multiple
                  style={{ width: '200px' }}
                  value={filters.games.platforms}
                  onChange={(event) => this.transformData(filters.main, 'platforms', event.target.value)}
                  input={<Input id='name-multiple' />}
                  MenuProps={{
                    PaperProps: {
                      style: { maxHeight: 224, width: 200, },
                    },
                  }}
                 >
                  <MenuItem value={'steam'}> Steam </MenuItem>
                  <MenuItem value={'pc'}> PC </MenuItem>
                  <MenuItem value={'online'}> Online </MenuItem>
                  <MenuItem value={'playStore'}> Android </MenuItem>
                  <MenuItem value={'appStore'}> iOS </MenuItem>
                  <MenuItem value={'windowsStore'}> Windows </MenuItem>
                </Select>
              </FormControl>
              <FormControl className='form'>
                <InputLabel htmlFor='name-multiple'>Genres</InputLabel>
                <Select
                  multiple
                  style={{ width: '200px' }}
                  value={filters.games.genre}
                  onChange={(event) => this.transformData(filters.main, 'genre', event.target.value)}
                  input={<Input id='name-multiple' />}
                  MenuProps={{
                    PaperProps: {
                      style: { maxHeight: 224, width: 200, },
                    },
                  }}
                 >
                  <MenuItem value={'puzzle'}> Puzzle </MenuItem>
                  <MenuItem value={'adventure'}> Adventure </MenuItem>
                  <MenuItem value={'idle'}> Idle </MenuItem>
                  <MenuItem value={'rpg'}> RPG </MenuItem>
                  <MenuItem value={'horror'}> Horror </MenuItem>
                  <MenuItem value={'platform'}> Platform </MenuItem>
                </Select>
              </FormControl>
              <FormControl className='form'>
                <InputLabel htmlFor='name-multiple'>Style</InputLabel>
                <Select
                  multiple
                  style={{ width: '200px' }}
                  value={filters.games.style}
                  onChange={(event) => this.transformData(filters.main, 'style', event.target.value)}
                  input={<Input id='name-multiple' />}
                  MenuProps={{
                    PaperProps: {
                      style: { maxHeight: 224, width: 200, },
                    },
                  }}
                 >
                  <MenuItem value={'2d'}> {'2D'} </MenuItem>
                  <MenuItem value={'3d'}> {'3D'} </MenuItem>
                </Select>
              </FormControl>
              <FormControl className='form'>
                <InputLabel htmlFor='name-multiple'>Status</InputLabel>
                <Select
                  multiple
                  style={{ width: '200px' }}
                  value={filters.games.status}
                  onChange={(event) => this.transformData(filters.main, 'status', event.target.value)}
                  input={<Input id='name-multiple' />}
                  MenuProps={{
                    PaperProps: {
                      style: { maxHeight: 224, width: 200, },
                    },
                  }}
                 >
                  <MenuItem value={'Under Development'}> Under Development </MenuItem>
                  <MenuItem value={'released'}> Released </MenuItem>
                </Select>
              </FormControl>
              <FormControl className='form'>
                <InputLabel htmlFor='name-multiple'>Mode</InputLabel>
                <Select
                  multiple
                  style={{ width: '200px' }}
                  value={filters.games.mode}
                  onChange={(event) => this.transformData(filters.main, 'mode', event.target.value)}
                  input={<Input id='name-multiple' />}
                  MenuProps={{
                    PaperProps: {
                      style: { maxHeight: 224, width: 200, },
                    },
                  }}
                 >
                  <MenuItem value={'single'}> Single </MenuItem>
                  <MenuItem value={'lan'}> Local Multiplayer </MenuItem>
                  <MenuItem value={'mmo'}> MMO </MenuItem>
                </Select>
              </FormControl>
              </div>
           }
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
