import React from 'react';
import { compose } from 'redux';
import Stepper, { Step, StepButton, StepContent } from 'material-ui/Stepper';
import { Divider } from 'material-ui';
import { analytics } from 'utils';
import { withSteps } from 'commons/components';
import questions from './content.js';
import { Credits } from './components';
import { classes } from './style';

const Info = ({ stepIndex, changeStep } = this.props) => (
  <div className={classes.infocontainer}>
    <Stepper activeStep={stepIndex} nonLinear orientation="vertical">
      {questions.map((q, index) => (
        <Step key={q.key}>
          <StepButton
            onClick={() => {
              analytics.logEvent({
                category: 'FAQ',
                action: 'Question clicked',
                label: q.question,
              });
              changeStep(index);
            }}>
            <p className={classes.question}>{q.question}</p>
          </StepButton>
          <StepContent>
            <p className={classes.answer}>
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
);

export default compose(withSteps)(Info);
