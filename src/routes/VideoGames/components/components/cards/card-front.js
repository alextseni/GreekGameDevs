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
} from 'static/icons'

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
} from 'material-ui'

const getMediaIcon = (media) => ({
  website: <Website className='socialIcon' />,
  facebook: <Facebook className='socialIcon' />,
  twitter: <Twitter className='socialIcon' />,
  youTube: <Youtube className='socialIcon' />,
  steam: <Steam className='socialIcon' />,
  pc: <PC className='socialIcon' />,
  playStore: <PlayStore className='socialIcon' />,
  appStore: <AppStore className='socialIcon' />,
  linkedIn: <LinkedIn className='socialIcon' />,
  windowsStore: <WindowsStore className='socialIcon' />,
  demo: <Demo className='socialIcon' />,
  online: <Online className='socialIcon' />,
  online2: <Online className='socialIcon' />,
})[media]

class CardFront extends Component {
  constructor (props: CardFront.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',

    }
  }
  render () {
    const { title, content, links, footer } = this.props
    return (

      <Card className='cardContainer'>
        <CardContent>
          <div className='header'>
            <Typography type='Title' component='h4'>
              {title}
            </Typography>
            <div className='social'>
              {Object.keys(links).map(linkType =>
                <Button target='_blank' href={links[linkType]} dense color='primary'>
                  {getMediaIcon(linkType)}
                </Button>
        )}
            </div>
          </div>
        </CardContent>
        <CardActions style={{ flexWrap:'wrap', minHeight: '52px', height: 'auto' }}>
          {content.map(item => (
      item.links
      ? <Button target='_blank' href={item.links[Object.keys(item.links)[0]]} dense color={item.released === 'Under Development' ? 'accent' : 'primary'}>
        {item.name}
      </Button>
      : <Button target='_blank' disabled dense color='primary'>
        {item.name}
      </Button>
  ))}
        </CardActions>
        <div className='year'>
          <Typography type='body2' component='h2'>
            {footer}
          </Typography>
        </div>
      </Card>
    )
  }
}

export default CardFront
