import React from 'react';
import PropTypes from 'prop-types';

import { Typography, CircularProgress } from 'material-ui';
import { CheckCircle, Error } from 'material-ui-icons';
import { classes, styles } from './style';

const StatusCover = ({ isLoading, success, error, children } = this.props) => (
  <div className={classes.container}>
    {isLoading && (
      <div className={classes.popupStatus}>
        <CircularProgress size={80} />
      </div>
    )}
    {success && (
      <div className={classes.popupStatus} style={styles.success}>
        <CheckCircle style={styles.statusIcon} />
        <Typography type="headline" component="h4">
          {'Thank you!'}
        </Typography>
      </div>
    )}
    {error && (
      <div className={classes.popupStatus} style={styles.error}>
        <Error style={styles.statusIcon} />
        <Typography type="headline" component="h4">
          {'Email not sent'}
        </Typography>
      </div>
    )}
    {children}
  </div>
);

export default StatusCover;
