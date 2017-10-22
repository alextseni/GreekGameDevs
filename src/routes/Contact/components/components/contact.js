import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import {
  Info,
} from 'static/icons'

import {
  Typography,
  Button,
  TextField,
  CircularProgress,
} from 'material-ui'
import { CheckCircle, Error } from 'material-ui-icons'

class Contact extends Component {
  constructor (props: Contact.propTypes) {
    super(props)
    this.state = {
      isLoading: false,
      hasSubmitted: false,
      success: false,
      contactItem: {
      },
    }
  }

  componentWillMount = () => {
    this.setState({
      hasSubmitted: false,
      success: false,
      contactItem: {},
    })
  }

  handleFormChange = name => event => {
    this.setState({
      contactItem: {
        ...this.state.contactItem,
        [name]: event.target.value,
      }
    })
  }

  sendMail = () => {
    this.setState({
      hasSubmitted: true,
      isLoading: true,
    })
    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = () => {
      if (xhttp.responseText === 'error') {
        console.log('error')
        xhttp = new XMLHttpRequest()
        this.setState({
          success: false,
          isLoading: false,
        })
      } else if (xhttp.responseText === 'sent') {
        console.log('sent')
        xhttp = new XMLHttpRequest()
        this.setState({
          success: true,
          isLoading: false,
        })
      }
    }
    xhttp.open(
      'GET',
      '/send?' +
      'title=' + 'Contact Form' +
      '&comment=' + this.state.contactItem.comment +
      '&mail=' + this.state.contactItem.mail,
      true)
    xhttp.send()
  }

  render () {
    return (
      <div className='contact'>
        <Typography type='headline' component='h4' className='title'>
      Get in touch!
    </Typography>
        <Typography type='body2' component='h4' className='description'>
      Is your team missing from the list? Wish to share your ideas about making this site better? Let us know by using the form below!
      For missing or wrong info on existing cards, go to that card, click on {<Info width='22px' />} and use the poped up form.
    </Typography>
        <div>
          {this.state.isLoading
      ? <div className='popupStatusForm' style={{ backgroundColor: 'white' }}>
        <CircularProgress size={80} />
      </div>
      : this.state.success
        ? <div className='popupStatusForm' style={{ backgroundColor: '#70d188' }}>
          <CheckCircle style={{ width:'50px', height: '50px' }} />
          <Typography type='headline' component='h4'>
              Thank you!
            </Typography>
        </div>
        : this.state.hasSubmitted
          ? <div className='popupStatusForm' style={{ backgroundColor: '#db8787' }}>
            <Error style={{ width:'50px', height: '50px' }} />
            <Typography type='headline' component='h4'>
                  Email not sent
                </Typography>
          </div>
          : <div style={{ width: 0, height: 0 }} />
    }
          <TextField
            id='multiline-static'
            style={{ backgroundColor: '#FAFAFA', width: '350px' }}
            label='Contact Info'
            margin='normal'
            name='mail'
            value={this.state.contactItem.mail}
            onChange={this.handleFormChange('mail')}
    />
          <TextField
            id='multiline-static'
            style={{ backgroundColor: '#FAFAFA' }}
            label='Your message'
            multiline
            rows='10'
            rowsMax='10'
            fullWidth
            margin='normal'
            name='comment'
            value={this.state.contactItem.comment}
            onChange={this.handleFormChange('comment')}
    />
          <Button
            style={{ width: '50px', margin: '20px', alignSelf: 'flex-end' }}
            raised
            disabled={!this.state.contactItem.mail || !this.state.contactItem.comment}
            onClick={this.sendMail}>
      Send!
    </Button>
        </div>
      </div>
    )
  }
}
Contact.propTypes = {
}

export default Contact
