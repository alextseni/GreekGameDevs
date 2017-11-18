import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './table.scss'
import _ from 'lodash'
import {
  Paper,
  Button,
  Popover,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table as TableBoard,
} from 'material-ui'
import {
  transformName,
} from 'utils/helpers'

class Table extends Component {
  constructor (props: Table.propTypes) {
    super(props)
    this.state = {
    }
  }

  getHeader = (category) => ({
    'companies': ['Company/Team', 'Games', 'Media', 'Status'],
    'games': ['Game', 'Team(s)', 'Media', 'Platforms', 'Status'],
  }[category]);

  render () {
    const { content, category, } = this.props
    return (
      <Paper className='tableWrapper'>
        <TableBoard>
          <TableHead>
            <TableRow>
              {this.getHeader(category).map(h =>
                <TableCell padding={'dense'}>{h}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {content && content.map((item, index) => (
              <TableRow hover key={index}>
                <TableCell padding={'dense'}>
                  {item.name}
                </TableCell>
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.content.map(c =>
                    <a
                      target='_blank'
                      style={{ margin: '0px 10px' }}
                      href={c.link}>
                      {c.name}
                    </a>
                  )}
                  </div>
                </TableCell>
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.media.map(m =>
                    <a
                      target='_blank'
                      style={{ margin: '0px 10px' }}
                      href={m.link}>
                      {transformName(m.type) || m.type}
                    </a>)}
                  </div>
                </TableCell>
                {item.platforms &&
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.platforms.map(p =>
                    <a
                      target='_blank'
                      style={{ margin: '0px 10px' }}
                      href={p.link}>
                      {transformName(p.type) || p.type}
                    </a>)}
                  </div>
                </TableCell>
                }
                <TableCell padding={'dense'}>
                  {(item.date || '') + '  ' + (item.status || ' ') }
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </TableBoard>
      </Paper>
    )
  }
}

Table.propTypes = {
  content: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
}

export default Table
