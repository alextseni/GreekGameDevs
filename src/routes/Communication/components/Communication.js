import React from 'react';
import { Newsletter, Contact } from './components';

import { classes } from './style';

const Communication = () => (
  <div className={classes.comContainer}>
    <Newsletter />
    <Contact />
    <hr />
  </div>
);

export default Communication;
