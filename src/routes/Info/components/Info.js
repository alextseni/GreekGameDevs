import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Stepper, { Step, StepLabel, StepButton, StepContent } from 'material-ui/Stepper'
import {Divider}  from 'material-ui'
import {Credits} from './components'
import './Info.scss'
import {

} from './components'
import {
//  Label,
} from 'static/icons'
import questions from './content.js'

class Info extends Component {
  constructor (props: Info.propTypes) {
    super(props)
    this.state = {
      stepIndex: 0,
    }
  }
  render () {
    return (
      <div className='infocontainer'>
        <Stepper
          activeStep={this.state.stepIndex}
          nonLinear
          orientation='vertical'
          >
          {questions.map((q, index) => (
            <Step>
              <StepButton onClick={() => this.setState({ stepIndex: index })}>
                <p className='question'>
                  {q.question}
                </p>
              </StepButton>
              <StepContent>
                <p className='answer'>
                  {q.answer}
                  {q.extra}
                </p>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <Divider />
        <Credits />
      </div>

    )
  }
}
Info.propTypes = {
}

export default Info
