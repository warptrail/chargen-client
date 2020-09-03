/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CharacterContext from '../../contexts/CharacterContext';
import CharacterApiService from '../../services/character-api-service';
import CharacterSheet from '../../components/CharacterSheet/CharacterSheet';
import CharacterItems from '../../components/CharacterItems/CharacterItems';

export default class SingleCharacterPage extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = CharacterContext;

  componentDidMount() {
    const { characterId } = this.props.match.params;
    this.context.clearError();
    CharacterApiService.getCharacter(characterId)
      .then(this.context.setCharacter)
      .catch(this.context.setError);
    CharacterApiService.getCharacterItems(characterId)
      .then(this.context.setItems)
      .catch(this.context.setError);
  }

  renderCharacterSheet() {
    const { character, items } = this.context;
    return (
      <div>
        <CharacterSheet character={character} />
        <CharacterItems items={items} />
      </div>
    );
  }

  render() {
    console.log(this.context);
    const { error } = this.context;
    return (
      <>
        <Link to="/roster">
          <p>Back to Roster</p>
        </Link>
        <section className="CharacterSheet">
          {error ? (
            <p>There was an error, try again</p>
          ) : (
            this.renderCharacterSheet()
          )}
        </section>
      </>
    );
  }
}
