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

const getColorCode = (status) => ({
  'Active': 'primary',
  'Inactive': 'default',
  'Under Development': 'accent',
  'Unavailable': 'default',
  'Released': 'primary',
})[status]

class CardFront extends Component {
  constructor (props: CardFront.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',
    }
  }
  render () {
    const { title, description, image, links1, links2, content, footer, tags, view } = this.props
    return (
      <Paper className='cardContainer'>
          <div className='header'>
            <div className={view === 'grid' ? 'logoGrid' : 'logo'}>
              <div
                className={view === 'grid' ? 'iconGrid' : 'icon'}
                style={{ backgroundImage: 'url(' + (image || 'missing.png') + ')' }}
              />
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
              <Button target='_blank' disabled={!link.link} href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          </div>
          {links1 && links2 && <div className='line' />}
          <div className='social'>
          {links2 && links2.map(link => (
              <Button target='_blank' disabled={!link.link} href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          </div>
        <div className='content'>
          {content && content.map(item => (
            item &&
            <Button
              className='itemButton'
              target='_blank'
              href={item.link}
              disabled={!item.link}
              style={{ textAlign: 'left' }}
              dense
              color={getColorCode(item.status)}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className='footer'>
          <div className='tags'>
            {tags && tags.map(t =>
              t !== 'null' &&
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
