import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import {
  Typography,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from 'material-ui'
import data from './content'

class Newsletter extends Component {
  constructor (props: Newsletter.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='credits'>
        <Typography type='headline' component='h4' className='title'>
          Credits
        </Typography>
        <Paper className='creditsList'>
          <Table className='creditsTable'>
            <TableBody>
              {data.map((c, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{c.credit}</TableCell>
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

Newsletter.propTypes = {
}

export default Newsletter
