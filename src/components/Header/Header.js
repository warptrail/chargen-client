import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import RosterContext from '../../contexts/RosterContext';
import logo from '../../img/chargen_logo.svg';
import './Header.css';

export default class Header extends Component {
  static contextType = RosterContext;

  // Logs the user out by removing jwt token
  handleLogoutClick = () => {
    const { setAuthToken } = this.context;
    TokenService.clearAuthToken();
    setAuthToken(false);
  };

  // Conditional rendering of links
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link onClick={this.handleLogoutClick} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  }

  renderWelcomeMessage() {
    const username = TokenService.parseJwt(TokenService.getAuthToken()) || '';
    return (
      <p className="welcome_message">
        Welcome, Dungeon Master{' '}
        <span className="username_display">{username.sub} </span>
      </p>
    );
  }

  render() {
    const { hasAuthToken } = this.context;
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Chargen" />
        </div>
        <h1>Fantasy Character Generator</h1>
        {hasAuthToken ? this.renderWelcomeMessage() : ''}
        <nav>
          {hasAuthToken ? this.renderLogoutLink() : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}
