import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Paper, CircularProgress } from 'material-ui';
import InfiniteScroll from 'react-infinite-scroller';
import { Cards, Filters, Table } from './components';
import { classes, styles } from './style';

const axios = require('axios');

class DataLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentToLoad: [],
      endOfContent: false,
      lastItemIndex: 0,
    };
  }

  componentWillMount = () => {
    this.props.updateFilter(this.props.sortByOptions[0], null, []);
    this.props.sortByOptions.map(o => this.getData(o));
  };

  getData = type => {
    axios
      .get(`/api/${this.props.route}/${type}`)
      .then(res => {
        console.log('resp', res.data);
        this.props.initializeData(type, res.data);
        this.resetContent();
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };

  resetContent = () => {
    this.setState({
      endOfContent: false,
      contentToLoad: [],
      lastItemIndex: 0,
    });
  };

  loadMoreItems = () => {
    const startingPoint = this.state.lastItemIndex;
    const { currentData } = this.props;
    const itemsToLoad = 20;
    if (currentData) {
      this.setState({
        lastItemIndex: startingPoint + itemsToLoad,
        contentToLoad: this.state.contentToLoad.concat(
          currentData.slice(
            startingPoint,
            startingPoint + itemsToLoad >= currentData.length
              ? currentData.length
              : startingPoint + itemsToLoad,
          ),
        ),
        endOfContent: startingPoint + itemsToLoad >= currentData.length,
      });
    }
  };

  render() {
    const {
      filters,
      updateFilter,
      view,
      changeView,
      currentData,
      updateData,
      sortByOptions,
    } = this.props;
    return (
      <Paper style={styles.layoutContainer} elevation={2}>
        <div className={classes.contentContainer} id="scrollContainer">
          <Filters
            resetContent={this.resetContent}
            updateFilter={updateFilter}
            updateData={updateData}
            filters={filters}
            //  resetAllFilters={resetAllFilters}
            view={view}
            changeView={changeView}
            sortByOptions={sortByOptions}
          />
          <div
            className={
              view === 'list' ? classes.containerList : classes.containerGrid
            }>
            <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMoreItems}
              hasMore={!this.state.endOfContent}
              loader={
                <CircularProgress
                  className={classes.contentLoader}
                  size={50}
                  thickness={8}
                />
              }>
              {view === 'table' ? (
                <Table
                  content={this.state.contentToLoad}
                  category={filters.sortedBy}
                />
              ) : (
                <Cards
                  content={this.state.contentToLoad}
                  view={view}
                  filters={filters}
                />
              )}
            </InfiniteScroll>
          </div>
        </div>
      </Paper>
    );
  }
}

DataLayout.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default DataLayout;
