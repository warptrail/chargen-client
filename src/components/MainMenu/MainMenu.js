import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MainMenu.css';

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <p className="intro">
          Store your Dungeons & Dragons characters in this list. Create new
          characters, edit them, randomize their stats, and add special items to
          their inventories.
        </p>
        <p>Login: username = warptrail. password = 1234AbC$ </p>
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
