/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import RosterContext from '../../contexts/RosterContext';
import './Header.css';

export default class Header extends Component {
  static contextType = RosterContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.context.setAuthToken(false);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          <li>Logout</li>
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <header className="header">
        <h1>
          <Link to="/">Chargen</Link>
        </h1>
        <nav>
          <ul>
            {this.context.hasAuthToken
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </ul>
        </nav>
      </header>
    );
  }
}
