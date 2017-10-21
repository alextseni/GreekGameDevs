import React from 'react'
import PropTypes from 'prop-types'
import './Contact.scss'
import {
  Info,
} from 'static/icons'

import {
  Typography,
  IconButton,
  Button,
  TextField,
  Popover,
} from 'material-ui'

export const Contact = () => (
  <div className='container' >
    <div className='newsletter'>
    <Typography type='headline' component='h4' className='title'>
      Stay up to date!
    </Typography>
    <Typography type='body2' component='h4' className='description'>
      Receive updates for any new additions by subscribing to the newsletter!
    </Typography>
    <TextField
      style={{backgroundColor: '#FAFAFA', width: '350px'}}
      label="Your email"
      margin="normal"
    />
    <Button
      style={{ margin: '20px', alignSelf: 'flex-end' }}
      raised
      color='primary'
      onClick={this.sendMail}>
      Subscribe!
    </Button>
    </div>
      <div className='contact'>
    <Typography type='headline' component='h4' className='title'>
      Get in touch!
    </Typography>
    <Typography type='body2' component='h4' className='description'>
      Is your team missing from the list? Wish to share your ideas about making this site better? Let me know by using the form below!
      For missing or wrong info on existing cards, go to that card, click on {<Info width='22px' />} and use the poped up form.
    </Typography>
    <TextField
      id="multiline-static"
      style={{backgroundColor: '#FAFAFA'}}
      label="Contact Info"
      margin="normal"
    />
    <TextField
      id="multiline-static"
      style={{backgroundColor: '#FAFAFA'}}
      label="Your message"
      multiline
      rows="10"
      rowsMax='20'
      fullWidth
      margin="normal"
    />
    <Button
      style={{ width: '50px', margin: '20px', alignSelf: 'flex-end' }}
      raised
      onClick={this.sendMail}>
      Send!
    </Button>
    </div>
  </div>
)
Contact.propTypes = {
}

export default Contact
