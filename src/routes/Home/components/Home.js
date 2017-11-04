import React from 'react'
import PropTypes from 'prop-types'
import {
  Typography,
} from 'material-ui'
import './Home.scss'
import {
  Polls,
} from './components'

export const Home = () => (
  <div className='homecontainer'>
    <div className='title'>
      <Typography type='Title' component='h3' style={{ textAlign: 'left' }}>
        Welcome to GGD database!
      </Typography>
      <Typography type='headline' component='h4' style={{ textAlign: 'left' }}>
        Here you can find all sorts of information about the greek game development scene.
      </Typography>
    </div>
    <div className='sectionTitle'>
      <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
        Ongoing Polls. Vote for the next feature!
      </Typography>
    </div>
    <Polls />
  </div>

)
Home.propTypes = {
}

export default Home
