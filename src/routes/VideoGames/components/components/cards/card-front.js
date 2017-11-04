import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

import {
  Facebook,
  Twitter,
  Youtube,
  Website,
  Steam,
  PlayStore,
  AppStore,
  LinkedIn,
  WindowsStore,
  Demo,
  Online,
  PC,
  IndieDB,
} from 'static/icons'

import {
  Paper,
  Typography,
  Button,
  Chip,
} from 'material-ui'

const getMediaIcon = (media) => ({
  website: <Website className='socialIcon' />,
  websiteD: <Website className='socialIcon' />,
  websiteP: <Website className='socialIcon' />,
  facebook: <Facebook className='socialIcon' />,
  twitter: <Twitter className='socialIcon' />,
  youtube: <Youtube className='socialIcon' />,
  steam: <Steam className='socialIcon' />,
  pc: <PC className='socialIcon' />,
  playstore: <PlayStore className='socialIcon' />,
  appStore: <AppStore className='socialIcon' />,
  linkedin: <LinkedIn className='socialIcon' />,
  windowstore: <WindowsStore className='socialIcon' />,
  demo: <Demo className='socialIcon' />,
  online: <Online className='socialIcon' />,
  indiedb: <IndieDB className='socialIcon' />,
})[media]

class CardFront extends Component {
  constructor (props: CardFront.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',
    }
  }
  render () {
    const { title, description, image, links1, links2, content, footer, tags } = this.props
    return (
      <Paper className='cardContainer'>
          <div className='header'>
            <div className='logo'>
              <div className='icon' style={{ backgroundImage: 'url(' + (image || 'missing.png') + ')' }} />
                <div className='title'>
                  <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
                    {title}
                  </Typography>
                  <Typography type='caption' style={{ textAlign: 'left', marginTop: '5px' }}>
                    {description}
                  </Typography>
                </div>
            </div>
          </div>
          <div className='social'>
          {links1 && links1.map(link => (
              <Button target='_blank' href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          </div>
          {links1.length !== 0 && links2.length !== 0 && <div className='line' />}
          <div className='social'>
          {links2 && links2.map(link => (
              <Button target='_blank' href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          </div>
        <div className='content'>
          {content && content.map(item => (
            item &&
            <Button
              target='_blank'
              href={item.link}
              //disabled={!item.link}
              style={{ textAlign: 'left' }}
              dense
              color={item.status === 'Under Development' ? 'accent' : 'primary'}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className='footer'>
          <div className='tags'>
            {tags && tags.map(t =>
              <Chip className='tag' label={t} />
            )}
          </div>
          <Typography type='body2' component='h2' style={{ marginRight: '10px', marginLeft: '15px' }}>
            {footer}
          </Typography>
        </div>
      </Paper>
    )
  }
}

export default CardFront
