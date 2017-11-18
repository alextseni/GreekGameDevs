import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '!style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from 'material-ui'
import './news.scss'
import StarIcon from 'material-ui-icons/Star'
import moment from 'moment'

const axios = require('axios')

class News extends Component {
  constructor (props: News.propTypes) {
    super(props)
    this.state = {
    }
  }

  getHistory = () => {
    axios.get('/api/' + 'history')
    .then((res) => {
      console.log('resp', res.data)
      this.props.setHistory(res.data)
    })
    .catch((error) => {
      console.log('ERROR', error)
    })
  }

  componentWillMount = () => {
    this.getHistory()
  }

  render () {
    const { setHistory, history } = this.props
    return (
      <div className='news'>
        <div className='sectionTitle'>
          <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
            News & updates
          </Typography>

        </div>
        <div className='updatesList'>
          <List>
            {history.map(item => (
            <ListItem>
              <Avatar>
                <StarIcon />
              </Avatar>
              <ListItemText
                primary={item.description}
                secondary={moment(item.date).format('DD-MM-YYYY')} />
            </ListItem>
            ))}
          </List>
        </div>
      </div>
    )
  }
}
News.propTypes = {
}

export default News
