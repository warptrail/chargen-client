import React, { Component } from 'react';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    const { userName, password } = e.target;
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitLogin}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <input required name="user_name" id="LoginForm__user_name" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__user_password">Password</label>
          <input required name="user_name" id="LoginForm__password" />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}
