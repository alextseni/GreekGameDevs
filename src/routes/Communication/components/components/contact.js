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

import ReactIframeResizer from 'react-iframe-resizer-super'

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
        <ReactIframeResizer iframeResizerOptions={{ checkOrigin: false, scrolling: true }}
          id='contactForm'
          src='https://ffviikh.typeform.com/to/YvA6A4'
          style={{ width: '100%', height: '490px', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
    )
  }
}
Contact.propTypes = {
}

export default Contact
