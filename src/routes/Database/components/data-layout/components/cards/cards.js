import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { findDOMNode } from 'react-dom';
import { analytics } from 'utils';
import { Info } from 'static/icons';

import { Button, Popover } from 'material-ui';

import { CardFront, Form } from './components';
import { classes } from './style';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPopover: false,
      anchorEl: null,
      selectedItem: {},
    };
  }

  handleInfoButton = (event, index, selectedItem) => {
    this.setState({
      openPopover: true,
      anchorEl: findDOMNode(this.button[index]),
      selectedItem,
    });
  };
  button = [];

  closePopover = () => {
    this.setState({ openPopover: false });
  };

  render() {
    const { view, content, filters } = this.props;
    return (
      <div className={classes.cardsContainer}>
        <Popover
          open={this.state.openPopover}
          anchorEl={this.state.anchorEl}
          onRequestClose={() => this.closePopover()}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}>
          <Form
            selectedItem={this.state.selectedItem}
            closePopover={this.closePopover}
          />
        </Popover>
        {content?.map((item, index) => (
          <div
            className={
              view === 'list' ? classes.btnandcardList : classes.btnandcardGrid
            }>
            <Button
              className={classes.info}
              onClick={event => {
                analytics.logEvent({
                  category: 'Contact',
                  action: 'Card form button',
                  label: item.name,
                });
                this.handleInfoButton(event, index, item);
              }}
              ref={node => {
                this.button[index] = node;
              }}>
              <Info />
            </Button>
            <CardFront
              view={view}
              title={item.name}
              description={item.description}
              image={item.image}
              hasImage
              links1={item.links1}
              links2={item.links2}
              content={item.content}
              footer={item.other}
              tags={item.displayedtags}
            />
          </div>
        ))}
      </div>
    );
  }
}

Cards.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default Cards;
