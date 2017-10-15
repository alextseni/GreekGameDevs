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
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  Popover,
  DropDownMenu,
  MenuItem,
} from 'material-ui'


class Form extends Component {
  constructor (props: Form.propTypes) {
    super(props)
    this.state = {
      formItem: {
        name: '',

      },
    }
  }

  handleFormChange = name => event => {
    this.setState({
      formItem: {
        [name]: event.target.value,
      }
    })
  }

  componentWillMount = () => {
    console.log('entered')
    this.setState({
      formItem: this.props.selectedItem,
    })
  }

  render () {
    return (
      <div className='infoContainer'>
      <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>
        <Typography type='headline' component='h4'>
          Is this card missing info?
        </Typography>
        <Typography type='headline'>
          Add or correct it below.
        </Typography>
        <form
          className='infoForm'
          action='/send'
          target='dummyframe'
          method='get'
          noValidate
          autoComplete='off'>
          <TextField
            id='name'
            name='name'
            value={this.props.selectedItem.name}
            onChange={this.handleFormChange('name')}
            margin='normal'
          />
          <TextField
            className='multiline'
            labelClassName='label'
            name='comment'
            id='multiline-flexible'
            label='Any links, games, info you wish to add or correct?'
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rowsMax='4'
            value={this.state.formItem.comment}
            onChange={this.handleFormChange('comment')}
            margin='normal'
           />
          <Button
            style={{ width: '50px', margin: '20px', alignSelf: 'flex-end' }}
            raised
            type='submit'>
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
