import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmitRegistration = (e) => {
    e.preventDefault();
    const { user_name, password } = e.target;
    console.log(user_name.value, password.value);
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then((user) => {
        user_name.value = '';
        password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className="RegistrationForm"
        onSubmit={this.handleSubmitRegistration}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">User name</label>
          <input required name="user_name" id="RegistrationForm__user_name" />
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">Password</label>
          <input required name="password" id="RegistrationForm__password" />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}
