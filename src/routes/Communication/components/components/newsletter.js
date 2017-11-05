import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import ReactIframeResizer from 'react-iframe-resizer-super'

class Newsletter extends Component {
  constructor (props: Newsletter.propTypes) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='newsletter'>
        <ReactIframeResizer iframeResizerOptions={{ checkOrigin: false }}
          id='subscriptionForm'
          src='https://my.sendinblue.com/users/subscribe/js_id/2ys50/id/2'
          iframeResizerEnable
          style={{ maxWidth: '540px', width: '100%', height: '415px', border: '1px solid', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
    )
  }
}

Newsletter.propTypes = {
}

export default Newsletter
