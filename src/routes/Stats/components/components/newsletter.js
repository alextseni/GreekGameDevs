import React from 'react';
import ReactIframeResizer from 'react-iframe-resizer-super';

import { classes, styles } from './style';

const Newsletter = () => (
  <div className={classes.newsletter}>
    <ReactIframeResizer
      iframeResizerOptions={{ checkOrigin: false }}
      id="subscriptionForm"
      src="https://my.sendinblue.com/users/subscribe/js_id/2ys50/id/2"
      iframeResizerEnable
      style={styles.subscribeIframe}
    />
  </div>
);

export default Newsletter;
