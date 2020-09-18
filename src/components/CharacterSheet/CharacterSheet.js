import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CharacterSheet.css';

// Component for detailed information for single character view
class CharacterSheet extends Component {
  static defaultProps = {
    character: {
      id: 0,
      char_name: '',
      title: '',
      char_class: '',
      race: '',
      background: '',
      alignment: '',
      number_of_items: '',
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    }
  };

  render() {
    const { character } = this.props;
    return (
      <section className="character_sheet">
        <h2 className="character_sheet_name">{character.char_name}</h2>

        <div>
          <h3 className="character_sheet_title">{character.title}</h3>
        </div>
        <p>
          <span className="character_sheet_key">Class:</span>{' '}
          {character.char_class}
        </p>
        <p>
          {' '}
          <span className="character_sheet_key">Race:</span> {character.race}
        </p>
        <p>
          {' '}
          <span className="character_sheet_key">Background:</span>{' '}
          {character.background}
        </p>
        <p>
          {' '}
          <span className="character_sheet_key">Alignment:</span>{' '}
          {character.alignment}
        </p>
        <p>
          {' '}
          <span className="character_sheet_key">Number of Items:</span>{' '}
          {character.number_of_items}
        </p>

        <h3>Stats</h3>
        <section className="stats">
          <div className="stat_box">
            <div className="stat_box_title">Strength</div>
            <p>{character.strength}</p>
          </div>
          <div className="stat_box">
            <div className="stat_box_title">Dexterity</div>
            <p>{character.dexterity}</p>
          </div>
          <div className="stat_box">
            <div className="stat_box_title">Constitution</div>
            <p>{character.constitution}</p>
          </div>
          <div className="stat_box">
            <div className="stat_box_title">Intelligence</div>
            <p>{character.intelligence}</p>
          </div>
          <div className="stat_box">
            <div className="stat_box_title">Wisdom</div>
            <p>{character.wisdom}</p>
          </div>
          <div className="stat_box">
            <div className="stat_box_title">Charisma</div>
            <p>{character.charisma}</p>
          </div>
        </section>
      </section>
    );
  }
}

CharacterSheet.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    char_name: PropTypes.string,
    title: PropTypes.string,
    char_class: PropTypes.string,
    race: PropTypes.string,
    background: PropTypes.string,
    alignment: PropTypes.string,
    number_of_items: PropTypes.number,
    strength: PropTypes.number,
    dexterity: PropTypes.number,
    constitution: PropTypes.number,
    intelligence: PropTypes.number,
    wisdom: PropTypes.number,
    charisma: PropTypes.number
  })
};

export default CharacterSheet;
