/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import CharacterContext from '../../contexts/CharacterContext';
import CharactersService from '../../services/character-api-service';
import getRandomStats from '../../utils/randomize';

import './CharacterForm.css';

export default class CharacterForm extends Component {
  state = {
    character: {
      charName: '',
      title: '',
      charClass: 'barbarian',
      race: 'human',
      alignment: 'lawful good',
      background: '',
      charLevel: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: ''
    },
    isFetching: false,
    isUpdateForm: false
  };

  static contextType = CharacterContext;

  componentDidMount() {
    const { characterId } = this.props;
    console.log(characterId);
    if (characterId) {
      this.getCharacterData(characterId);
    }
  }

  getCharacterData = (characterId) => {
    this.setState({ isFetching: true, isUpdateForm: true });
    CharactersService.getCharacter(characterId)
      .then(this.context.setCharacter)
      .then(() => this.setCharacterFormFields())
      .catch((error) => {
        this.setState({ isFetching: false });
        console.error(error);
      });
  };

  setCharacterFormFields = () => {
    console.log(this.context.character);
    const { character } = this.context;
    if (this.state.isUpdateForm) {
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
        },
        isFetching: false
      });
    }
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      character: {
        ...this.state.character,
        [e.target.name]: value
      }
    });
  };

  handleSubmitUpdate = (e) => {
    const { characterId } = this.props;
    const data = this.state.character;
    e.preventDefault();
    CharactersService.patchCharacter(data, characterId).then(() => {
      this.props.returnToCharacterPage();
    });
  };

  handleSubmitNewCharacter = (e) => {
    e.preventDefault();
    const data = this.state.character;
    CharactersService.postCharacter(data).then((post) => {
      this.props.returnToRosterPage();
    });
  };

  handleRandomizeStats = () => {
    this.setState({
      character: {
        ...this.state.character,
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
    return (
      <fieldset>
        <label htmlFor="charName">Name</label>
        <input
          required
          name="charName"
          type="text"
          value={this.state.character.charName}
          onChange={this.handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          required
          name="title"
          type="text"
          value={this.state.character.title}
          onChange={this.handleChange}
        />

        <label htmlFor="charClass">Class</label>
        <select
          name="charClass"
          onChange={this.handleChange}
          value={this.state.character.charClass}
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
          onChange={this.handleChange}
          value={this.state.character.race}
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
          onChange={this.handleChange}
          value={this.state.character.alignment}
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
          type="text"
          value={this.state.character.background}
          onChange={this.handleChange}
        />

        <label htmlFor="charLevel">Level</label>
        <input
          required
          name="charLevel"
          type="number"
          value={this.state.character.charLevel}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  };

  renderStatsForm = () => {
    return (
      <fieldset className="stats_form">
        <button type="button" onClick={this.handleRandomizeStats}>
          Randomize
        </button>
        <label htmlFor="strength">strength</label>
        <input
          required
          name="strength"
          type="number"
          value={this.state.character.strength}
          onChange={this.handleChange}
        />
        <label htmlFor="dexterity">dexterity</label>
        <input
          required
          name="dexterity"
          type="number"
          value={this.state.character.dexterity}
          onChange={this.handleChange}
        />
        <label htmlFor="constitution">constitution</label>
        <input
          required
          name="constitution"
          type="number"
          value={this.state.character.constitution}
          onChange={this.handleChange}
        />
        <label htmlFor="intelligence">intelligence</label>
        <input
          required
          name="intelligence"
          type="number"
          value={this.state.character.intelligence}
          onChange={this.handleChange}
        />
        <label htmlFor="wisdom">wisdom</label>
        <input
          required
          name="wisdom"
          type="number"
          value={this.state.character.wisdom}
          onChange={this.handleChange}
        />
        <label htmlFor="charisma">charisma</label>
        <input
          required
          name="charisma"
          type="number"
          value={this.state.character.charisma}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  };

  render() {
    return (
      <form
        onSubmit={
          this.state.isUpdateForm
            ? this.handleSubmitUpdate
            : this.handleSubmitNewCharacter
        }
      >
        <div className="info_box">
          <h4>Character Info</h4>
          {this.renderInfoForm()}
        </div>
        <div className="stats_box">
          <h4>Base Stats</h4>
          {this.renderStatsForm()}
        </div>

        <button id="submit-character-form" type="submit">
          {this.state.isUpdateForm ? 'update' : 'new character'}
        </button>
      </form>
    );
  }
}
