import React from 'react';

const withSteps = Component =>
  class extends React.Component {
    state = {
      stepIndex: 0,
    };

    changeStep = index => {
      this.setState({ stepIndex: index });
    };

    render() {
      return (
        <Component
          {...this.props}
          stepIndex={this.state.stepIndex}
          changeStep={this.changeStep}
        />
      );
    }
  };

export default withSteps;
