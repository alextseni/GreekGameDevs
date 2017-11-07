import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
} from 'material-ui'
import './polls.scss'

export const Polls = () => (
  <div>
    <div className='sectionTitle'>
      <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
        Vote for the next feature!
      </Typography>
    </div>
    <div className='polls'>
      <iframe src="http://www.strawpoll.me/embed_1/14343234"  style={{width:'680px',height:'650px',border:0}}>Loading poll...</iframe>
      <iframe src="http://www.strawpoll.me/embed_1/14343316"  style={{width:'680px',height:'650px',border:0}}>Loading poll...</iframe>
    </div>
  </div>
)
Polls.propTypes = {
}

export default Polls
