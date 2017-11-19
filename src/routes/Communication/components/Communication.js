import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Communication.scss'

import {
  Newsletter,
  Contact,
  Donation,
} from './components'

class Communication extends Component {
  constructor (props: Communication.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='container'>
        <Donation />
        <Newsletter />
        <Contact />
        <hr />
      </div>
    )
  }
}
Communication.propTypes = {
}

export default Communication