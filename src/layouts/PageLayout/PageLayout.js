import React from 'react';
import { compose } from 'redux';
import { IndexLink, Link } from 'react-router';
import { Toolbar, AppBar, IconButton, Typography, Paper } from 'material-ui';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import _ from 'lodash';
import { getMenuItems, getDatabaseItems } from 'utils/helpers';
import { withScrollToTop, withOpenClose } from 'commons/components';

import { classes } from './style';

import { BurgerMenu, Footer } from './components';

const PageLayout = (
  { isOpen, handleOpenClose, handleClose, children } = this.props,
) => (
  <div className={classes.appContainer}>
    <AppBar className={classes.appbar}>
      <div className={classes.menuBar}>
        <IndexLink to="/" activeClassName={classes.navItemLink}>
          <div className={classes.logoArea} />
        </IndexLink>
        <BurgerMenu />
        <Toolbar className={classes.navbar}>
          {getMenuItems().map(
            m =>
              m.header === 'Database' ? (
                <Manager>
                  <Target>
                    <Link
                      to={m.path}
                      onClick={handleOpenClose}
                      activeClassName={classes.navItemLink}>
                      <IconButton
                        className={classes.menuItem}
                        aria-label="Menu">
                        {m.icon}
                      </IconButton>
                      <Typography
                        type="title"
                        component="h4"
                        className={classes.menuLabel}>
                        {m.header}
                      </Typography>
                    </Link>
                  </Target>
                  <Popper
                    placement="bottom-start"
                    eventsEnabled={isOpen}
                    className={isOpen ? '' : classes.popperClose}>
                    <ClickAwayListener onClickAway={handleClose}>
                      <Grow
                        in={isOpen}
                        id="menu-list"
                        style={{ transformOrigin: '0 0 0' }}>
                        <Paper>
                          <MenuList role="menu">
                            {getDatabaseItems().map(d => (
                              <Link to={d.path}>
                                <MenuItem onClick={handleClose}>
                                  {d.header}
                                </MenuItem>
                              </Link>
                            ))}
                          </MenuList>
                        </Paper>
                      </Grow>
                    </ClickAwayListener>
                  </Popper>
                </Manager>
              ) : (
                m.header !== 'Dashboard' && (
                  <Link to={m.path} activeClassName="navItemLink">
                    <IconButton className={classes.menuItem} aria-label="Menu">
                      {m.icon}
                    </IconButton>
                    <Typography
                      type="title"
                      component="h4"
                      className={classes.menuLabel}>
                      {m.header}
                    </Typography>
                  </Link>
                )
              ),
          )}
        </Toolbar>
      </div>
    </AppBar>
    <div className={classes.viewport}>{children}</div>
    {!_.includes(window.location.pathname, 'database') && <Footer />}
  </div>
);

export default compose(withScrollToTop, withOpenClose)(PageLayout);
