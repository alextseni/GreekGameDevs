import React from 'react';
import { compose } from 'redux';
import { Info } from 'static/icons';
import ReCAPTCHA from 'react-google-recaptcha';
import { Typography, Button, TextField } from 'material-ui';
import { withSendForm, StatusCover } from 'commons/components';
import { validEmail } from 'utils/validations';
import { classes, styles } from './style';

const Contact = (
  { isLoading, success, error, formItem, handleChange, sendMail } = this.props,
) => (
  <div className={classes.contact}>
    <Typography type="headline" component="h4" className={classes.title}>
      {'Get in touch!'}
    </Typography>
    <Typography type="body2" component="h4" className={classes.description}>
      Is your team missing from the list? Wish to share your ideas about making
      this site better? Let me know by using the form below! For missing or
      wrong info on existing cards, go to that card, click on{' '}
      {<Info width="22px" />} and use the poped up form.
    </Typography>
    <StatusCover isLoading={isLoading} success={success} error={error}>
      <TextField
        id="mail-field"
        style={styles.textField}
        label="Your Email"
        margin="normal"
        name="mail"
        type="email"
        required
        error={formItem.mail && !validEmail(formItem.mail)}
        value={formItem.mail}
        onChange={handleChange('Contact Form', 'mail')}
      />
      <TextField
        id="multiline-msg"
        style={styles.multiline}
        label="Your message"
        multiline
        rows="10"
        rowsMax="10"
        fullWidth
        margin="normal"
        name="comment"
        required
        value={formItem.comment}
        onChange={handleChange('Contact Form', 'comment')}
      />
      <ReCAPTCHA
        sitekey="6LejpjUUAAAAAJ2v82XR4TQ6fV3gJOASXEYInUUW"
        onChange={response =>
          handleChange('Contact Form', 'verification')({
            target: { value: response },
          })
        }
      />
      <Button
        style={styles.submitBtn}
        raised
        onClick={() => {
          sendMail();
          window.grecaptcha.reset();
        }}
        disabled={
          !validEmail(formItem.mail) ||
          !formItem.comment ||
          !formItem.verification
        }>
        Send!
      </Button>
    </StatusCover>
  </div>
);

export default compose(withSendForm)(Contact);
