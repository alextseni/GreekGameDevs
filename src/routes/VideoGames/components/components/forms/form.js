import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './form.scss'
import _ from 'lodash'
import {
  Icon,
  Paper,
  Typography,
  IconButton,
  Checkbox,
  Button,
  Badge,
  TextField,
  CircularProgress,
} from 'material-ui'
import { CheckCircle, Error } from 'material-ui-icons'

let xhttp

class Form extends Component {
  constructor (props: Form.propTypes) {
    super(props)
    this.state = {
      hasSubmitted: false,
      isLoading: false,
      success: false,
      formItem: {
      },
    }
  }

  componentWillMount = () => {
    xhttp = new XMLHttpRequest()
    this.setState({
      formItem: this.props.selectedItem,
      hasSubmitted: false,
      success: false,
    })
  }

  handleFormChange = name => event => {
    this.setState({
      formItem: {
        ...this.state.formItem,
        [name]: event.target.value,
      }
    })
  }
  sendMail = () => {
    this.setState({
      hasSubmitted: true,
      isLoading: true,
    })
    xhttp = new XMLHttpRequest()

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
      'title=' + this.state.formItem.name +
      '&comment=' + this.state.formItem.comment +
      '&mail=' + this.state.formItem.mail,
      true)
    xhttp.send()
  }

  render () {
    return (
      <div className='infoContainer'>
        {this.state.isLoading
          ? <div className='popupStatus' style={{ backgroundColor: 'white' }}>
            <CircularProgress size={80} />
          </div>
          : this.state.success
            ? <div className='popupStatus' style={{ backgroundColor: '#70d188' }}>
              <CheckCircle style={{ width:'50px', height: '50px' }} />
              <Typography type='headline' component='h4'>
                  Thank you!
                </Typography>
            </div>
            : this.state.hasSubmitted
              ? <div className='popupStatus' style={{ backgroundColor: '#db8787' }}>
                <Error style={{ width:'50px', height: '50px' }} />
                <Typography type='headline' component='h4'>
                      Email not sent :(
                    </Typography>
              </div>
              : <div style={{ width: 0, height: 0 }} />
        }
        <Typography type='headline' component='h4'>
          Wrong or missing info on this card? Use the form below to send me an email.
        </Typography>
        <form
          className='infoForm'
          autoComplete='off'>
          <TextField
            id='name'
            name='name'
            style={{ width: '100%' }}
            value={this.state.formItem.name}
            onChange={this.handleFormChange('name')}
            disabled
            margin='normal'
          />
        {/*  <TextField
            id='mail'
            label='Your email'
            name='mail'
            required
            type='e-mail'
            value={this.state.formItem.mail}
            onChange={this.handleFormChange('mail')}
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          <TextField
            className='multiline'
            style={{ width: '100%' }}
            labelClassName='label'
            name='comment'
            id='multiline-flexible'
            label='Fill in anything you wish to add or correct.'
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rowsMax='4'
            rows='5'
            value={this.state.formItem.comment}
            onChange={this.handleFormChange('comment')}
            margin='normal'
           />
          <Button
            style={{ width: '50px', margin: '20px', alignSelf: 'flex-end' }}
            raised
            onClick={this.sendMail}
            disabled={!this.state.formItem.comment || this.state.hasSubmitted}>
            Send!
          </Button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  selectedItem: PropTypes.object.isRequired,
}

export default Form
