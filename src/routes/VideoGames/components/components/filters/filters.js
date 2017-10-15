import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './filters.scss'

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
  Popover,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Input,
} from 'material-ui'

class Filters extends Component {
  constructor (props: Filters.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    const { updateFilter, filters } = this.props
    return (
      <div className='filtersContainer'>
        <div className='mainFilters'>
          <Chip className='chip' label='sort by company' onClick={() => updateFilter('company')} />
          <Chip className='chip' label='sort by game' onClick={() => updateFilter('games')} />
          <Chip className='chip' label='sort by people' />
        </div>
        {filters.main === 'company' &&
          <div />
        }
        {filters.main === 'games' &&
          <div>
            <FormControl>
               <InputLabel htmlFor='name-multiple'>Platforms</InputLabel>
               <Select
                 multiple
                 style={{width: '200px'}}
                 value={filters.games.links}
                 onChange={(event) => updateFilter(filters.main, 'links', event.target.value)}
                 input={<Input id='name-multiple' />}
                 MenuProps={{
                   PaperProps: {
                     style: {
                       maxHeight: 48 * 4.5 + 8,
                       width: 200,
                     },
                   },
                 }}
               >
                 <MenuItem value={'all'}> All </MenuItem>
                 <MenuItem value={'steam'}> Steam </MenuItem>
                 <MenuItem value={'playStore'}> Android </MenuItem>
                 <MenuItem value={'appStore'}> iOS </MenuItem>
                 <MenuItem value={'pc'}> PC </MenuItem>
                 <MenuItem value={'online'}> Web </MenuItem>
                 <MenuItem value={'windowsStore'}> Windows </MenuItem>
               </Select>
             </FormControl>
          </div>
      }
      </div>
    )
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
}

export default Filters
