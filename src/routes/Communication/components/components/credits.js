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
  TableHead,
} from 'material-ui'
import data from './content'

class Credits extends Component {
  constructor (props: Newsletter.propTypes) {
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

Credits.propTypes = {
}

export default Credits
