import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenServices from '../../services/token-service';
import './Navbar.css';
import TokenService from '../../services/token-service';

export default class Navbar extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.setState({
      isLoggedIn: false
    });
  };

  renderLogoutLink = () => {
    return (
      <li>
        <Link onClick={this.handleLogoutClick} to="/">
          <span>Logout</span>
        </Link>
      </li>
    );
  };

  renderLoginLink = () => {
    return (
      <>
        <li>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </li>
      </>
    );
  };

  render() {
    return (
      <nav>
        <ul>
          {TokenServices.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </ul>
      </nav>
    );
  }
}
