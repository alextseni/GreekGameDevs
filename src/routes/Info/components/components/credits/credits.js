import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './credits.scss'

import {
  Typography,
  Table,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TableHead,
} from 'material-ui'
import credits from './content'

class Credits extends Component {
  constructor (props: Credits.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='credits'>
        <Paper className='creditsList'>
          <Table className='creditsTable'>
            <TableHead>
               <TableRow>
                 <TableCell style={{textAlign: 'center', fontSize: '16px', fontWeight: 600}}>
                  Credits
                 </TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
              {credits.map((c, index) => {
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

Credits.propTypes = {
}

export default Credits
