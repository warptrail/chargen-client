import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterContext from '../../contexts/CharacterContext';
import CharactersService from '../../services/character-api-service';
import getRandomStats from '../../utils/randomize';

import './CharacterForm.css';

// Component serves as form to create new character or edit existing character
export default class CharacterForm extends Component {
  static contextType = CharacterContext;

  static defaultProps = {
    characterId: null,
    returnToRosterPage: () => {},
    returnToCharacterPage: () => {}
  };

  // Make the form controlled by using state and onchange
  state = {
    character: {
      charName: '',
      title: '',
      charClass: 'barbarian',
      race: 'human',
      alignment: 'lawful good',
      background: '',
      charLevel: 1,
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: ''
    },
    isUpdateForm: false
  };

  componentDidMount() {
    // Determines if form will be for new character or update existing on mounting
    const { characterId } = this.props;
    if (characterId) {
      this.getCharacterData(characterId);
    }
  }

  // For updating existing character only
  getCharacterData = (characterId) => {
    const { setCharacter } = this.context;
    this.setState({ isUpdateForm: true });
    CharactersService.getCharacter(characterId)
      .then(setCharacter)
      .then(() => this.setCharacterFormFields())
      .catch((error) => {
        console.error(error);
      });
  };

  // Auto-populate fields for updating existing character
  setCharacterFormFields = () => {
    const { character } = this.context;
    const { isUpdateForm } = this.state;

    if (isUpdateForm) {
      this.setState({
        character: {
          charName: character.char_name,
          title: character.title,
          charClass: character.char_class,
          race: character.race,
          alignment: character.alignment,
          background: character.background,
          charLevel: character.char_level,
          strength: character.strength,
          dexterity: character.dexterity,
          constitution: character.constitution,
          intelligence: character.intelligence,
          wisdom: character.wisdom,
          charisma: character.charisma
        }
      });
    }
  };

  // Changes state to sync with input field changes
  handleChange = (e) => {
    const { value } = e.target;
    const { character } = this.state;
    this.setState({
      character: {
        ...character,
        [e.target.name]: value
      }
    });
  };

  // Makes the Patch fetch request for updating existing character
  handleSubmitUpdate = (e) => {
    const { characterId, returnToCharacterPage } = this.props;
    const { character } = this.state;

    e.preventDefault();
    CharactersService.patchCharacter(character, characterId).then(() => {
      returnToCharacterPage();
    });
  };

  // Makes the Post for creating new character
  handleSubmitNewCharacter = (e) => {
    const { returnToRosterPage } = this.props;
    const { character } = this.state;
    e.preventDefault();
    CharactersService.postCharacter(character).then(() => {
      returnToRosterPage();
    });
  };

  // Logic to randomize stats
  handleRandomizeStats = () => {
    const { character } = this.state;
    this.setState({
      character: {
        ...character,
        strength: getRandomStats(8, 25),
        dexterity: getRandomStats(8, 25),
        constitution: getRandomStats(8, 25),
        intelligence: getRandomStats(8, 25),
        wisdom: getRandomStats(8, 25),
        charisma: getRandomStats(8, 25)
      }
    });
  };

