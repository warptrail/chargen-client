import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './CharacterCard.css';

// Component that displays minimal Character info in RosterPage
export default class CharacterCard extends Component {
  static defaultProps = {
    character: {
      id: 0,
      char_name: '',
      title: '',
      char_class: '',
      race: '',
      background: '',
      alignment: '',
      number_of_items: ''
    }
  };

  render() {
    // character info displayed on card
    const { character } = this.props;
    return (
      <section className="character_card">
        <Link to={`/roster/${character.id}`}>
          <div>
            <h2 className="character_name">{character.char_name}</h2>
          </div>

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
            <span className="character_card_key">Number of Items:</span>{' '}
            {character.number_of_items}
          </p>
        </Link>
      </section>
    );
  }
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    char_name: PropTypes.string,
    title: PropTypes.string,
    char_class: PropTypes.string,
    race: PropTypes.string,
    background: PropTypes.string,
    alignment: PropTypes.string,
    number_of_items: PropTypes.number
  })
};
