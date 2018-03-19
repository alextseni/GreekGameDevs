import React from 'react';

// import { Scrollbars } from 'react-custom-scrollbars';

const withScrollToTop = Component =>
  class ScrollToTop extends React.Component {
    componentDidUpdate() {
      window.scrollTo(0, 0);
    }

    render() {
      return <Component {...this.props} />;
    }
  };

export default withScrollToTop;
