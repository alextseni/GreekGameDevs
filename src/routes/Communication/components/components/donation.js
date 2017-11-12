import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import {
  Typography,
} from 'material-ui'

class Donation extends Component {
  constructor (props: Donation.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='donation'>
        <div className='textContent'>
          <Typography type='headline' component='h4' className='title'>
            Your support is invaluable!
          </Typography>
          <Typography type='subheading' component='h4'>
            You can help keep the content fresh and the features coming by making a small donation.
          </Typography>
        </div>
        <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>
          <input type='hidden' name='cmd' value='_s-xclick' />
          <input type='hidden' name='hosted_button_id' value='SHUSXA975383A' />
          <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif' border='0'
            name='submit' alt='PayPal - The safer, easier way to pay online!' />
          <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
        </form>

      </div>
    )
  }
}

Donation.propTypes = {
}

export default Donation
