import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import RosterContext from '../../contexts/RosterContext';

import './RegistrationForm.css';

export default class RegistrationForm extends Component {
  static contextType = RosterContext;

  state = { error: null };

  handleSubmitJwtAuth = (user_name, password) => {
    const { setAuthToken } = this.context;

    AuthApiService.postLogin({
      user_name,
      password
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);

        setAuthToken(true);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleSubmitRegistration = (e) => {
    e.preventDefault();
    const { user_name, password } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value
    })
      .then(() => {
        this.handleSubmitJwtAuth(user_name.value, password.value);
        user_name.value = '';
        password.value = '';
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className="registration_form"
        onSubmit={this.handleSubmitRegistration}
      >
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="registration_form_user_name">
          <label htmlFor="registration_form__user_name">User name</label>
          <input required name="user_name" id="registration_form__user_name" />
        </div>
        <div className="registration_form_password">
          <label htmlFor="registration_form__user_password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="registration_form__password"
          />
        </div>
        <div className="registration_form_submit_btn">
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}
