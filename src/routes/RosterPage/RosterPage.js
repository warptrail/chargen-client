import React, { Component } from 'react';
import CharacterRoster from '../../components/CharacterRoster/CharacterRoster';

import './RosterPage.css';

class RosterPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>Your Character Roster Here:</h2>
        <CharacterRoster />
      </div>
    );
  }
}

export default RosterPage;

// Needs to pull all characters
// Display them as cards in a grid
// Name Picture Class Level
