import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm/LoginForm';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = location.state || {}.from || '/';
    history.push(destination);
  };

  render() {
    return (
      <section>
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

LoginPage.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};