  renderInfoForm = () => {
    const { character } = this.state;
    return (
      <fieldset id="character_info">
        <legend className="form_legend" htmlFor="character_info">
          Character Info
        </legend>
        <label htmlFor="charName">Name</label>
        <input
          required
          name="charName"
          id="charName"
          type="text"
          value={character.charName}
          onChange={this.handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          required
          name="title"
          id="title"
          type="text"
          value={character.title}
          onChange={this.handleChange}
        />

        <label htmlFor="charClass">Class</label>
        <select
          name="charClass"
          id="charClass"
          onChange={this.handleChange}
          value={character.charClass}
        >
          <option value="barbarian">Barbarian</option>
          <option value="bard">Bard</option>
          <option value="cleric">Cleric</option>
          <option value="druid">Druid</option>
          <option value="fighter">Fighter</option>
          <option value="monk">Monk</option>
          <option value="paladin">Paladin</option>
          <option value="ranger">Ranger</option>
          <option value="rogue">Rogue</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="warlock">Warlock</option>
          <option value="wizard">Wizard</option>
        </select>

        <label htmlFor="race">Race</label>
        <select
          name="race"
          id="race"
          onChange={this.handleChange}
          value={character.race}
        >
          <option value="human">Human</option>
          <option value="elf">Elf</option>
          <option value="dwarf">Dwarf</option>
          <option value="halfling">Halfling</option>
          <option value="gnome">Gnome</option>
          <option value="orc">Orc</option>
          <option value="troll">Troll</option>
          <option value="dragonborn">Dragonborn</option>
          <option value="tiefling">Tiefling</option>
          <option value="tabaxi">Tabaxi</option>
        </select>

        <label htmlFor="alignment">Alignment</label>
        <select
          name="alignment"
          id="alignment"
          onChange={this.handleChange}
          value={character.alignment}
        >
          <option value="lawful good">Lawful Good</option>
          <option value="neutral good">Neutral Good</option>
          <option value="chaotic good">Chaotic Good</option>
          <option value="lawful neutral">Lawful Neutral</option>
          <option value="neutral">Neutral</option>
          <option value="chaotic neutral">Chaotic Neutral</option>
          <option value="lawful evil">Lawful Evil</option>
          <option value="neutral evil">Neutral Evil</option>
          <option value="chaotic evil">Chaotic Evil</option>
        </select>

        <label htmlFor="background">Background</label>
        <input
          required
          name="background"
          id="background"
          type="text"
          value={character.background}
          onChange={this.handleChange}
        />

        <label htmlFor="charLevel">Level</label>
        <input
          required
          name="charLevel"
          id="charLevel"
          type="number"
          min="1"
          value={character.charLevel}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  };

  renderStatsForm = () => {
    const { character } = this.state;
    return (
      <fieldset id="stats" className="stats_form">
        <legend className="form_legend" htmlFor="stats">
          Stats Form
        </legend>
        <button
          className="randomize_button"
          type="button"
          onClick={this.handleRandomizeStats}
        >
          Randomize
        </button>
        <label htmlFor="strength">strength</label>
        <input
          required
          name="strength"
          id="strength"
          type="number"
          value={character.strength}
          onChange={this.handleChange}
        />
        <label htmlFor="dexterity">dexterity</label>
        <input
          required
          name="dexterity"
          id="dexterity"
          type="number"
          value={character.dexterity}
          onChange={this.handleChange}
        />
        <label htmlFor="constitution">constitution</label>
        <input
          required
          name="constitution"
          id="constitution"
          type="number"
          value={character.constitution}
          onChange={this.handleChange}
        />
        <label htmlFor="intelligence">intelligence</label>
        <input
          required
          name="intelligence"
          id="intelligence"
          type="number"
          value={character.intelligence}
          onChange={this.handleChange}
        />
        <label htmlFor="wisdom">wisdom</label>
        <input
          required
          name="wisdom"
          id="wisdom"
          type="number"
          value={character.wisdom}
          onChange={this.handleChange}
        />
        <label htmlFor="charisma">charisma</label>
        <input
          required
          name="charisma"
          id="charisma"
          type="number"
          value={character.charisma}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  };

  render() {
    const { isUpdateForm } = this.state;
    return (
      <form
        className="character_form"
        onSubmit={
          isUpdateForm ? this.handleSubmitUpdate : this.handleSubmitNewCharacter
        }
      >
        <div className="info_box">{this.renderInfoForm()}</div>
        <div className="stats_box">{this.renderStatsForm()}</div>
        <div className="submit_character_form_btn">
          <button id="submit-character-form" type="submit">
            {isUpdateForm ? 'update' : 'new character'}
          </button>
        </div>
      </form>
    );
  }
}

CharacterForm.propTypes = {
  characterId: PropTypes.string,
  returnToRosterPage: PropTypes.func,
  returnToCharacterPage: PropTypes.func
};
