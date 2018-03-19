import React from 'react';

const axios = require('axios');

const withSendForm = Component =>
  class extends React.Component {
    componentWillMount = () => {
      this.setState({
        isLoading: false,
        error: false,
        success: false,
        formItem: {},
      });
    };

    handleChange = (title, name) => event => {
      this.setState({
        formItem: {
          ...this.state.formItem,
          title,
          [name]: event.target.value,
        },
      });
    };

    sendMail = () => {
      this.setState({
        isLoading: true,
      });
      axios
        .get('/api/send', {
          params: {
            ...this.state.formItem,
          },
        })
        .then(res => {
          if (res.data === 'error') {
            this.setState({
              error: true,
              isLoading: false,
            });
          } else if (res.data === 'sent') {
            this.setState({
              success: true,
              isLoading: false,
              formItem: {},
            });
          }
          setTimeout(() => {
            this.setState({
              success: false,
              error: false,
            });
            //
          }, 3500);
        })
        .catch(error => {
          console.log('ERROR', error);
          this.setState({
            isLoading: false,
            error: true,
          });
        });
    };

    render() {
      return (
        <Component
          {...this.props}
          formItem={this.state.formItem}
          isLoading={this.state.isLoading}
          success={this.state.success}
          error={this.state.error}
          handleChange={this.handleChange}
          sendMail={this.sendMail}
        />
      );
    }
  };

export default withSendForm;
