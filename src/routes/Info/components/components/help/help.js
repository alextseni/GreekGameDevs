import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './help.scss'

import {
  Typography,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableHead,
} from 'material-ui'
import help from './content'

class Help extends Component {
  constructor (props: Help.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='help'>
        <Paper className='helpList'>
          <Table className='helpTable'>
            <TableBody>
              {help.map((h, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{h.symbol}</TableCell>
                    <TableCell>{h.explanation}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

Help.propTypes = {
}

export default Help
