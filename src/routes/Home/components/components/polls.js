import React from 'react'
import {
  Typography,
} from 'material-ui'
import {
  classes,
  styles
} from './style'

export const Polls = () => (
  <div className={classes.pollsContainer}>
    <div className={classes.sectionTitle}>
      <Typography type='headline' component='h4'>
        Vote here for the next feature
      </Typography>
    </div>
    <div className={classes.polls}>
      <iframe src='http://www.strawpoll.me/embed_1/14437768' style={styles.pollsIframe}>Loading poll...</iframe>
      <iframe src='http://www.strawpoll.me/embed_1/14437717' style={styles.pollsIframe}>Loading poll...</iframe>
    </div>
  </div>
)
Polls.propTypes = {
}

export default Polls
