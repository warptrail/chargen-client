/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import RosterContext from '../../contexts/RosterContext';
import CharApiService from '../../services/character-api-service';
import SecondaryHeader from '../../components/SecondaryHeader/SecondaryHeader';
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
    const { error, roster } = this.context;
    return (
      <>
        <SecondaryHeader page="roster" />
        <section className="RosterPage">
          <h2>Your Character Roster Here:</h2>
          {roster.length > 0 ? (
            <p className="subtext">
              {' '}
              Click on a character card for more info and to access edit/delete
              controls
            </p>
          ) : (
            <p className="subtext">
              No Characters in your realm yet. Summon one by clicking &quot;New
              Character&quot; above!
            </p>
          )}
          {error ? (
            <p>There was an error, try again</p>
          ) : (
            this.renderCharacters()
          )}
        </section>
      </>
    );
  }
}

export default RosterPage;
