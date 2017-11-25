import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

import {
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
} from 'material-ui'

class CardBack extends Component {
  constructor (props: CardBack.propTypes) {
    super(props)
    this.state = {
      filter: 'companies',

    }
  }
  render () {
    const { title, content } = this.props
    return (

      <Card className='cardContainer' >
        <CardContent>
          <div className='header'>
            <Typography type='Title' component='h4'>
              {title}
            </Typography>
          </div>
        </CardContent>
        <CardActions style={{ flexDirection: 'column', flexWrap:'wrap', minHeight: '52px', height: 'auto', alignItems: 'left' }}>
          {content && content.map(member =>
            <div style={{ display: 'flex' }}>
              <Button target='_blank' dense color='primary'>
                {member.fullName}
              </Button>
              <Button target='_blank' dense color='primary'>
                {member.role}
              </Button>
              <Button target='_blank' dense color='primary'>
                {member.contact.mail}
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    )
  }
}

export default CardBack
