import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { BackToTop } from 'static/icons';
import { analytics, helpers } from 'utils';
import Select from 'react-select';
import '!style-loader!css-loader!react-select/dist/react-select.css';
import {
  Tooltip,
  Button,
  FormControl,
  Input,
  Drawer,
  TextField,
  IconButton,
  InputAdornment,
} from 'material-ui';
import { Clear, Search } from 'material-ui-icons';
import { classes, styles } from './style';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchText: '',
    };
  }
  onSearch = (name, value) => {
    this.setState({
      searchText: value,
    });
    this.props.updateData(name, value);
    this.props.resetContent();
  };
  onEnter = event => {
    if (event.key === 'Enter') {
      analytics.logEvent({
        category: 'Search',
        action: 'Searching - Enter',
        label: `${this.state.searchText} in view ${this.props.view}`,
      });
      this.props.updateData(this.props.filters.sortedBy, this.state.searchText);
      this.props.resetContent();
    }
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleViewChange = () => {
    const { view, changeView } = this.props;
    changeView(
      {
        list: 'grid',
        grid: window.matchMedia('(min-width: 770px)').matches
          ? 'table'
          : 'list',
        table: 'list',
      }[view],
    );
  };

  transformData = (mainCategory, subcategory = null, filterValues = null) => {
    const searchValue = subcategory === null ? '' : this.state.searchText;
    this.setState({
      searchText: searchValue,
      sortBy: mainCategory,
    });
    this.props.updateFilter(
      mainCategory,
      subcategory,
      filterValues ? _.toString(filterValues).split(',') : [],
    );
    this.props.updateData(mainCategory, searchValue);
    this.props.resetContent();
  };

  search = name => event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  clearSearchText = name => {
    this.setState({
      searchText: '',
    });
    this.props.updateData(name, '');
    this.props.resetContent();
  };

  render() {
    const {
      updateFilter,
      filters,
      view,
      updateData,
      resetContent,
      searchData,
      sortByOptions,
    } = this.props;
    return (
      <div className={classes.filtersContainer}>
        <div className={classes.drawerHandle}>
          <Button
            aria-label="open drawer"
            raised
            color="accent"
            style={{
              minHeight: '31px',
              height: '31px',
              width: '20px',
              minWidth: '80px',
            }}
            onClick={() => {
              analytics.logEvent({
                category: 'Filters',
                action: 'Filters trigerred',
                label: ` ${!this.state.open} in view ${view}`,
              });
              this.handleDrawer();
            }}>
            {'Filters'}
          </Button>
        </div>
        <Drawer
          anchor="top"
          type="persistent"
          open={this.state.open}
          className={this.state.open ? classes.drawerBox : classes.noDrawer}>
          <div className={classes.drawerInner}>
            <div className={classes.subfilters}>
              {helpers
                .getFilters(filters.sortedBy, filters.filtersData)
                ?.map(f => (
                  <div className={classes.multiselect}>
                    <Select
                      closeOnSelect
                      multi={f.multiselect}
                      onChange={value => {
                        analytics.logEvent({
                          category: 'Filters',
                          action: 'Filter by',
                          label: `${value} in view ${view}`,
                        });
                        this.transformData(
                          filters.sortedBy,
                          f.filterValue,
                          value,
                        );
                      }}
                      options={f.filterOptions}
                      placeholder={f.filterName}
                      simpleValue
                      value={
                        f.multiselect
                          ? filters[filters.sortedBy][f.filterValue]
                          : _.first(filters[filters.sortedBy][f.filterValue])
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </Drawer>
        <div className={classes.filtersToolbar}>
          <div className={classes.mainFilters}>
            {sortByOptions?.length > 1 && (
              <TextField
                id="sort-options"
                labelClassName={classes.sortByLabel}
                className={classes.sortField}
                select
                label="Sort by:"
                value={this.state.sortBy}
                onChange={event => {
                  analytics.logEvent({
                    category: 'Sort',
                    action: 'Sort by',
                    label: `${event.target.value} in view ${view}`,
                  });
                  this.transformData(event.target.value);
                }}
                SelectProps={{
                  native: true,
                }}>
                {sortByOptions.map(o => (
                  <option key={o.value} value={o}>
                    {o}
                  </option>
                ))}
              </TextField>
            )}
          </div>
          <div className={classes.otherTools}>
            <FormControl className={classes.searchBar}>
              <Input
                id="searchBar"
                type="text"
                placeholder={`Search for ${filters.sortedBy || ' '}...`}
                value={this.state.searchText}
                onChange={this.search(filters.sortedBy)}
                onKeyDown={this.onEnter}
                className={classes.searchInput}
                disableUnderline
                endAdornment={
                  <InputAdornment position="end">
                    {this.state.searchText && (
                      <IconButton
                        style={{ height: '25px', width: '25px' }}
                        onClick={() => {
                          analytics.logEvent({
                            category: 'Search',
                            action: 'Searching - Click',
                            label: `${this.state.searchText} in view ${view}`,
                          });
                          this.clearSearchText(filters.sortedBy);
                        }}>
                        <Clear />
                      </IconButton>
                    )}
                  </InputAdornment>
                }
              />
              <IconButton
                style={styles.searchIcon}
                onClick={() =>
                  this.onSearch(filters.sortedBy, this.state.searchText)
                }>
                <Search />
              </IconButton>
            </FormControl>
            <Tooltip
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginLeft: '10px',
              }}
              id="tooltip-icon1"
              title="Change view"
              className={classes.viewButton}
              placement="top">
              <Button
                raised
                style={{ minWidth: '40px', minHeight: '32px', padding: 0 }}
                onClick={() => {
                  analytics.logEvent({
                    category: 'View',
                    action: 'Change view',
                    label: `from ${view}`,
                  });
                  this.handleViewChange();
                }}>
                {helpers.getViewIcon(view)}
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className={classes.tools}>
          <Tooltip id="tooltip-icon3" title="Return to top" placement="top">
            <Button
              raised
              onClick={() => {
                analytics.logEvent({
                  category: 'Scroll',
                  action: 'Scroll to top',
                  label: `in view ${view}`,
                });
                window.scrollTo(0, 0);
              }}
              style={{ margin: '0 10px', minWidth: '32px', padding: 0 }}>
              <BackToTop />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
  resetAllFilters: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default Filters;
