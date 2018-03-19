import React from 'react';
import { Link } from 'react-router';
import { compose } from 'redux';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from 'material-ui';
import { withOpenClose } from 'commons/components';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import { getMenuItems, getDatabaseItems } from 'utils/helpers';
import { classes } from './style';

const BurgerMenu = ({ isOpen, handleOpen, handleClose } = this.props) => (
  <div className={classes.burgerContainer}>
    <Drawer anchor="right" open={isOpen} onRequestClose={handleClose}>
      <div>
        <div>
          <IconButton onClick={handleClose}>{<ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          {getDatabaseItems().map(d => (
            <Link to={d.path} onClick={handleClose}>
              <ListItem button>
                <ListItemIcon>{d.iconSmall}</ListItemIcon>
                <ListItemText primary={d.header} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {getMenuItems().map(
            d =>
              d.header !== 'Database' && (
                <Link to={d.path} onClick={handleClose}>
                  <ListItem button>
                    <ListItemIcon>{d.iconSmall}</ListItemIcon>
                    <ListItemText primary={d.header} />
                  </ListItem>
                </Link>
              ),
          )}
        </List>
      </div>
    </Drawer>
    <IconButton color="contrast" aria-label="open drawer" onClick={handleOpen}>
      <MenuIcon className={classes.burger} />
    </IconButton>
  </div>
);

export default compose(withOpenClose)(BurgerMenu);
