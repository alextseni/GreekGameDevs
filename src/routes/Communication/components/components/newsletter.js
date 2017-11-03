import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import {
  Typography,
  Button,
  TextField,
  CircularProgress,
} from 'material-ui'
import { CheckCircle, Error } from 'material-ui-icons'

class Newsletter extends Component {
  constructor (props: Newsletter.propTypes) {
    super(props)
    this.state = {
      isLoading: false,
      hasSubmitted: false,
      success: false,
      subscribeMail: '',
    }
  }

  componentWillMount = () => {
    this.setState({
      hasSubmitted: false,
      success: false,
      subscribeMail: '',
    })
  }

  handleFormChange = name => event => {
    this.setState({
      [name]: event.target.value
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
      'title=' + 'New Subscription' +
      '&comment=' + ' ' +
      '&mail=' + this.state.subscribeMail,
      true)
    xhttp.send()
  }

  render () {
    return (
      <div className='newsletter'>
        <Typography type='headline' component='h4' className='title'>
          Stay up to date!
        </Typography>
        <Typography type='body2' component='h4' className='description'>
          Receive updates for any new additions or features by subscribing to the newsletter!
        </Typography>
        <div>
          {this.state.isLoading
          ? <div className='popupStatusNews' style={{ backgroundColor: 'white' }}>
            <CircularProgress size={80} />
          </div>
          : this.state.success
            ? <div className='popupStatusNews' style={{ backgroundColor: '#70d188' }}>
              <CheckCircle style={{ width:'50px', height: '50px' }} />
              <Typography type='headline' component='h4'>
                  Thank you!
              </Typography>
            </div>
            : this.state.hasSubmitted
              ? <div className='popupStatusNews' style={{ backgroundColor: '#db8787' }}>
                <Error style={{ width:'50px', height: '50px' }} />
                <Typography type='headline' component='h4'>
                      Could not subscribe
                </Typography>
              </div>
              : <div style={{ width: 0, height: 0 }} />
        }
          <TextField
            style={{ backgroundColor: '#FAFAFA', width: '350px' }}
            label='Your email'
            margin='normal'
            name='mail'
            value={this.state.subscribeMail}
            onChange={this.handleFormChange('subscribeMail')}
        />
          <Button
            style={{ margin: '20px', alignSelf: 'flex-end' }}
            raised
            color='primary'
            disabled={!this.state.subscribeMail}
            onClick={this.sendMail}>
          Subscribe!
        </Button>
        </div>
      </div>
    )
  }
}

Newsletter.propTypes = {
}

export default Newsletter
