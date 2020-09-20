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
        <p>
          Password must be longer than 8 characters, it must contain at least
          one uppercase character, one lowercase character, a number and a
          special character.
        </p>
        <RegistrationForm />
      </section>
    );
  }
}
