/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import RosterContext from '../../contexts/RosterContext';

import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  static contextType = RosterContext;

  state = { error: null };

  // Logic to log in and make post fetch request to auth endpoint
  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        this.context.setAuthToken(true);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="login_form" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="login_form_user_name">
          <label htmlFor="login_form__user_name">User name</label>
          <input required name="user_name" id="login_form__user_name" />
        </div>
        <div className="login_form_password">
          <label htmlFor="login_form__user_password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="login_form__password"
          />
        </div>
        <div className="login_form_submit_btn">
          <button type="submit">Login</button>
        </div>
        <p>For Demo mode enter the following:</p>
        <ul>
          <li>
            User name: <span className="demo_info">demo</span>
          </li>
          <li>
            password: <span className="demo_info">Chargen2%</span>
          </li>
        </ul>
      </form>
    );
  }
}
