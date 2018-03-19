import React from 'react';
import { Typography } from 'material-ui';
import { analytics } from 'utils';
import { classes } from './style';

const Footer = () => (
  <div
    className={classes.footerContainer}
    role="presentation"
    onClick={() =>
      analytics.logEvent({
        category: 'Donation',
        action: 'Donation area clicked',
      })
    }>
    <Typography type="body2" component="h4" className={classes.donationtitle}>
      {'Your support is invaluable!'}
    </Typography>
    <form
      className={classes.donationBox}
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank">
      <input
        className={classes.donationBtn}
        type="hidden"
        name="cmd"
        value="_s-xclick"
      />
      <input
        className={classes.donationBtn}
        type="hidden"
        name="hosted_button_id"
        value="SHUSXA975383A"
      />
      <input
        className={classes.donationBtn}
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
);

export default Footer;
