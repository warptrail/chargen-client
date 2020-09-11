/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './CharacterCard.css';

export default class CharacterCard extends Component {
  render() {
    const { character } = this.props;
    return (
      <section className="character_card">
        <Link to={`/roster/${character.id}`}>
          <div>
            <h2 className="character_name">{character.char_name}</h2>
          </div>
        </Link>

        <p className="character_card_title">{character.title}</p>
        <p>
          <span className="character_card_key">Class:</span>{' '}
          {character.char_class}
        </p>
        <p>
          {' '}
          <span className="character_card_key">Race:</span> {character.race}
        </p>
        <p>
          {' '}
          <span className="character_card_key">Background:</span>{' '}
          {character.background}
        </p>
        <p>
          {' '}
          <span className="character_card_key">Alignment:</span>{' '}
          {character.alignment}
        </p>
        <p>
          {' '}
          <span className="character_card_key">User:</span>{' '}
          {character.user.user_name}
        </p>
        <p>
          {' '}
          <span className="character_card_key">Number of Items:</span>{' '}
          {character.number_of_items}
        </p>
      </section>
    );
  }
}
