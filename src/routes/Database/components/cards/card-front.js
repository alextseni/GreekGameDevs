import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

import {
  getColorCode,
  getMediaIcon,
} from 'utils/helpers'

import {
  Paper,
  Typography,
  Button,
  Chip,
} from 'material-ui'

class CardFront extends Component {
  constructor (props: CardFront.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',
    }
  }
  render () {
    const { title, description, image, links1, links2, content, footer, tags, view, hasImage = true } = this.props
    return (
      <Paper className='cardContainer'>
          <div className='header'>
          {view === 'grid' ?
            <div className={'logoGrid'}>
              {hasImage &&
                <div
                  className={'iconGrid'}
                  style={{ backgroundImage: 'url(' + (image || '../missing.png') + ')' }}
                />
              }
              <div className='title'>
                <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
                  {title}
                </Typography>
                <Typography type='caption' style={{ textAlign: 'left', marginTop: '5px' }}>
                  {description}
                </Typography>
              </div>
            </div>
            :
            <div className={'logo'}>
              <div className='title'>
                <Typography type='Title' component='h4' style={{ textAlign: 'left' }}>
                  {title}
                </Typography>
                <Typography type='caption' style={{ textAlign: 'left', marginTop: '5px' }}>
                  {description}
                </Typography>
              </div>
              {hasImage &&
                <div
                  className={'icon'}
                  style={{ backgroundImage: 'url(' + (image || '../missing.png') + ')' }}
                />
              }
            </div>
          }
          </div>
          <div className={view === 'list' ? 'socialList' : 'socialGrid'}>
          {links1 && links1.map(link => (
              <Button target='_blank' disabled={!link.link} href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          {links1 && links2 && links1.length !== 0 && links2.length !== 0 && <span className='line' />}
          {links2 && links2.map(link => (
              <Button target='_blank' disabled={!link.link} href={link.link} dense color='primary'>
                {getMediaIcon(link.type)}
              </Button>
          ))}
          </div>
        <div className={view === 'list' ? 'contentList' : 'contentGrid'}>
          {content && content.map((item, index) => (
            item &&
            <div>
            {index !== 0 && <span className='dot' />}
            <Button
              className={getColorCode(item.status) + ' ' + 'itemButton'}
              target='_blank'
              href={item.link}
              disabled={!item.link}
              dense
            >
              {item.name}
            </Button>
            </div>
          ))}
        </div>
        <div className='footer'>
          <div className='tags'>
            {tags && tags.map(t =>
              t !== 'null' &&
              <Chip className='tag' label={t} />
            )}
          </div>
          <div className='otherInfo'>
          {footer.map((f, index) => f !== null &&
            <Typography type='body2' component='h2' style={{ marginRight: '10px', marginLeft: '15px' }}>
              {f}
            </Typography>
          )}
          </div>
        </div>
      </Paper>
    )
  }
}

export default CardFront
