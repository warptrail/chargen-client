import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <section>
        <h2>New User Registration</h2>
        <RegistrationForm />
      </section>
    );
  }
}
