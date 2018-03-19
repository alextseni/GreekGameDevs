import React from 'react';

const withOpenClose = Component =>
  class extends React.Component {
    state = {
      isOpen: 0,
    };

    handleOpenClose = () => {
      this.setState({ isOpen: !this.state.open });
    };

    handleClose = () => {
      this.setState({ isOpen: false });
    };

    handleOpen = () => {
      this.setState({ isOpen: true });
    };

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          handleOpenClose={this.handleOpenClose}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
        />
      );
    }
  };

export default withOpenClose;
