import ReactGA from 'react-ga';
import config from 'config';

const initialize = () => {
  const env = config.environments[window.location.host];
  ReactGA.initialize(config.analyticsKeys[env]);
};

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  // Remove hash from URI
  const uri = window.location.pathname;
  ReactGA.pageview(uri);
};

const logEvent = data => {
  ReactGA.event(data);
};

export { initialize, logPageView, logEvent };
