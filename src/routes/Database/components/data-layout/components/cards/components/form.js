import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import _ from 'lodash';
import { Typography, Button, TextField } from 'material-ui';
import { validEmail } from 'utils/validations';
import { withSendForm, StatusCover } from 'commons/components';
import ReCAPTCHA from 'react-google-recaptcha';
import { Close } from 'material-ui-icons';
import { classes, styles } from './style';

const Form = (
  {
    isLoading,
    success,
    error,
    formItem,
    handleChange,
    sendMail,
    closePopover,
    selectedItem,
  } = this.props,
) => {
  if (success) {
    setTimeout(() => {
      closePopover();
    }, 3000);
  }
  return (
    <StatusCover isLoading={isLoading} success={success} error={error}>
      <Close style={styles.closeIcon} onClick={closePopover} />
      <div className={classes.infoContainer}>
        <Typography type="title" component="h4">
          {
            'Wrong or missing info on this card? Use the form below to send me an email.'
          }
        </Typography>
        <TextField
          id="name"
          name="name"
          style={styles.textField}
          value={selectedItem?.name}
          disabled
          margin="normal"
        />
        <TextField
          id="mail"
          label="Your email"
          style={styles.textField}
          labelClassName={classes.formLabel}
          name="mail"
          required
          type="e-mail"
          error={formItem.mail && !validEmail(formItem.mail)}
          value={formItem.mail}
          onChange={handleChange(selectedItem?.name, 'mail')}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          className={classes.multiline}
          style={styles.textField}
          labelClassName={classes.formLabel}
          name="comment"
          id="multiline-flexible"
          label="Fill in anything you wish to add or correct."
          InputLabelProps={{
            shrink: true,
          }}
          multiline
          rowsMax="10"
          rows="5"
          value={formItem.comment}
          onChange={handleChange(selectedItem?.name, 'comment')}
          margin="normal"
        />
        <ReCAPTCHA
          sitekey="6LejpjUUAAAAAJ2v82XR4TQ6fV3gJOASXEYInUUW"
          onChange={response =>
            handleChange(selectedItem?.name, 'verification')({
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
            !formItem.comment ||
            !validEmail(formItem.mail) ||
            !formItem.verification
          }>
          Send!
        </Button>
      </div>
    </StatusCover>
  );
};
export default compose(withSendForm)(Form);
