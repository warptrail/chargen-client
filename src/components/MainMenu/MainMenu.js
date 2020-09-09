import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <ul className="MainMenu">
          <Link to="/create">
            <li className="MainMenu__item">Create New</li>
          </Link>
          <Link to="/roster">
            <li className="MainMenu__item">Roster</li>
          </Link>
        </ul>
      </div>
    );
  }
}
