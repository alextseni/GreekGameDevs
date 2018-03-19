import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { DataLayout } from 'routes/Database/components';

class VideoGames extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount = () => {
    this.props.initializeState();
  };

  render() {
    const {
      filters,
      updateFilter,
      resetAllFilters,
      view,
      changeView,
      updateData,
      currentData,
      initializeData,
    } = this.props;
    return (
      <DataLayout
        resetContent={this.resetContent}
        sortByOptions={['companies', 'games']}
        route="videogames"
        updateFilter={updateFilter}
        updateData={updateData}
        currentData={currentData}
        initializeData={initializeData}
        filters={filters}
        resetAllFilters={resetAllFilters}
        view={view}
        changeView={changeView}
      />
    );
  }
}

VideoGames.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
  updateData: PropTypes.func.isRequired,
  initializeData: PropTypes.func.isRequired,
  initializeState: PropTypes.func.isRequired,
};

export default VideoGames;
