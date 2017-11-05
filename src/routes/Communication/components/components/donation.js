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
            If you like this site, you can help keep the content fresh and the features coming by making a small donation.
          </Typography>
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="business" value="contact@greekgamedevs.com"/>
        <input type="hidden" name="cmd" value="_donations"/>
        <input type="hidden" name="item_name" value="Donation"/>
        <input type="hidden" name="item_number" value="Donate for Greek Game Devs site"/>
        <input type="hidden" name="currency_code" value="EUR"/>
        <input type="image" name="submit"
        src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/btn_donate_92x26.png"
        alt="Donate"/>
        <img alt="" width="1" height="1"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
  </form>

      </div>
    )
  }
}

Donation.propTypes = {
}

export default Donation
