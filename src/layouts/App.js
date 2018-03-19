import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withTheme } from 'material-ui/styles';
import { theme } from 'styles';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            <Router history={browserHistory} onUpdate={this.props.onUpdate}>
              {this.props.routes}
            </Router>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
export default withTheme()(App);
