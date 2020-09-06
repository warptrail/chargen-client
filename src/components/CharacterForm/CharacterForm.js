/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import CharacterContext from '../../contexts/CharacterContext';
import CharactersService from '../../services/character-api-service';

export default class CharacterForm extends Component {
  state = {
    character: {
      charName: '',
      title: '',
      charClass: '',
      race: '',
      alignment: '',
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

    // CharactersService.getCharacter(characterId)
    //   .then(this.context.setCharacter)
    //   .catch(this.context.setError);
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
    CharactersService.patchCharacter(data, characterId);
    this.props.returnToCharacterPage();
  };

  handleSubmitNewCharacter = (e) => {
    e.preventDefault();
    const data = this.state.character;
    CharactersService.postCharacter(data);
    this.props.returnToRosterPage();
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
        <input
          required
          name="charClass"
          type="text"
          value={this.state.character.charClass}
          onChange={this.handleChange}
        />

        <label htmlFor="race">Race</label>
        <input
          required
          name="race"
          type="text"
          value={this.state.character.race}
          onChange={this.handleChange}
        />

        <label htmlFor="alignment">Alignment</label>
        <input
          required
          name="alignment"
          type="text"
          value={this.state.character.alignment}
          onChange={this.handleChange}
        />

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

        <h4>Base Stats</h4>

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

        <button type="submit">
          {this.state.isUpdateForm ? 'update' : 'new character'}
        </button>
      </form>
    );
  }
}
