import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <ul className="MainMenu">
          <Link to="/create">
            <li className="MainMenu__item">Create New Character</li>
          </Link>
          <Link to="/roster">
            <li className="MainMenu__item">My Roster</li>
          </Link>
          <Link to="/about">
            <li className="MainMenu__item">About Page</li>
          </Link>
        </ul>
      </div>
    );
  }
}
