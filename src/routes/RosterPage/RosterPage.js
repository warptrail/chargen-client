/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import RosterContext from '../../contexts/RosterContext';
import CharApiService from '../../services/character-api-service';
import './RosterPage.css';

class RosterPage extends Component {
  static contextType = RosterContext;

  componentDidMount() {
    this.context.clearError();
    CharApiService.getRoster()
      .then(this.context.setRoster)
      .catch(this.context.setError);
  }

  renderCharacters() {
    const { roster = [] } = this.context;
    return roster.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <section className="RosterPage">
        <h2>Your Character Roster Here:</h2>
        {error ? <p>There was an error, try again</p> : this.renderCharacters()}
      </section>
    );
  }
}

export default RosterPage;

// Needs to pull all characters
// Display them as cards in a grid
// Name Picture Class Level
